import React from "react";
import { FaFacebook, FaDiscord, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";
import Brand from "../brand/Brand";

const Footer = () => {
  return (
    <>
    <Brand />
    <footer className="bg-white shadow-xl" >
      <div className="sm:flex h-20 mx-10   sm:items-center sm:justify-between">
        <span className="text-sm  text-gray-500 sm:text-center">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Shree Ganesh Associates™
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900"
          >
            <FaFacebook className="w-4 h-4" />
            <span className="sr-only">Facebook page</span>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900"
          >
            <FaDiscord className="w-4 h-4" />
            <span className="sr-only">LinkedIn Page</span>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900"
          >
            <FaTwitter className="w-4 h-4" />
            <span className="sr-only">Twitter page</span>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900"
          >
            <FaGithub className="w-4 h-4" />
            <span className="sr-only">GitHub account</span>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900"
          >
            <FaDribbble className="w-4 h-4" />
            <span className="sr-only">Dribbble account</span>
          </a>
        </div>
      </div>
    </footer>
    </>

  );
};

export default Footer;
