import { useState } from "react";
import { send } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Div from "../UI/AnimatedDiv";
import contactMan from "../../assets/contact-man.png";

const ContactForm = () => {
    const [userInput, setUserInput] = useState({});
    const [loading, setLoading] = useState(false);

    const formSubmitHandler = (e) => {
        e.preventDefault();
        setLoading(true);

        // Below credentials are required to link your email id with contact form you can create your credentials in emailjs.com
        send(
            "service_at0nk3m", // Service ID
            "template_li47cyr", // Template ID
            userInput,
            "wDOkwQgOOCLdqMe9Z" // Public Key - https://dashboard.emailjs.com/admin/account
        )
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                formSuccess();
                setLoading(false);
            })
            .catch((err) => {
                console.log("FAILED...", err);
                setLoading(false);
            });
    };

    const formSuccess = () => {
        toast(
            "Thanks for submitting your Query, We will get back to you shortly."
        );

        // Resetting Form
        document.getElementById("queryForm").reset();
    };

    const onChange = (e) => {
        let obj = { ...userInput, [e.target.name]: e.target.value };
        setUserInput(obj);
    };

    return (
        <Div
            id='contact'
            className='flex flex-col items-center justify-center max-w-[1200px] my-5 mb-20 mx-10 lg:mx-20 xl:mx-40'
        >
            <ToastContainer />

            {/* LOADER START */}
            {loading && (
                <div className='w-full h-full absolute bg-white/[.5] top-0 left-0 flex justify-center items-center'>
                    <svg className='spinner' viewBox='0 0 50 50'>
                        <circle
                            className='path'
                            cx='25'
                            cy='25'
                            r='20'
                            fill='none'
                            strokeWidth='5'
                        ></circle>
                    </svg>
                </div>
            )}
            {/* LOADER END */}

            <h1 className='text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-yellow-300 font-semibold leading-tight text-center pt-10 mb-5'>
                Contact Us
            </h1>
            <div className='flex items-center justify-center'>
                <img className='right-0 hidden md:flex' src={contactMan} alt='contact-img' />
                <div className='text-black shadow-2xl mt-12 p-8 bg-white sm:max-w-md md:max-w-lg lg:w-2/3 xl:w-1/2 px-6 sm:px-8 rounded-xl'>
                    <form
                        id='queryForm'
                        onSubmit={formSubmitHandler}
                        className='space-y-5'
                    >
                        <div>
                            <label htmlFor='from_name' className='font-medium'>
                                Full name <sup className='text-red-500'>*</sup>
                            </label>
                            <input
                                name='from_name'
                                type='text'
                                required
                                className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg'
                                autoComplete='off'
                                onChange={onChange}
                            />
                        </div>
                        <div>
                            <label htmlFor='from_email' className='font-medium'>
                                Email <sup className='text-red-500'>*</sup>
                            </label>
                            <input
                                name='from_email'
                                type='email'
                                required
                                className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg'
                                autoComplete='off'
                                onChange={onChange}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor='from_phoneNumber'
                                className='font-medium'
                            >
                                Phone number{" "}
                                <sup className='text-red-500'>*</sup>
                            </label>
                            <div className='relative mt-2'>
                                <input
                                    name='from_phoneNumber'
                                    type='number'
                                    placeholder='+91 9090909090'
                                    required
                                    className='w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg'
                                    autoComplete='off'
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor='message' className='font-medium'>
                                Message <sup className='text-red-500'>*</sup>
                            </label>
                            <textarea
                                name='message'
                                required
                                className='w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg'
                                autoComplete='off'
                                onChange={onChange}
                            ></textarea>
                        </div>
                        <button className='bg-gradient-to-bl from-green-800 via-green-500 to-green-800 hover:bg-gradient-to-br hover:from-green-800 hover:via-green-500 hover:to-green-800  px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150'>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </Div>
    );
};

export default ContactForm;
