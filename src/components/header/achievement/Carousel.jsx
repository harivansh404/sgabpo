import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    "https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3031115/pexels-photo-3031115.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3311382/pexels-photo-3311382.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1044989/pexels-photo-1044989.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/2249527/pexels-photo-2249527.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative mx-10 rounded-2xl  bg-white   ">
      {/* Carousel wrapper */}
      <div className="px-[-12rem] sm:mx-8 lg:mx-14 relative h-80 md:h-96 lg:h-120 overflow-hidden rounded-lg">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out absolute w-full h-full ${
              index === currentSlide ? "block" : "hidden"
            }`}
            data-carousel-item={index === currentSlide ? "active" : ""}
          >
            <img
              src={item}
              className="w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
        <button
          type="button"
          className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-auto sm:right-4 z-30 flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 px-2 bg-white/30 dark:bg-gray-800/30 group hover:bg-white/50 dark:group-hover:bg-gray-800/60 focus:ring-4 focus:ring-white dark:focus:ring-gray-800/70 outline-none rounded-full"
          data-carousel-prev
          onClick={prevSlide}
        >
          <IoIosArrowForward
            color="white"
            className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-gray-800"
            aria-hidden="true"
          />
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-auto sm:left-4 z-30 flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 px-2 bg-white/30 dark:bg-gray-800/30 group hover:bg-white/50 dark:group-hover:bg-gray-800/60 focus:ring-4 focus:ring-white dark:focus:ring-gray-800/70 outline-none rounded-full"
          data-carousel-next
          onClick={nextSlide}
        >
          <IoIosArrowBack
            color="white"
            className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-gray-800"
            aria-hidden="true"
          />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
