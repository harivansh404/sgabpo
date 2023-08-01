import React from "react";

const Brand = () => {
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
      <section className="bg-grey">
        <div className="container  flex h-[30vh] justify-center items-center">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                {brandList.map((brand) => (
                  <div className="flex  items-center justify-center">
                  <img
                      src={brand}
                      alt={brand}
                      className="w-full h-16 mx-4 "
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Brands Section End */}
    </>
  );
};

export default Brand;
