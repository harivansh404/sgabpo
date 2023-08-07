import { aboutCards } from "../../constants/api";

const AboutCards = () => {
    return (
        <>
            <section className='h-auto mb-10 mt-11 relative pt-16 '>
                <div className='container mx-auto'>
                    <div className='flex flex-wrap   items-center'>
                        <div className='w-10/12 md:w-10/12  lg:w-[30rem]  px-4 md:px-8 ml-auto mr-auto  md:-mt-12'>
                            <div className='relative shadow-2xl hover:shadow-cyan-200 shadow-zinc-800 bg-gradient-to-r from-gray-700 via-gray-900 to-black flex flex-col min-w-0 break-words  w-full mb-6  rounded-2xl '>
                                <img
                                    alt='...'
                                    src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80'
                                    className='w-full align-middle rounded-t-lg'
                                />
                                <blockquote className='relative bg-gradient-to-r from-gray-700 via-gray-900 to-black p-8 mb-4'>
                                    <h4 className='text-xl font-bold  text-white'>
                                        Stringent Compliance Driven By Continual
                                        Quality Improvement
                                    </h4>
                                    <p className='text-md font-light mt-2 text-white'>
                                        Our focus on quality and compliance go
                                        beyond measuring compliance and meeting
                                        minimum requirements. Continuous
                                        improvement measures based on six-sigma
                                        framework hold the key to not only
                                        compliance, but even more so to improved
                                        productivity and therefore increased
                                        profitability for our clients.
                                    </p>
                                </blockquote>
                            </div>
                        </div>

                        <div className='w-full md:w-6/12 px-4'>
                            <div className='flex flex-wrap'>
                                {aboutCards.map((section, index) => (
                                    <div
                                        key={index}
                                        className='w-full md:w-6/12 px-4'
                                    >
                                        <div className='relative  hover:shadow-cyan-400 shadow-slate-800 bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 rounded-2xl shadow-2xl flex flex-col mt-4'>
                                            <div className='px-4 py-5 flex-auto'>
                                                <div className='text-blueGray-500 p-3  bg-gradient-to-r from-gray-700 via-gray-900 to-black text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg shadow-slate-800 rounded-full '>
                                                    <section.icon
                                                        size={24}
                                                        color='cyan'
                                                    />
                                                </div>
                                                <h6 className=' text-xl  mb-1 font-bold'>
                                                    {section.title}
                                                </h6>
                                                <p className='mb-4  text-blueGray-500'>
                                                    {section.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutCards;
