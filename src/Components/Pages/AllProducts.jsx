import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/product-slice";
import { addToCart } from "../rtk/slices/cart-slice";
import { addToWishList } from "../rtk/slices/wishList";

import 'toastify-js/src/toastify.css';
import { ToastContainer } from "react-toastify";

const FiHeart = lazy(() => import('react-icons/fi').then(module => ({ default: module.FiHeart })));

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">All Products</h1>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="group bg-white rounded-xl shadow-lg w-full sm:w-[48%] md:w-[100%] h-full"
              >
                <div className="relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden group h-full">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transform transition-transform duration-1200 group-hover:scale-110"
                    />

                    <Suspense fallback={<div>Loading...</div>}>
                      <FiHeart
                        size={30}
                        className="absolute top-2 right-2 bg-white text-black p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer group hover:bg-black hover:text-white"
                        onClick={() => {
                          dispatch(addToWishList(product));
                          notify("Product added to Wishlist successfully!");
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
              </div>
            );
          })}
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
      />
    </div>
  );
}

export default Products;
