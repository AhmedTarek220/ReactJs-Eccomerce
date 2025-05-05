
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { heroImage } from "../../constants/Data";
import React from "react";

const Hero = React.memo(() => {
  const renderSwiperSlide = (item) => (
    <SwiperSlide key={item.id}>
      <motion.div
        className="w-full sm:w-80 mx-auto px-2 flex-shrink-0 group pb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          width="800"
          height="600"
          className="w-full h-64 sm:h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="text-left mt-4">
          <h5 className="elemnet-title text-uppercase text-xl sm:text-2xl mt-8">
            {item.title}
          </h5>
          <p className="text-sm sm:text-base mt-3 mb-3">{item.description}</p>
          <button
            className="link text-sm sm:text-base cursor-pointer"
            aria-label="Discover Now"
          >
            DISCOVER NOW
          </button>
        </div>
      </motion.div>
    </SwiperSlide>
  );

  return (
    <section className="hero-section text-center pt-40 relative pb-5">
      <motion.h1
        className="text-5xl md:text-4xl lg:text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        New Collections
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="text-sm md:text-l lg:text-xl my-6 max-w-l"
          style={{ display: "block" }}
        >
          <p className="max-w-4xl mx-auto tracking-wider leading-8">
            Discover our latest collections featuring premium quality and
            timeless designs.Explore unique pieces crafted with attention to detail and style.
          </p>

        </div>


          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                pagination: { clickable: true },
              },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3 },
            }}
          >
            {heroImage.map(renderSwiperSlide)}
            <div className="buttons hidden md:block">
              <div
                className="swiper-button-prev"
                aria-label="Previous Slide"
              ></div>
              <div
                className="swiper-button-next"
                aria-label="Next Slide"
              ></div>
            </div>
          </Swiper>
        
      </motion.div>
    </section>
  );
});

export default Hero;
