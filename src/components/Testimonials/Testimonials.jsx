import { testimonialData } from "../../constants/api";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
    return (
        <section className='flex flex-col items-center justify-center bg-[#F3F4F6] pt-16 pb-8 lg:pt-[100px] lg:pb-16'>
            <h1 className=' md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-yellow-300 font-semibold leading-tight text-center w-[90%] md:w-[40rem] pt-10 mb-5'>Testimonials</h1>
            <div className='container mx-auto px-4 lg:px-8'>
                <div className='mx-auto max-w-5xl'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {testimonialData.map((card, index) => (
                            <div key={index} className='h-full'>
                                {/* Added h-full class to control the height of the cards */}
                                <TestimonialCard
                                    imageUrl={card.imageUrl}
                                    title={card.title}
                                    description={card.description}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
