import React, { lazy, Suspense, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../rtk/slices/cart-slice";
import { addToWishList } from "../rtk/slices/wishList";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import { section1Data, iconData, categoryData } from "../../constants/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const FiHeartComponent = lazy(() =>
  import("react-icons/fi").then((module) => ({ default: module.FiHeart }))
);

const Section1 = React.memo(() => {
  const dispatch = useDispatch();

  const handleAddToCart = useCallback(
    (item) => {
      dispatch(addToCart(item));
    },
    [dispatch]
  );

  const handleAddToWishList = useCallback(
    (item) => {
      dispatch(addToWishList(item));
    },
    [dispatch]
  );

  return (
    <section className="section-1 bg-white text-center py-10">
      <div className="container w-[90%] mx-auto h-full">
        {/* Icons Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10">
          {iconData.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-center items-center mb-8"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -200 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <item.icon size={30} />
              </Suspense>
              <h5 className="text-2xl mt-4 mb-2 font-semibold">{item.title}</h5>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Category Section */}
        <div className="flex flex-col md:flex-row justify-center gap-6 py-10">
          {categoryData.map((item, index) => (
            <motion.div
              key={index}
              className="relative w-full md:w-1/3"
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              initial={{ opacity: 0, scale: 0.7, x: -200 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay }}
            >
              <Link to={item.link} aria-label="category link">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-[400px] object-cover rounded-2xl cursor-pointer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="relative inline-block px-6 py-3 font-semibold text-white bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                    {item.label}
                  </button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* New Arrivals Section */}
        <div className="relative">
          <div className="flex justify-between items-center py-7 ">
            <h4 className="md:text-3xl uppercase">Our New Arrivals</h4>
            <Link to={"AllProducts"}>
              <button className="link uppercase cursor-pointer overflow-hidden md:text-lg">
                View All Products
              </button>
            </Link>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={2}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              lazy={{ loadPrevNext: true }}
            >
              {section1Data.map((item) => (
                <SwiperSlide key={item.id}>
                  <motion.div
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.7 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full mx-auto px-2 group pb-10"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[150px] md:h-[300px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="text-left mt-4">
                      <h5 className="md:text-xl font-semibold">{item.title}</h5>
                      <span className="text-lg block">${item.price}</span>
                      <div className="flex justify-between mt-2">
                        <button
                          className="text-sm uppercase text-gray-700 hover:text-emerald-500"
                          onClick={() => handleAddToCart(item)}
                        >
                          Add to Cart
                        </button>
                        <Suspense fallback={<div>Loading...</div>}>
                          <FiHeartComponent
                            size={23}
                            onClick={() => handleAddToWishList(item)}
                            className="cursor-pointer text-gray-700 hover:text-emerald-500"
                          />
                        </Suspense>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Suspense>
          <div className="hidden md:block buttons">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>

        <ToastContainer position="bottom-right" />
      </div>
    </section>
  );
});

export default Section1;
