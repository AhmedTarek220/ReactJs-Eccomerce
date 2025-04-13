import React, { lazy, Suspense, useCallback } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../rtk/slices/cart-slice";
import { addToWishList } from "../rtk/slices/wishList";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { section2Data } from "../../constants/Data";



const FiHeartComponent = lazy(() => import('react-icons/fi').then(module => ({ default: module.FiHeart })));

const Section2 = React.memo(() => {
  const dispatch = useDispatch();

  const handleAddToCart = useCallback((item) => {
    dispatch(addToCart(item));
  }, [dispatch]);

  const handleAddToWishList = useCallback((item) => {
    dispatch(addToWishList(item));
  }, [dispatch]);


  return (
    <section className="py-20">
      <div className="container Section-2 pt-20 w-[90%] mx-auto relative">
        <motion.div
          className="header flex justify-between pb-7"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -300 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="md:text-3xl uppercase">Best Selling Items</h4>
            <Link to={"AllProducts"}>
              <button className="link uppercase cursor-pointer overflow-hidden md:text-lg">
                View All Products
              </button>
            </Link>
        </motion.div>
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
              {section2Data.map((item) => (
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
                      <h5 className="text-xl font-semibold">{item.title}</h5>
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
        <div className="buttons hidden md:block">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
})

export default Section2;
