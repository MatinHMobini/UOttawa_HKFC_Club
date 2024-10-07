import { HERO_CONTENT } from "../constants";
import { HERO_CONTENTF } from "../constants";
import clubPic from "../assets/HKFC.jpeg";
import { motion } from "framer-motion";

// Animation container with delay
const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 2, delay },
    },
});

const Introduction = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="relative flex flex-col items-center lg:items-start">
                        {/* Interactive button */}
                        <motion.button
                            initial={{ opacity: 0.6 }}
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 1 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            whileInView={{ opacity: 1 }}
                            className="bg-gradient-to-r from-orange-300 via-slate-400 to-orange-300 bg-clip-text text-5xl tracking-tight text-transparent text-center lg:text-left"
                        >
                            Cinétique humaine Carrières futures \ Human Kinetics Future Careers
                        </motion.button>

                        {/* Hero content */}
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left"
                        >
                            {HERO_CONTENTF}
                            <br />
                            <br />
                            {HERO_CONTENT}
                        </motion.p> <br ></br>
                        
                    </div>
                </div>
                {/* Profile picture with animation */}
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center lg:justify-end">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={clubPic}
                            alt="HKFC"
                            className="w-full h-auto max-w-xs lg:max-w-md rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
