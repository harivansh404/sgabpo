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
                            <div className='m= md:mt-10  sm:mt-16  lg:mx-10 sm:mx-10 bg-gradient-to-bl from-green-800 via-green-500 to-green-800 hover:bg-gradient-to-br hover:from-green-800 hover:via-green-500 hover:to-green-800 rounded-lg hover:shadow-2xl bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:px-12 lg:-mr-14 backdrop-blur-[30px]'>
                                <h2 className='mb-6 text-4xl font-bold'>
                                    Innovative IT Solutions & Expert Debt
                                    Recovery Services for Financial Success.
                                </h2>
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
