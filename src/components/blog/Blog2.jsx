import React, { useState } from 'react';
import Blog1 from './Blog1';

const Blog2 = () => {
  const images = [
    'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
    'https://images.unsplash.com/photo-1593642537753-8432a4fafce3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1604661599016-d5abfe8fb451?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    'https://images.unsplash.com/photo-1526317928213-a4a1ead57903?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1591464474568-754b0a9c084b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="container mx-auto px-6 py-10 md:flex md:space-x-6">
      <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
        <div className="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-2 rounded-full focus:outline-none ${
                index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>

        <div className="max-w-lg md:ml-12 md:order-2">
          <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">
            The best Apple Watch apps
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae
            adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.
          </p>
          <div className="mt-6">
            <button
              onClick={handleClick}
              className="block px-4 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline-block hover:bg-blue-400"
            >
              Change Image
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-72 md:w-1/2 md:h-auto">
        <img
          className="object-cover w-full h-full rounded-md shadow-lg"
          src={images[currentImageIndex]}
          alt="apple watch"
        />
      </div>
    </div>
  );
};

export default Blog2;
