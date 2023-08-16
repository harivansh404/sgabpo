import NumInc from "./NumInc.jsx";
import AnimatedDiv from "../UI/AnimatedDiv";
import Circle from "../../assets/dashed-circle.svg";
import { statData } from "../../constants/api.js";

const Stats = () => {
    return (
        <div className='shadow-2xl shadow-slate-200 bg-gradient-to-b from-green7 to-secondary-green text-black p-5 md:p-10 flex flex-col gap-10 relative w-full mt-20 md:flex-row md:gap-20 items-center justify-center'>
            {statData.map((item) => (
                <AnimatedDiv
                    key={item.id}
                    className='w-40 aspect-square flex justify-center items-center relative md:bg-transparent rounded-[10px]'
                >
                    {/* Move the img element outside the hidden class */}
                    <img
                        src={Circle}
                        className='absolute top-0 left-0 w-full h-full md:block text-white'
                        alt=''
                    />
                    <div className='flex items-center text-white relative'>
                        <div className='flex items-center justify-center text-center flex-col gap-3 lg:gap-6'>
                            <div className='text-2xl font-semibold flex'>
                                <NumInc num={item.year} />+
                            </div>
                            <div
                                className='text-[0.8rem] font-semibold text-white md:text-white'
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
