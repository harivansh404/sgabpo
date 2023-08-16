const AboutInfo = () => {
    const bulletPoints = [
        "CUSTOMIZE – for Client’s Needs",
        "STRATEGY – High Productivity & Result Delivery",
        "COMPLIANCE – Assurance of COC /Audit Compliance",
        "TECHNOLOGY – Always Adaptive for New Technologies",
        "TRAINING – Agent Skill Development for Expected Results",
    ];

    return (
        <section className='my-8 text-black '>
            <div className='container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12'>
                <h1 className='text-3xl md:text-5xl text-secondary-green font-semibold leadi text-center w-[90%] md:w-[40rem]'>
                    Your Preferred Partner For Business Process Solutions
                </h1>
            </div>
            <div className='container mx-auto grid grid-cols-1 gap-8 md:gap-20 md:px-10 md:pb-10 md:grid-cols-2'>
                <div className='flex flex-col items-center mx-6 md:mx-0'>
                    <p className='text-justify px-4 md:px-6 py-1 text-lg md:text-md'>
                        SGA is a firm engaged in Collection/Recovery activities of
                        banking organisation. SGA takes each and every
                        assignment very seriously for delivery best results and
                        achive new milestones for organisation for whom they are
                        working. We have good relation with police authority as
                        well as with law enforcement agencies. Agency is having
                        full operation office in sonipat and having sufficient
                        manpower in main Towns of Haryana on GT belt as well as
                        non GT belt.
                    </p>
                    <h2 className="text-3xl font-bold text-secondary-green">Our Team</h2>
                    <span className='w-28 h-1 my-2 rounded-lg bg-secondary-green'></span>
                    <p className='text-justify px-4 md:px-6 py-1 text-lg md:text-md '>
                        Our partners are having rich experience of collection
                        with Banking, NBFC & Telecom companies like Axis Bank(
                        Agri & Credit Card), Poonawala Fincorp. Ltd, India
                        Infoline Finance Ltd, Bajaj finserve, Kotak Mahindra
                        Bank, The Sonepat Urban Co-operative Bank, Reliance
                        Infocom, Airtel, TTSL, Vodafone, Idea etc. as employee
                        as well as channel partner handling collection customer
                        service etc.
                    </p>
                </div>
                <div className='flex flex-col items-center max-w-full mx-6 md:mx-0'>
                    <div className=''>
                        <h1 className='font-bold inline-block uppercase text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-yellow-300'>
                            Our Approach
                        </h1>
                        {bulletPoints.map((point, index) => (
                            <p
                                key={index}
                                className='flex flex-col mt-5  font-semibold text-lg md:text-md'
                            >
                                {point}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutInfo;
