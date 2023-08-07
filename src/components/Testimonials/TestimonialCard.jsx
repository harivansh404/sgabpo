const TestimonialCard = ({ imageUrl, title, description }) => {
    return (
        <div className='mb-6 overflow-hidden rounded-lg bg-white'>
            <img
                src={imageUrl}
                alt='image'
                className='w-full h-64 object-scale-down'
            />
            <div className='p-6 text-center sm:p-2 md:p-2 xl:p-2'>
                <h3>
                    <a
                        href='javascript:void(0)'
                        className='text-black hover:text-primary mb-3 block text-xl font-semibold sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-lg'
                    >
                        {title}
                    </a>
                </h3>
                <p className='text-black mb-4 text-base leading-relaxed'>
                    {description}
                </p>
                <a
                    href='javascript:void(0)'
                    className='text-black hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-6 text-base font-medium transition hover:text-gray-500'
                >
                    View Details
                </a>
            </div>
        </div>
    );
};

export default TestimonialCard;
