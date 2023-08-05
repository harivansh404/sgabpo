import React from "react";

const LandingPage = () => {
  return (
    <section className="mb-32   text-center lg:text-left">
      <div className="container mx-auto text-center lg:text-left xl:px-32">
        <div className="grid items-center lg:grid-cols-2">
          <div className="mb-12 lg:mb-0">
            <div className="relative z-1 block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:px-12 lg:-mr-14 backdrop-blur-[30px]">
              <h2 className="mb-6 text-4xl font-bold">Why is it so great?</h2>
              <p className="mb-12 text-neutral-500 dark:text-neutral-300">
                Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                neque iaculis malesuada. Aenean gravida magna orci, non
                efficitur est porta id. Donec magna diam.
              </p>

              <div className="grid gap-x-6 md:grid-cols-3">
                <div className="mb-12 md:mb-0">
                  <h2 className="text-dark mb-4 text-3xl font-bold">10%</h2>
                  <h5 className="mb-0 text-lg font-medium text-neutral-500 dark:text-neutral-300">
                    Less sugar
                  </h5>
                </div>

                <div className="mb-12 md:mb-0">
                  <h2 className="text-dark mb-4 text-3xl font-bold">70%</h2>
                  <h5 className="mb-0 text-lg font-medium text-neutral-500 dark:text-neutral-300">
                    More flavor
                  </h5>
                </div>

                <div className="">
                  <h2 className="text-dark mb-4 text-3xl font-bold">0%</h2>
                  <h5 className="mb-0 text-lg font-medium text-neutral-500 dark:text-neutral-300">
                    Gluten
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://www.arrisebpm.com/wp-content/uploads/2021/04/service4.png" 
               className=""
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
