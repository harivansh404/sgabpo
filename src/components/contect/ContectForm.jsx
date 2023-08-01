import { useState } from "react";
import { send } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [userInput, setUserInput] = useState({});
  const [loading, setLoading] = useState(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    // Email sending logic using emailjs-com

    setLoading(false);
    formSuccess();
  };

  const formSuccess = () => {
    toast("Thanks for submitting your query! We'll get back to you shortly.");

    // Resetting Form
    document.getElementById("queryForm").reset();
  };

  const onChange = (e) => {
    let obj = { ...userInput, [e.target.name]: e.target.value };
    setUserInput(obj);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <ToastContainer />

      {loading && (
        <div className="w-full h-full absolute top-0 left-0 bg-white/50 flex justify-center items-center">
          {/* Your loading spinner or animation here */}
        </div>
      )}

      <form
        id="queryForm"
        className="flex flex-col gap-4"
        onSubmit={formSubmitHandler}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="from_name" className="text-xl text-gray-800">
            Your name <sup className="text-red-500">*</sup>
          </label>
          <input
            name="from_name"
            type="text"
            className="h-12 px-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            required
            autoComplete="off"
            onChange={onChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="from_email" className="text-xl text-gray-800">
            Your email <sup className="text-red-500">*</sup>
          </label>
          <input
            name="from_email"
            type="email"
            className="h-12 px-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            required
            autoComplete="off"
            onChange={onChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-xl text-gray-800">
            Please tell a bit about yourself & your project{" "}
            <sup className="text-red-500">*</sup>
          </label>
          <textarea
            name="message"
            className="h-36 px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none"
            required
            onChange={onChange}
          />
        </div>

        <button className="bg-indigo-500 h-12 text-xl text-white font-semibold rounded-lg shadow-lg transition-transform active:scale-[0.95]">
          Send Contact Request Now
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
