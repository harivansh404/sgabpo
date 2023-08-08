import { motion } from "framer-motion";
import AboutInfo from "../About/AboutInfo";
import AboutCards from "../About/AboutCards";

const AboutPage = () => {
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
                className='mb-0 mt-3 h-auto'
                initial='hidden'
                animate='visible'
                variants={fadeInVariants}
            >
                <div className='container mx-auto text-center lg:text-left xl:px-32'>
                    <div className='grid items-center lg:grid-cols-2'>
                        <motion.div
                            className='mb-12 lg:mb-0'
                            initial='hidden'
                            animate='visible'
                            variants={slideInVariants}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            <div className='relative z-1   block hover:shadow-2xl rounded-lg bg-gradient-to-bl from-green-800 via-green-500 to-green-800 hover:bg-gradient-to-br hover:from-green-800 hover:via-green-500 hover:to-green-800 px-6 py-12 md:px-12 lg:-mr-14 backdrop-blur-[30px]'>
                                <h2 className='mb-6 text-2xl md:text-4xl  uppercase font-bold'>
                                    WHERE YOU SEE CHALLENGES, WE SHOW YOU
                                    OPPORTUNITIES
                                </h2>
                            </div>
                        </motion.div>
                        <motion.div
                            className='text-center'
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
                                src='about.png'
                                className='mb-0 rounded-[40%] w-full '
                                alt=''
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.section>
            <motion.div
                initial='hidden'
                animate='visible'
                variants={fadeInVariants}
            >
                <AboutInfo />
                <AboutCards />
            </motion.div>
        </>
    );
};

export default AboutPage;
