import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CareerData } from "../../constants/api";
import CareerCard from './CareerCard';
import Slider from 'react-slick';
import Stats from '../Stats/Stats';

const Career = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
  return (
    <section className='flex flex-col items-center justify-center mb-0  shadow-2xl rounded-[5rem] bg-[#F3F4F6] pt-16 overflow-hidden lg:pt-[100px] '>
            <h1 className=' md:text-5xl text-4xl  text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-yellow-300 font-semibold leading-tight text-center w-[90%] md:w-[40rem] pt-10 mb-5'>
                Career
            </h1>
            <p className='text-black text-lg text-center mb-8'>
                Wondering, What Our Existing Clients Think Of Us?
            </p>
            <div className='container mx-auto px-4 lg:px-8'>
                <Slider {...settings}>
                    {CareerData .map((Career, index) => (
                        <div key={index} className='px-10 text-center '>
                            <CareerCard Career={Career} />
                        </div>
                    ))}
                </Slider>
            </div>
            <Stats />
        </section>
  )
}

export default Career