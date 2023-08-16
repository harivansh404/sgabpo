const TestimonialCard = ({ testimonial }) => {
    return (
        <div className='flex flex-col items-center justify-center  bg-white p-6 rounded-lg shadow-md  mx-auto '>
            <p className='text-gray-600 m-4 flex'>{testimonial.testimonial}</p>
            <p className='text-blue-500 font-bold mt-6'>{testimonial.name}</p>
            <p className='text-secondary-green font-semibold'>
                {testimonial.position}({testimonial.company})
            </p>
        </div>
    );
};

export default TestimonialCard;
