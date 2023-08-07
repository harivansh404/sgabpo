import { useState } from "react";
import { Link } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { VscChromeClose } from "react-icons/vsc";
import { BiSolidPhoneCall } from "react-icons/bi";

import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

import { navLinks } from "../../constants/api";

const Navbar = () => {
    const [mobileMenuState, setMobileMenuState] = useState(false);

    return (
        <>
            <nav className='w-full h-[50px] md:h-[80px] bg-transparent flex items-center justify-between z-[9999] top-0 transition-transform duration-300 border-b-2 border-secondary-green'>
                <div className='w-full max-w-[1280px] px-5 md:px-10 mx-auto h-[60px] flex justify-between items-center'>
                    <Link to='/' className='flex items-center'>
                        <img
                            src='/sga-logo.png'
                            className='h-8 mr-3'
                            alt='SGA Logo'
                        />
                        <h1 className='font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan4 to-yellow3'>
                            SGA
                        </h1>
                    </Link>
                    <Menu navLinks={navLinks} />
                    {mobileMenuState && (
                        <MobileMenu
                            navLinks={navLinks}
                            setMobileMenu={setMobileMenuState}
                        />
                    )}

                    {/* right section of header */}
                    <div className='flex items-center gap-2 text-secondary'>
                        {/* mobile icon start */}
                        <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-secondary/[0.05] cursor-pointer relative -mr-2'>
                            {mobileMenuState ? (
                                <VscChromeClose
                                    className='text-[16px] text-secondary-green'
                                    onClick={() => setMobileMenuState(false)}
                                />
                            ) : (
                                <TfiMenuAlt
                                    className='text-[20px] text-secondary-green'
                                    onClick={() => setMobileMenuState(true)}
                                />
                            )}
                        </div>
    
                        {/* mobile icon end */}
                        <div className='flex gap-6'>
                            <Link
                                className='py-3 px-5 rounded-xl bg-gradient-to-bl from-primary-green via-secondary-green to-primary-green hover:bg-gradient-to-br hover:from-primto-primary-green hover:via-secondary-green hover:to-primary-green hover:cursor-pointer flex'
                                to='/contact'
                            >
                                <BiSolidPhoneCall size={25} className='mx-2' />
                                Get a Call Back
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
