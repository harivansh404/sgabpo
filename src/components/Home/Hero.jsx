import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
    return (
        <section className='flex bg-white text-black md:h-[100vh]'>
            <div className='grid  max-w-screen-xl mb-10 mx-4 md:mx-8 lg:mx-12 px-4 py-8 md:gap-8 xl:gap-0 md:py-16 lg:grid-cols-12'>
                <motion.div
                    className='lg:col-span-7 md:my-12 lg:my-0'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.p
                        className='text-base md:text-lg mt-163 lg:text-xl text-gray-500 lg:mb-8'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        Unlocking Your Potential: A Trusted Partner for Success.
                    </motion.p>

                    <motion.h1
                        className='text-3xl tracking-tight leading-tight md:text-4xl xl:text-5xl'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <span className='font-extrabold text-[3.7rem] text-green7'>
                            S
                        </span>
                        treamlining Success
                    </motion.h1>
                    <motion.h1
                        className='text-3xl tracking-tight leading-tight md:text-4xl xl:text-5xl'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <span className='font-extrabold text-[3.7rem] text-green7'>
                            G
                        </span>
                        rowing Businesses
                    </motion.h1>

                    <motion.h1
                        className='text-3xl tracking-tight leading-tight md:text-4xl xl:text-5xl'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <span className='font-extrabold text-[3.7rem] text-green7'>
                            A
                        </span>
                        ccelerate Growth
                    </motion.h1>

                    <div className='flex flex-wrap gap-4 my-10'>
                        <motion.a
                            href='#contact'
                            className='bg-gradient-to-bl from-green-800 via-green-500 to-green-800 hover:bg-gradient-to-br hover:from-green-800 hover:via-green-500 hover:to-green-800 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg focus:ring-4'
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            Get Started
                            <IoIosArrowForward
                                className='w-5 h-5 ml-2 -mr-1'
                                color='white'
                            />
                        </motion.a>
                    </div>
                </motion.div>
                <motion.div
                    className='lg:col-span-5  lg:mb-0 lg:flex lg:items-center'
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                >
                    <motion.img
                        src='/business.png'
                        alt='mockup'
                        className='w-[60rem] rounded-[40%] h-auto'
                        style={{ height: "auto", maxWidth: "100%" }} // Adjust the image size for mobile view
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, duration: 1.2 }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
