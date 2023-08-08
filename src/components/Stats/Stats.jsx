import NumInc from "./NumInc.jsx";
import AnimatedDiv from "../UI/AnimatedDiv";
import Circle from "../../assets/dashed-circle.svg";
import { statData } from "../../constants/api.js";

const Stats = () => {
    return (
        <div className='rounded-xl shadow-2xl shadow-slate-200 bg-gradient-to-b from-gray-900 to-gray-600 p-5 flex items-center justify-center gap-20 md:mt-150 relative '>
            {statData.map((item) => (
                <AnimatedDiv
                    key={item.id}
                    className='w-40 aspect-square flex justify-center items-center relative md:bg-transparent rounded-[10px]'

                >
                    {/* Move the img element outside the hidden class */}
                    <img
                        src={Circle}
                        className='absolute top-0 left-0 w-full h-full md:block'
                        alt=''
                    />
                    <div className='flex items-center text-white relative'>
                        <div className='flex items-center justify-center text-center flex-col gap-3 lg:gap-6'>
                            <div className='text-2xl font-semibold flex'>
                                <NumInc num={item.year} />+
                            </div>
                            <div
                                className='text-[0.8rem] font-semibold text-[#AAAAAA] md:text-white'
                                dangerouslySetInnerHTML={{
                                    __html: item.description,
                                }}
                            />
                        </div>
                    </div>
                </AnimatedDiv>
            ))}
        </div>
    );
};

export default Stats;
