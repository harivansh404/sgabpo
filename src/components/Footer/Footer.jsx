import { Link } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
import Brands from "./Brands.jsx";
import { navLinks } from "../../constants/api.js";
import { socialIcons } from "../../constants/api.js";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <Brands />
            <footer className='bg-white text-[#7A7A7A] pt-8 pb-6'>
                <div className='container mx-auto px-4'>
                    <div className='flex flex-col lg:flex-row text-left'>
                        <div className='w-full lg:w-1/2 px-4 mb-8 lg:mb-0'>
                            <h4 className='text-3xl font-semibold text-green-500'>
                                Let&apos;s keep in touch!
                            </h4>
                            <h5 className='text-lg mt-2 mb-4 text-blueGray-600'>
                                Find us on any of these platforms, we respond
                                within 1-2 business days.
                            </h5>
                            <div className='mb-6 flex flex-wrap gap-2'>
                                {socialIcons.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.url}
                                        type='button'
                                        className='bg-gradient-to-bl from-green-800 via-green-500 to-green-800 hover:bg-gradient-to-br hover:from-green-800  hover:via-green-500 hover:to-green-800 hover:bg-opacity-5 m-1 h-9 w-9 rounded-full border-2 border-green-500 uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0 items-center justify-center'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <div className='flex items-center justify-center w-full h-full'>
                                            <item.icon className='h-full w-4' />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className='w-full lg:w-1/4 px-4 mb-8 lg:mb-0'>
                            <span className='block uppercase text-green-500 text-sm font-semibold mb-2'>
                                Useful Links
                            </span>
                            <ul className='list-unstyled'>
                                {navLinks.map((link) => (
                                    <li key={link.link}>
                                        <Link
                                            className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                                            to={`/${link.link.toLowerCase()}`}
                                            onClick={scrollToTop}
                                        >
                                            {link.link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='w-full lg:w-1/4 px-4 mb-4 lg:mb-0'>
                            <div className='text-xl'>
                                <div className='flex items-center mb-2'>
                                    <HiMail
                                        size={24}
                                        className='mr-2 text-secondary-green'
                                    />
                                    <p className='mb-0'>info4sga@gmail.com</p>
                                </div>
                                <div className='flex items-center'>
                                    <IoIosCall
                                        size={24}
                                        className='mr-2 text-secondary-green'
                                    />
                                    <p className='mb-0'>+91-9383400059</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='my-6 border-blueGray-300' />
                    <div className='flex flex-wrap items-center justify-center'>
                        <div className='w-full sm:w-1/2 px-4 my-4 sm:my-0 text-center sm:text-left'>
                            <div className='text-sm text-blueGray-500 font-semibold py-1'>
                                <span>
                                    © 2023{" "}
                                    <a
                                        href='#'
                                        className='hover:underline'
                                    >
                                        SGA™
                                    </a>
                                    . All Rights Reserved.
                                </span>
                            </div>
                        </div>
                        <div className='w-full sm:w-1/2 px-4 my-4 sm:my-0 text-center sm:text-left'>
                            <div className='text-sm text-blueGray-500 font-semibold py-1'>
                                <span>
                                    Designed By
                                    <a
                                        href='https://cyberempire.in/'
                                        className='text-cyan-500'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        {" "}
                                        Cyber Empire
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
