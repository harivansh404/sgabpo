import React from "react";
import NumInc from "./NumInc";
import Div from "../contect/Div";
import Circle from "../../assets/dashed-circle.svg";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      year: 8,
      description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
    },
    {
      id: 2,
      year: 3,
      description: "YEARS OF<br />EXPERIENCE",
    },
    {
      id: 3,
      year: 10,
      description: "TECHNOLOGIES",
    },
    {
      id: 4,
      year: 70,
      description: "COMMUNITY<br />POSTS",
    },
  ];

  return (
    <div className="rounded-xl shadow-2xl shadow-slate-200 bg-gradient-to-b from-gray-900 to-gray-600 grid p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-25 2xl:gap-50 md:mt-150 relative">
      {achievements.map((item) => (
        <Div
          key={item.id}
          className="w-full aspect-square flex justify-center items-center relative md:bg-transparent rounded-[10px]"
        >
          {/* Move the img element outside the hidden class */}
          <img src={Circle} className="absolute top-0 left-0 w-full h-full md:block" alt="" />
          <div className="flex items-center text-white relative">
            <div className="flex items-center justify-center text-center flex-col gap-3 lg:gap-6">
              <div className="text-34px md:text-50px lg:text-60px xl:text-70px 2xl:text-80px font-light flex">
                <NumInc num={item.year} />+
              </div>
              <div
                className="text-14px lg:text-18px leading-18px lg:leading-22px text-[#AAAAAA] md:text-white"
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}
              />
            </div>
          </div>
        </Div>
      ))}
    </div>
  );
};

export default Achievements;
