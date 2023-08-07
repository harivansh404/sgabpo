import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import { servicesList } from "../../constants/api";

const ServicesList = () => {
    return (
        <div className='relative mt-0 flex flex-col items-center overflow-hidden'>
            {servicesList.map((section, index) => (
                <Link
                    key={index}
                    to={`section-${index + 1}`}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        id={`section-${index + 1}`}
                        className='container relative flex flex-col px-6 py-16 mx-auto md:flex-row md:items-center'
                    >
                        {section.pos && (
                            <div className='relative w-full mt-8 md:mt-0 md:w-1/3 lg:w-3/5'>
                                <img
                                    src={section.imageSrc}
                                    className='w-full max-w-xs m-auto md:max-w-sm'
                                    alt=''
                                />
                            </div>
                        )}
                        <div className='relative flex flex-col md:w-2/3 lg:w-2/5'>
                            <span className='w-12 h-2 mb-4 bg-gray-800'></span>
                            <h4 className='flex text-sky-400/100 flex-col text-sm mb-6 font-extrabold font-bebas-neue md:text-5xl text-black'>
                                {section.title}
                                <span className='text-base md:text-3xl text-black'>
                                    Services
                                </span>
                            </h4>
                            <p className='mt-4 flex flex-row gap-2 text-sm md:text-base text-black'>
                                <AiOutlineCheckCircle color='blue' size={20} />{" "}
                                {section.subTitle1}
                            </p>
                            <p className='mt-4 flex flex-row gap-2 text-sm md:text-base text-black'>
                                <AiOutlineCheckCircle color='blue' size={20} />{" "}
                                {section.subTitle2}
                            </p>
                            <p className='mt-4 flex flex-row gap-2 text-sm md:text-base text-black'>
                                <AiOutlineCheckCircle color='blue' size={20} />{" "}
                                {section.subTitle3}
                            </p>
                            <p className='mt-4 flex flex-row gap-2 text-sm md:text-base text-black'>
                                <AiOutlineCheckCircle color='blue' size={20} />{" "}
                                {section.subTitle4}
                            </p>
                        </div>
                        {!section.pos && (
                            <div className='relative w-full mt-8 md:mt-0 md:w-1/3 lg:w-3/5'>
                                <img
                                    src={section.imageSrc}
                                    className='w-full max-w-xs m-auto mb- md:max-w-sm'
                                    alt=''
                                />
                            </div>
                        )}
                    </motion.div>
                </Link>
            ))}
        </div>
    );
};

export default ServicesList;
