import React, { useEffect, useState, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../rtk/slices/product-slice";
import { addToCart } from "../rtk/slices/cart-slice";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";

import { addToWishList } from "../rtk/slices/wishList";

const FiHeartIcon = lazy(() => import('react-icons/fi').then(module => ({ default: module.FiHeart })));

function CategoryPage() {
  const { categoryName } = useParams();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    if (!categoryName) {
      setLoading(false);
      return;
    }

    dispatch(fetchProducts());
    setLoading(false);
  }, [categoryName, dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-gray-900"></div>
      </div>
    );
  }

  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );

  return (
    <div className="bg-gray-100 min-h-screen py-30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          {categoryName.toUpperCase()}
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3, 
                delayChildren: 0.3,  
              },

            },
          }}
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0,  }} 
              whileInView={{ opacity: 1,  }} 
              transition={{
                duration: 1,
                delay: index * 0.3, 

              }}
            >
                 <div className="relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden group h-full">
                   <div className="relative">
                     <img
                       src={product.image}
                       alt={product.name}
                       className="w-full h-64 object-cover transform transition-transform duration-1200 group-hover:scale-110"
                     />
 
                     <Suspense fallback={<div>Loading...</div>}>
                       <FiHeartIcon
                         size={30}
                         className="absolute top-2 right-2 bg-white text-black p-2 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer group hover:bg-black hover:text-white"
                         onClick={() => {
                           dispatch(addToWishList(product));
                         }}
                       />
                     </Suspense>
                   </div>
 
                   <div className="p-6 flex flex-col justify-between h-full">
                     <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
                     <p className="text-gray-600 text-sm mb-4">
                       {product.description.length > 50
                         ? product.description.substring(0, 50) + "..."
                         : product.description}
                     </p>
                     <div className="flex items-center justify-between">
                       <p className="text-lg font-bold text-gray-900">${product.price}</p>
                       <button
                         className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
                         onClick={() => {
                           dispatch(addToCart(product));
                         }}
                       >
                         Add to Cart
                       </button>
                     </div>
                   </div>
                 </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default CategoryPage;
