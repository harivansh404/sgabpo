
const AboutInfo = () => {
  const bulletPoints = [
    "Deep domain expertise in the BFSI industry",
    "Led by seasoned professionals with 70+ years of cumulative Banking & BPO industry experience",
    "Unique blend of contact center and FOS capabilities, with services spanning pan India",
    "Robust quality control measures based on industry leading six sigma practices",

  ];

  return (
    <section className="my-8 text-black ">
      <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
        <h1 className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-yellow-300 font-semibold leadi text-center w-[90%] md:w-[40rem]">
          Your Preferred Partner For Business Process Solutions
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 md:gap-20 md:px-10 md:pb-10 md:grid-cols-2">
        <div className="flex flex-col items-center mx-6 md:mx-0">
          <p className="px-4 md:px-6 py-1 text-lg md:text-md">
            Our business was founded to meet the changing needs of the banking
            industry initially, however taking cognizance of how our vast
            industry experience can benefit our clients, we have now diversified
            into five industry verticals and five strategic core areas of business
            services.
          </p>
          <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
          <p className="px-4 md:px-6 py-1 text-lg md:text-md ">
            Our vision is to emerge as the most trusted collaboration partner for
            business process transformation services. Each of our solutions has
            been designed based on many years of deep domain expertise of our
            founders. We are committed towards helping you achieve your individual
            customer experience goals.
          </p>
        </div>
        <div className="flex flex-col items-center max-w-full mx-6 md:mx-0">
          <div className="">
            {bulletPoints.map((point, index) => (
              <p key={index} className="flex flex-col mt-5  font-semibold underline decoration-purple-400 text-lg md:text-md ">
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
