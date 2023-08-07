import { motion } from "framer-motion";
import ScrollAnimation from "../UI/ScrollAnimation";
import { servicesData } from "../../constants/api";

const Services = () => {
    return (
        <section className='mb-0  m-4 md:m-10  text-white'>
            <div className='flex flex-col items-center justify-center mx-auto text-center  md:max-w-xl lg:max-w-3xl'>
                <h3 className='md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-yellow-300 font-semibold leading-tight text-center w-[90%] md:w-[40rem] pt-10 '>
                    What We Offer
                </h3>
                <p className='mb-6 pb-2 md:mb-12 md:pb-0 text-xl  text-black'>
                    Your Path to Excellence: Innovate, Automate, Educate
                    Crafting Success with Innovation, Automation, and Education.
                </p>
            </div>

            <motion.div className='grid gap-4 p-9 md:gap-6 xl:gap-8 text-center md:grid-cols-2 lg:grid-cols-3'>
                {servicesData.map((service, index) => (
                    <ScrollAnimation key={index} delay={index * 0.1}>
                        <div className=' shadow-2xl  hover:shadow-gray-500 bg-gradient-to-bl from-green-800 via-green-500 to-green-800 inline-block pt-4 rounded-lg mb-5 md:mb-20 w-full sm:w-[20rem] bg-white'>
                            <div className='mx-auto shadow-2xl -mt-12 w-24 overflow-hidden rounded-full border border-white bg-white'>
                                <img
                                    src={service.imageUrl}
                                    alt={`Avatar of ${service.name}`}
                                    className="scale-75"
                                />
                            </div>
                            <div className='p-6 text-black'>
                                <h4 className='mb-4 text-2xl font-semibold'>
                                    {service.name}
                                </h4>
                                <hr />
                                <p className='mt-4 text-white'>
                                    {service.desc}
                                </p>
                                <button className='mt-5 rounded-md p-2 bg-gradient-to-b from-green-500 via-green-800 to-green-500 hover:bg-gradient-to-t hover:from-green-800 hover:via-green-500 hover:to-green-800 text-white shadow-xl'>
                                    Read More{" "}
                                </button>
                            </div>
                        </div>
                    </ScrollAnimation>
                ))}
            </motion.div>
        </section>
    );
};

export default Services;
