import React from "react";

import {
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaGithub,
    FaInstagram,
} from "react-icons/fa";
import Brand from "../brand/Brand";



const Footer = () => {
    const socialIcons = [
        { icon: FaFacebook, url: "facebook.com" },
        { icon: FaLinkedin, url: "linkedin.com" },
        { icon: FaTwitter, url: "twitter.com" },
        { icon: FaGithub, url: "github.com" },
        { icon: FaInstagram, url: "instagram.com" },
    ];

    return (
        <>
       <Brand/>
            <footer className='relative   bg-white text-[#7A7A7A] pt-8 pb-6'>
                <div className='container mx-auto px-4'>
                    <div className='flex flex-wrap text-left lg:text-left'>
                        <div className='w-full lg:w-6/12 px-4'>
                            <h4 className='text-3xl fonat-semibold text-blue-500'>
                                Let's keep in touch!
                            </h4>80
                            <h5 className='text-lg mt-0 mb-2 text-blueGray-600'>
                                Find us on any of these platforms, we respond
                                1-2 business days.
                            </h5>
                            {/* social icons */}
                            <div class='mb-6 flex justify-start'>
                                {socialIcons.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.url}
                                        type='button'
                                        class='m-1 h-9 w-9 hover:bg-black hover:border-cyan-400 rounded-full border-2 border-[#7A7A7A] uppercase leading-normal text-blue-500 transition duration-150 ease-in-out  hover:bg-opacity-5 focus:outline-none focus:ring-0 items-center justify-center'
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
                                    <span className='block uppercase text-blue-500 text-sm font-semibold mb-2'>
                                        Useful Links
                                    </span>
                                    <ul className='list-unstyled'>
                                        <li>
                                            <a
                                                className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                                                href='/'
                                            >
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                                                href='/about'
                                            >
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                                                href='/services'
                                            >
                                                Services
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                                                href='/contact'
                                            >
                                                Contact
                                            </a>
                                        </li>
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
