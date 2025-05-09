import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Icons, ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

function Checkout () {
  const [selectedShipping, setSelectedShipping] = useState(1);
  const BuyingProducts = useSelector((state) => state.cart);


  const [cardNumber, setCardNumber] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  
  const [zipCode, setZipCode] = useState('');

const handleCardInput = (e, setValue, maxLength) => {
  let value = e.target.value.replace(/[^0-9]/g, ""); 
  setValue(value.slice(0, maxLength)); 
};

const handleCardCvv = (e) => handleCardInput(e, setCardCvv, 3);
const handleCardNumberChange = (e) => {
  let value = e.target.value.replace(/[^0-9]/g, ""); 
  value = value.replace(/(.{4})(?=.)/g, "$1-"); 
  setCardNumber(value.slice(0, 19)); 
};
const handleZipCode = (e) => handleCardInput(e, setZipCode, 10);

  
  

  let texses = BuyingProducts.reduce(
    (acc, product) => parseInt(acc + product.price * 0.25),
    0
  );
  const SubTotal = BuyingProducts.reduce(
    (acc, product) => parseInt(acc + (product.price * product.quantity)),
    0
  );

  let Shipping = 8;
  let Total = parseInt(texses + SubTotal + Shipping);
  if (Total < 200) {
    texses = 0;
    Total = parseInt(SubTotal + Shipping);
  }

  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/logIn"); 
      }
    });
  
    return () => unsubscribe();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisable(true);

    const toastId = toast.loading("Processing your order...", {
      position: "top-right",
      autoClose: false,
      progress: undefined,
    });

    setTimeout(() => {
      toast.update(toastId, {
        render: "Order Placed Successfully!",
        type: "success",
        icon: Icons.success,
        autoClose: 1000,
        progress: undefined,
      });
      setDisable(false);
      navigate("/");
    }, 4000);
  };
  if (BuyingProducts.length == 0) {
    return (
      <div className="py-30 text-center">
        <h1 className="text-2xl">There is No Product in your Cart</h1>
        <Link to={"/"}>
          <button className="link uppercase cursor-pointer text-2xl mt-5">
            Go to Shopping
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div className="py-28">
      {/* Header */}
      <div className="flex flex-col items-center border-b py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <h1 href="#" className="text-2xl font-bold text-gray-800">
          CheckOut Your Products
        </h1>
      </div>

      {/* Order Summary */}
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 mt-5">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {/* Mapping */}
            {BuyingProducts.map((product) => {
              return (
                <div
                  className="flex flex-col rounded-lg bg-white sm:flex-row"
                  key={product.id}
                >
                  <img
                    className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="flex w-full flex-col px-4 py-4">
                    <span className="font-semibold">{product.title}</span>
                    <span className="float-right text-gray-400">Quantity:{product.quantity}</span>
                    <p className="text-lg font-bold">${product.price}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <form className="mt-5 grid gap-6">
            {/* Shipping Option 1 */}
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked={selectedShipping === 1}
                onChange={() => setSelectedShipping(1)}
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                htmlFor="radio_1"
              >
                <img
                  className="w-14 object-contain"
                  src="https://images.seeklogo.com/logo-png/5/1/fedex-logo-png_seeklogo-53457.png"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Fedex Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>

            {/* Shipping Option 2 */}
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_2"
                type="radio"
                name="radio"
                checked={selectedShipping === 2}
                onChange={() => setSelectedShipping(2)}
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                htmlFor="radio_2"
              >
                <img
                  className="w-14 object-contain"
                  src="https://cdn.worldvectorlogo.com/logos/dhl-3.svg"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Fedex Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>

        {/* Payment Details */}
        <form
          className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0"
          onSubmit={handleSubmit}
        >
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <div>
            {/* Email */}
            <label
              htmlFor="email"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="your.email@gmail.com"
                required
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>

            {/* Card Holder */}
            <label
              htmlFor="card-holder"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Card Holder
            </label>
            <div className="relative">
              <input
                type="text"
                id="card-holder"
                name="card-holder"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your full name here"
                required
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              </div>
            </div>
            {/* Card Details */}
            <label
              htmlFor="card-no"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Card Details
            </label>
            <div className="flex">
              <div className="relative w-7/12 flex-shrink-1">
                <input
                  type="text"
                  value={cardNumber}
                  minLength="16"
                  maxLength="19"
                  id="card-no"
                  name="card-no"
                  className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                  required
                  inputMode="numeric"
                  onChange={handleCardNumberChange}
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                  </svg>
                </div>
              </div>
              <input
                type="month"
                name="credit-expiry"
                className="w-fit rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                minLength="3"
                maxLength="3"
                name="credit-cvc"
                className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="CVC"

                required
                value={cardCvv}
                inputMode="numeric"
                onChange={handleCardCvv}
              />
            </div>
            {/* Billing Address */}
            <label
              htmlFor="billing-address"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Billing Address
            </label>
            <div className="flex flex-col sm:flex-row">
              <div className="relative flex-shrink-0 sm:w-7/12">
                <input
                  type="text"
                  id="billing-address"
                  name="billing-address"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Street Address"
                  required
                />
 
              </div>
              <select
                type="text"
                name="billing-state"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="State">State</option>
              </select>
              <input
                type="text"
                name="billing-zip"
                className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="ZIP"
                required
                value={zipCode}
                inputMode="numeric"
                onChange={handleZipCode}
              />
            </div>

            {/* Total */}
            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">${SubTotal}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Shipping</p>
                <p className="font-semibold text-gray-900">${Shipping}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Texses </p>
                <p className="font-semibold text-gray-900">${texses}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">${Total}</p>
            </div>
          </div>
          <button
            className="mt-6 block w-full rounded-md bg-blue-600 py-3 text-center text-sm font-semibold text-white"
            disabled={disable}
          >
            {disable ? "Processing..." : "Place Order"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
