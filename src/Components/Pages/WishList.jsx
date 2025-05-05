import { lazy } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../rtk/slices/cart-slice";
import { clear, removeFromWishList } from "../rtk/slices/wishList";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";

const FaTrashAlt = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaTrashAlt })));

function WishList() {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishList);

  if (wishList.length === 0) {
    return (
      <div className="wishlist container py-40 text-center">
        <h1 className="text-xl text-gray-800">
          Your WishList is Empty
        </h1>
        <Link to={"/"}>
          <button className="link uppercase cursor-pointer text-2xl mt-5 hover:text-gray-800">
            Go to Shopping
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="bg-white min-h-screen py-28">
        <motion.div 
          className="header"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-3xl text-center text-gray-800 mb-10 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Your WishList
          </motion.h1>
          <button
          onClick={() => dispatch(clear())}
          className="inline-flex items-center px-4 py-4 mb-3 ml-5 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
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
        </motion.div>
        
        <div className="grid grid-cols-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 ">
          {wishList.map((product) => (
            <motion.div
              className="w-full"
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />

                    <FaTrashAlt
                      size={30}
                      className="absolute top-2 right-2 bg-white text-black p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer group hover:bg-black hover:text-white"
                      onClick={() => dispatch(removeFromWishList(product))}
                    />
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <p className="text-sm text-gray-600 mb-3">{product.title}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold text-gray-900">
                      ${product.price}
                    </p>
                    <button
                      className="bg-yellow-500 text-white py-2 px-4 rounded-full text-sm hover:bg-yellow-600 cursor-pointer transition-all duration-300"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <ToastContainer position="bottom-right" />
      </div>
    );
  }
}

export default WishList;
