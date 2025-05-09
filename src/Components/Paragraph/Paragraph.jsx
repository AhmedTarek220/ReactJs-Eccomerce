import {  memo } from "react";
import { motion } from "framer-motion";

// Import image directly instead of lazy loading
import WinterImage from "../../assets/paragraph.jpg";

const AnimatedImage = memo(({ image }) => (
  <motion.div
    className="left-sec flex-1"
    initial={{ opacity: 0,  }}
    whileInView={{ opacity: 1 }}
    viewport={{once:true , amount:0.3}}
    transition={{ duration: 1.2, delay: 0.3 }}
  >
    <img
      src={image}
      alt="Winter Collection"
      loading="lazy"
      width="500"
      height="500"
      className="w-full object-cover max-h-150"
    />
  </motion.div>
));

const AnimatedContent = memo(() => (
  <motion.div
    className="right-sec flex-1 bg-white p-10 rounded-lg shadow-lg"
    initial={{ x:-100 }}
    whileInView={{  x: 0 }}
    viewport={{once:true , amount:0.3}}
    transition={{ duration: 1.2, delay: 0.3 }}
  >
    <div className="content text-left pb-10">
      <h3 className="text-2xl sm:text-xl lg:text-3xl font-semibold mb-5">
        Classic Winter Collection
      </h3>
      <p className="text-gray-700 mb-5 sm:text-sm text-base lg:text-lg">
        Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus,
        gravida orci, fringilla a. Ac sed eu fringilla odio mi. Consequat
        pharetra at magna imperdiet cursus ac faucibus sit libero.
        Ultricies quam nunc, lorem sit lorem urna, pretium aliquam ut. In
        vel, quis donec dolor id in. Pulvinar commodo mollis diam sed
        facilisis at cursus imperdiet cursus ac faucibus sit faucibus sit
        libero.
      </p>
      <button className="mt-5 px-6 py-3 bg-black text-white font-bold rounded-lg cursor-pointer hover:bg-gray-800 transition duration-300">
        SHOP COLLECTION
      </button>
    </div>
  </motion.div>
));

function Paragraph() {
  return (
    <section className="py-20">
      <div className="container w-[90%] mx-auto flex flex-col lg:flex-row justify-center items-center space-y-10 lg:space-y-0 lg:space-x-10">
        <AnimatedImage image={WinterImage} />
        <AnimatedContent />
      </div>
    </section>
  );
}

export default memo(Paragraph);
