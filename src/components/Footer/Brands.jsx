const Brands = () => {
    const brandList = [
        "axis.png",
        "bob.png",
        "hdfc.png",
        "kotak.png",
        "poonawala.png",
        "subc.png",
    ];

    return (
        <>
            {/* ====== Brands Section Start */}
            <section className='p-8 bg-[#f0f4fc]'>
                <div className='container h-[30vh] flex justify-center items-center'>
                    <div className='flex flex-wrap justify-center'>
                        {brandList.map((brand, index) => (
                            <img
                                key={index}
                                src={brand}
                                alt={brand}
                                className='h-12 md:h-24 w-[120px] md:w-[180px] mx-2 md:mx-4 object-contain filter grayscale hover:filter-none transition-all duration-300 hover:cursor-pointer'
                            />
                        ))}
                    </div>
                </div>
            </section>
            {/* ====== Brands Section End */}
        </>
    );
};

export default Brands;
