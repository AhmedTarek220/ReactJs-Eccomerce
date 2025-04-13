import React, { useState, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear, removeFromCart, addToCart } from "../rtk/slices/cart-slice";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";


const FaAmazon = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaAmazon })));
const FaCcMastercard = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaCcMastercard })));
const FaCcVisa = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaCcVisa })));
const SiPaypal = lazy(() => import('react-icons/si').then(module => ({ default: module.SiPaypal })));
const FaCcAmex = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaCcAmex })));

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const total = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-2xl font-semibold">No Products in Your Cart</h1>
        <Link to={"/"}>
          <button className="link uppercase cursor-pointer text-xl mt-5">
            Go to Shopping
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="h-auto bg-gray-100 py-28 px-4 ">
        <h1 className="mb-10 text-center text-2xl font-semibold">
          Shopping Cart
        </h1>
        <button
          onClick={() => dispatch(clear())}
          className="inline-flex items-center px-4 py-4 mb-3 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
        >
          <svg
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>

          Delete All
        </button>


        <div className="">
          {/* Cart Products */}
          <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
            <div className="w-full md:w-2/3">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex justify-between mb-6 bg-white p-6 rounded-lg shadow-md items-center"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-20 h-20 md:w-60 md:h-full object-cover"
                  />
                  <div className="ml-4 flex-1">
                    <h2 className="md:text-lg font-bold text-gray-900">
                      {product.title}
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                      {product.category}
                    </p>
                    <p className="text-lg font-bold text-gray-800 mt-2">
                      ${product.price}
                    </p>

                    <div className="flex items-center mt-4">
                      <button
                        className="md:px-4 md:py-2 text-xl  font-bold flex bg-gray-200 text-gray-600 rounded-full px-2 py-2 hover:bg-gray-300"
                        onClick={() => {
                          if (product.quantity > 1) {
                            dispatch(
                              addToCart({
                                ...product,
                                quantity: product.quantity - 1,
                              })
                            );
                          }
                        }}
                      >
                        -
                      </button>
                      <input
                        className="w-12 text-center mx-4 border border-gray-300 rounded-md"
                        type="number"
                        value={product.quantity}
                        readOnly
                      />
                      <button
                        className="md:px-4 md:py-2 text-xl  font-bold flex bg-gray-200 text-gray-600 rounded-full px-2 py-2 hover:bg-gray-300"
                        onClick={() => {
                          dispatch(
                            addToCart({
                              ...product,
                              quantity: product.quantity + 1,
                            })
                          );
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div className="flex justify-between items-center mt-5">

                      <span className="text-2xl">Total:</span>
                      <p className="text-xl font-bold text-gray-800 ml-14">
                        ${(product.price * product.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <button

                      onClick={() => dispatch(removeFromCart(product))}
                      className="group relative flex h-14 w-14 flex-col items-center justify-center overflow-hidden rounded-xl  border-red-800 bg-red-400 hover:bg-red-600"
                    >
                      <svg
                        viewBox="0 0 1.625 1.625"
                        className="absolute -top-7 fill-white delay-100 group-hover:top-6 group-hover:animate-[spin_1.4s] group-hover:duration-1000"
                        height="15"
                        width="15"
                      >
                        <path
                          d="M.471 1.024v-.52a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099h-.39c-.107 0-.195 0-.195-.195"
                        ></path>
                        <path
                          d="M1.219.601h-.163A.1.1 0 0 1 .959.504V.341A.033.033 0 0 0 .926.309h-.26a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099v-.39a.033.033 0 0 0-.032-.033"
                        ></path>
                        <path
                          d="m1.245.465-.15-.15a.02.02 0 0 0-.016-.006.023.023 0 0 0-.023.022v.108c0 .036.029.065.065.065h.107a.023.023 0 0 0 .023-.023.02.02 0 0 0-.007-.016"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        fill="none"
                        viewBox="0 0 39 7"
                        className="origin-right duration-500 group-hover:rotate-90"
                      >
                        <line strokeWidth="4" stroke="white" y2="5" x2="39" y1="5"></line>
                        <line
                          strokeWidth="3"
                          stroke="white"
                          y2="1.5"
                          x2="26.0357"
                          y1="1.5"
                          x1="12"
                        ></line>
                      </svg>
                      <svg width="16" fill="none" viewBox="0 0 33 39" className="">
                        <mask fill="white" id="path-1-inside-1_8_19">
                          <path
                            d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                          ></path>
                        </mask>
                        <path
                          mask="url(#path-1-inside-1_8_19)"
                          fill="white"
                          d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                        ></path>
                        <path strokeWidth="4" stroke="white" d="M12 6L12 29"></path>
                        <path strokeWidth="4" stroke="white" d="M21 6V29"></path>
                      </svg>
                    </button>

                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md h-fit">
              <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
              <div className="flex justify-between mb-4">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">${total.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">$4.99</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between mb-6">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">
                    ${(total + 4.99).toFixed(2)} USD
                  </p>
                  <p className="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <div
                className="hdt-block-required flex justify-center gap-2 "
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              >
                <div className="hdt-checkbox-wrapp hdt-inline-grid hdt-relative hdt-oh mb-5">
                  <input
                    form="CartPage-Form"
                    className="hdt-grid-1x1"
                    type="checkbox"
                    id="CartPage-Form_agree"
                    name="agree_checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <label htmlFor="CartPage-Form_agree">
                  I agree with the{" "}
                  <a
                    href="/ar/pages/terms-conditions"
                    title="Terms &amp; Conditions"
                  >
                    <strong>terms and conditions</strong>
                  </a>
                </label>
              </div>
              <Link to={"/CheckOut"}>
                <button className="w-full bg-blue-500 md:text-2xl text-white py-2 rounded-md hover:bg-blue-600 cursor-pointer">
                  Check out
                </button>
              </Link>
              <h6 className="my-3 text-center text-xl">
                Guarantee Safe Checkout
              </h6>
              <div className="flex gap-2 justify-center">
                <div className="icon-container w-6 h-6 bg-white flex justify-center items-center">
                  <Suspense fallback={<div>Loading...</div>}>
                    <FaAmazon size={20} color="black" />
                  </Suspense>
                </div>
                <div className="icon-container w-6 h-6 bg-white flex justify-center items-center">
                  <Suspense fallback={<div>Loading...</div>}>
                    <FaCcAmex size={20} color="blue" />
                  </Suspense>
                </div>
                <div className="icon-container w-6 h-6 bg-white flex justify-center items-center">
                  <Suspense fallback={<div>Loading...</div>}>
                    <FaCcMastercard size={30} color="red" />
                  </Suspense>
                </div>
                <div className="icon-container w-6 h-6 bg-white flex justify-center items-center">
                  <Suspense fallback={<div>Loading...</div>}>
                    <SiPaypal size={20} color="#003087" />
                  </Suspense>
                </div>
                <div className="icon-container w-6 h-6 bg-white flex justify-center items-center">
                  <Suspense fallback={<div>Loading...</div>}>
                    <FaCcVisa size={20} color="#1a1f71" />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ToastContainer position="bottom-right" />
      </div>
    );
  }
}

export default Cart;
