import { useState } from "react";
import { send } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Div from "../UI/AnimatedDiv";

const ContactForm = () => {
  const [userInput, setUserInput] = useState({});
  const [loading, setLoading] = useState(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    // Below credentials are required to link your email id with contact form you can create your credentials in emailjs.com
    send(
      "service_xaous7e", // Service ID
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
    toast("Thanks for submitting your Query, I will get back to you shortly.");

    // Resetting Form
    document.getElementById("queryForm").reset();
  };

  const onChange = (e) => {
    let obj = { ...userInput, [e.target.name]: e.target.value };
    setUserInput(obj);
  };

  return (
    // <><div className="flex justify-center items-center ">
    // <img src="contect.png" alt="" />
    // </div>
      <Div
        id="contact"
        className="gird grid-col p-14 content-center items-center h-fit w-fit justify-center max-w-[700px] mt-20  md:mx-10 sm:mx-10 lg:mx-10 "
      >
        <ToastContainer />

        {/* LOADER START */}
        {loading && (
          <div className="w-full   h-full absolute bg-white/[.5] top-0 left-0 flex justify-center items-center">
            <svg className="spinner" viewBox="0 0 50 50">
              <circle
                className="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="5"
              ></circle>
            </svg>
          </div>
        )}
        {/* LOADER START */}
        <h1 className="  md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-yellow-300 font-semibold leading-tight text-center w-[90%] md:w-[40rem] pt-10 mb-5">
          Contact Us
        </h1>
        <form
          id="queryForm"
          className="flex flex-col gap-8"
          onSubmit={formSubmitHandler}
        >
          {/* ROW START */}
          {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-7'> */}
          {/* NAME - FORM FIELD START */}
          {/* <div className='flex flex-col gap-2'> */}
          <label
            htmlFor="from_name"
            className="text-[16px] text-black uppercase"
          >
            Your name<sup className="text-red-700">*</sup>
          </label>
          <input
            name="from_name"
            type="text"
            className="h-[64px] border-primary-green rounded-xl bg-white outline-none border-none text-black px-4"
            required
            autoComplete="off"
            onChange={onChange}
          />

          <label
            htmlFor="from_phoneNumber"
            className="text-[16px] text-black uppercase"
          >
            Your number<sup className="text-red-700">*</sup>
          </label>
          <input
            name="from_phoneNumber"
            type="tel"
            className="h-[64px] rounded-xl bg-white outline-none border-none text-black px-4"
            required
            autoComplete="off"
            onChange={onChange}
          />
          {/* </div> */}
          {/* NAME - FORM FIELD END */}

          {/* EMAIL - FORM FIELD START */}
          {/* <div className='flex flex-col gap-2'> */}
          <label
            htmlFor="from_email"
            className="text-[16px] text-black uppercase"
          >
            Your email<sup className="text-red-700">*</sup>
          </label>
          <input
            name="from_email"
            type="email"
            className="h-[64px] rounded-xl  bg-white outline-none border-none text-black px-4"
            required
            autoComplete="off"
            onChange={onChange}
          />
          {/* </div> */}
          {/* EMAIL - FORM FIELD END */}
          {/* </div> */}
          {/* ROW END */}

          {/* MESSAGE - FORM FIELD START */}
          {/* <div className='flex flex-col gap-2'> */}
          <label htmlFor="message" className="text-[16px] text-black uppercase">
            Please tell a bit about yourself & your project
            <sup className="text-red-700">*</sup>
          </label>
          <textarea
            name="message"
            className="h-[162px] rounded-xl bg-white outline-none border-none text-black p-4 resize-none"
            required
            onChange={onChange}
          />
          {/* </div> */}
          {/* MESSAGE - FORM FIELD END */}

          <button className="h-[64px]  max-w-[585px] md:mx-48 md:w-[20rem] text-[16px] transition-transform active:scale-[0.95] bg-gradient-to-bl from-green-800 via-green-500 to-green-800 hover:bg-gradient-to-br hover:from-green-800 hover:via-green-500 hover:to-green-800 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg focus:ring-4">
            Send Contact Request Now
          </button>
        </form>
      </Div>
  );
};

export default ContactForm;
