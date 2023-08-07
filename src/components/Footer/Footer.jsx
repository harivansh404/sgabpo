import { Link } from "react-router-dom";

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
            <footer className='relative bg-white text-[#7A7A7A] pt-8 pb-6'>
                <div className='container mx-auto px-4'>
                    <div className='flex flex-wrap text-left lg:text-left'>
                        <div className='w-full lg:w-6/12 px-4'>
                            <h4 className='text-3xl fonat-semibold text-green-500'>
                                Let&apos;s keep in touch!
                            </h4>
                            <h5 className='text-lg mt-0 mb-2 text-blueGray-600'>
                                Find us on any of these platforms, we respond
                                within 1-2 business days.
                            </h5>
                            {/* social icons */}
                            <div className='mb-6 flex justify-start'>
                                {socialIcons.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.url}
                                        type='button'
                                        className='bg-gradient-to-bl from-green-800 via-green-500 to-green-800 hover:bg-gradient-to-br hover:from-green-800  hover:via-green-500 hover:to-green-800 hover:bg-opacity-5 m-1 h-9 w-9 rounded-full border-2 border-green-500 uppercase leading-normal text-white transition duration-150 ease-in-out  focus:outline-none focus:ring-0 items-center justify-center'
                                        data-te-ripple-init
                                        data-te-ripple-color='light'
                                    >
                                        <div className='flex items-center justify-center w-full h-full'>
                                            <item.icon className='h-full w-4' />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className='w-full lg:w-6/12 px-4'>
                            <div className='flex flex-wrap items-top mb-6'>
                                <div className='w-full lg:w-4/12 px-4 ml-auto'>
                                    <span className='block uppercase text-green-500 text-sm font-semibold mb-2'>
                                        Useful Links
                                    </span>
                                    <ul className='list-unstyled'>
                                        {navLinks.map((link) => (
                                            <li key={link}>
                                                <Link
                                                    className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                                                    to={`/${link.toLowerCase()}`}
                                                    onClick={scrollToTop}
                                                >
                                                    {link}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='my-6 border-blueGray-300' />
                    <div className='flex flex-wrap items-center md:justify-between justify-center'>
                        <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
                            <div className='text-sm text-blueGray-500 font-semibold py-1'>
                                <span className='sm:text-center'>
                                    © 2023{" "}
                                    <a href='#' className='hover:underline'>
                                        Shree Ganesh Associates™
                                    </a>
                                    . All Rights Reserved.
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
