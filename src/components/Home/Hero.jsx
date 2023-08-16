import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
    return (
        <section className='flex items-center justify-center text-black h-screen'>
            <div className='flex flex-col justify-center items-center mt-8 px-4 md:px-8'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.h1
                        className='text-4xl md:text-6xl lg:text-8xl tracking-tight leading-tight '
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <span className='font-extrabold text-5xl md:text-8xl lg:text-9xl text-green7'>
                            S
                        </span>
                        treamlining Success
                    </motion.h1>
                    <motion.h1
                        className='text-4xl md:text-6xl lg:text-8xl tracking-tight leading-tight '
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <span className='font-extrabold text-5xl md:text-8xl lg:text-9xl text-green7'>
                            G
                        </span>
                        rowing Businesses
                    </motion.h1>
                    <motion.h1
                        className='text-4xl md:text-6xl lg:text-8xl tracking-tight leading-tight '
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <span className='font-extrabold text-5xl md:text-8xl lg:text-9xl text-green7'>
                            A
                        </span>
                        ccelerate Growth
                    </motion.h1>

                    <motion.p
                        className='text-base md:text-lg lg:text-xl text-gray-500 my-8'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        Unlocking Your Potential: A Trusted Partner for Success.
                    </motion.p>
                </motion.div>
                <motion.div
                    className='flex flex-wrap gap-4 my-10'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <Link
                        to='/contact'
                        className='py-3 text-white px-7 rounded-full bg-gradient-to-bl from-primary-green via-secondary-green to-primary-green hover:bg-gradient-to-br hover:from-primto-primary-green hover:via-secondary-green hover:to-primary-green hover:cursor-pointer flex'
                    >
                        Get Started
                        <IoIosArrowForward
                            className='w-5 h-5 ml-2 -mr-1'
                            color='white'
                        />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
