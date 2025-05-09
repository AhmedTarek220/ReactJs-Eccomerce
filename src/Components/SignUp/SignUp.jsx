import { memo, useCallback } from "react";
import { motion } from "framer-motion";

const AnimatedTitle = memo(() => (
  <motion.h1
    className="uppercase font-bold text-3xl lg:text-5xl"
    animate={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -100 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.8,
      ease: [0.25, 0.8, 0.25, 1],
    }}
  >
    Sign Up for our newsletter
  </motion.h1>
));

const AnimatedInput = memo(() => (
  <motion.input
    placeholder="Your Email Address"
    type="email"
    className=" lg:w-[70%] w-[90%] p-3 border-none outline-none bg-white rounded-xl my-7 shadow-md transition-all duration-300"
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: -100 }}
    viewport={{ once: true  , amount:0.3}}
    transition={{
      duration: 0.8,
    }}
  />
));

const AnimatedButton = memo(() => (
  <motion.button
    aria-label="Sign up for newsletter"
    className="block bg-[#212529] text-white text-xl sm:text-lg hover:bg-[#212549] text-center cursor-pointer  w-[90%] lg:w-[70%] mx-auto p-3 rounded-lg"
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: -100 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.8,
    }}
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.2 },
    }}
    whileTap={{
      scale: 0.95,
      transition: { duration: 0.1 },
    }}
  >
    Sign Up
  </motion.button>
));

function Message() {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // Handle form submission
  }, []);

  return (
    <section>
      <div className="message container mx-auto pt-30 pb-20 text-center">
        <form onSubmit={handleSubmit}>
          <AnimatedTitle />
          <AnimatedInput />
          <AnimatedButton />
        </form>
      </div>
    </section>
  );
}

export default memo(Message);
