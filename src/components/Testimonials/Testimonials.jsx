import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { testimonialData } from "../../constants/api";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
    };

    return (
        <section className='flex flex-col items-center justify-center bg-[#F3F4F6] pt-16 pb-8 lg:pt-[100px] lg:pb-16'>
            <h1 className=' md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-yellow-300 font-semibold leading-tight text-center w-[90%] md:w-[40rem] pt-10 mb-5'>
                Testimonials
            </h1>
            <p className='text-black text-lg text-center mb-8'>
                Wondering, What Our Existing Clients Think Of Us?
            </p>
            <div className='container mx-auto px-4 lg:px-8'>
                <Slider {...settings}>
                    {testimonialData.map((testimonial, index) => (
                        <div key={index} className='px-10 text-center '>
                            <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonials;
