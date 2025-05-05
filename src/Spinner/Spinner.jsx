
import { motion } from "framer-motion";


function LoadingThreeDotsPulse() {
    const dotVariants = {
        pulse: {
            scale: [1, 1.5, 1],
            transition: {
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.div
            animate="pulse"
            transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
            className="fixed inset-0 flex justify-center items-center gap-5 bg-white z-50"
        >
            <motion.div className="w-5 h-5 rounded-full bg-pink-500" variants={dotVariants} />
            <motion.div className="w-5 h-5 rounded-full bg-pink-500" variants={dotVariants} />
            <motion.div className="w-5 h-5 rounded-full bg-pink-500" variants={dotVariants} />
        </motion.div>
    );
}
export default LoadingThreeDotsPulse