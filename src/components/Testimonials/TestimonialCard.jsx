import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className='flex flex-col items-center justify-center h-full  bg-white  p-6 rounded-lg shadow-md max-w-3xl mx-auto'>
            <img
                src={testimonial.imageUrl}
                alt=''
                className='w-20 border-2 border-secondary-green rounded-full aspect-square object-cover'
            />
            <p className='text-gray-600 m-4 flex'>
                <BiSolidQuoteAltLeft className="text-secondary-green" size={34} />
                {testimonial.testimonial}
                <BiSolidQuoteAltRight className="text-secondary-green" size={34} />
            </p>
            <p className='text-blue-500 font-semibold mt-6'>
                {testimonial.name}
            </p>
            <p className='text-black'>
                {testimonial.position} ({testimonial.company})
            </p>
        </div>
    );
};

export default TestimonialCard;
