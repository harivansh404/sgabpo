import { motion } from "framer-motion";
import ServicesList from "../Services/ServicesList";

const ServicePage = () => {
    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const slideInVariants = {
        hidden: { x: -100 },
        visible: { x: 0 },
    };

    return (
        <>
            <motion.section
                className='mb-0 bg-w  h-autolg:text-left'
                initial='hidden'
                animate='visible'
                variants={fadeInVariants}
            >
                <div className='container m-0  mx-auto text-center lg:text-left xl:px-32'>
                    <div className='grid items-center lg:grid-cols-2'>
                        <motion.div
                            className='mb-12 lg:mb-0'
                            initial='hidden'
                            animate='visible'
                            variants={slideInVariants}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            <div className='m= md:mt-10  sm:mt-16  lg:mx-10 sm:mx-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900 via-indigo-400 to-indigo-900 rounded-lg hover:shadow-2xl bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:px-12 lg:-mr-14 backdrop-blur-[30px]'>
                                <h2 className='mb-6 text-4xl font-bold'>
                                    INDUSTRY-FOCUSED SERVICES CUSTOMIZED FOR
                                    YOUR UNIQUE BUSINESS SCALE AND NEEDS
                                </h2>

                                <motion.div
                                    className='grid gap-x-6 md:grid-cols-3'
                                    initial='hidden'
                                    animate='visible'
                                    variants={slideInVariants}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.4,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <div className=' md:mb-0'>
                                        <h2 className='text-dark mb-4 text-3xl font-bold'>
                                            10%
                                        </h2>
                                        <h5 className='mb-0 text-lg font-medium text-neutral-500 dark:text-neutral-300'>
                                            Less sugar
                                        </h5>
                                    </div>

                                    <div className='mb-12 md:mb-0'>
                                        <h2 className='text-dark mb-4 text-3xl font-bold'>
                                            70%
                                        </h2>
                                        <h5 className='mb-0 text-lg font-medium text-neutral-500 dark:text-neutral-300'>
                                            More flavor
                                        </h5>
                                    </div>

                                    <div className=''>
                                        <h2 className='text-dark mb-4 text-3xl font-bold'>
                                            0%
                                        </h2>
                                        <h5 className='mb-0 text-lg font-medium text-neutral-500 dark:text-neutral-300'>
                                            Gluten
                                        </h5>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial='hidden'
                            animate='visible'
                            variants={slideInVariants}
                            transition={{
                                duration: 0.6,
                                delay: 0.2,
                                ease: "easeInOut",
                            }}
                        >
                            <img
                                src='Services2.png '
                                className='md:h-[28rem] mx-2 md:mx- rounded-[30%] '
                                alt=''
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.section>
            
            {/* services list */}
            <motion.div
                initial='hidden'
                animate='visible'
                variants={fadeInVariants}
            >
                <ServicesList />
            </motion.div>
        </>
    );
};

export default ServicePage;
