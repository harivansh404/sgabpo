import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  // ... (your testimonials data)
  const testimonialsData = [
{
imageUrl: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
name: "Maria Smantha",
content:
  "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.",
},
{
imageUrl: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
name: "Lisa Cudrow",
content:
  "Neque cupiditate assumenda in maiores repudi mollitia architecto.",
},
{
imageUrl: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
name: "John Smith",
content: "Delectus impedit saepe officiis ab aliquam repel.",
},{
imageUrl: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
name: "Maria Smantha",
content:
  "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.",
},
{
imageUrl: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
name: "Lisa Cudrow",
content:
  "Neque cupiditate assumenda in maiores repudi mollitia architecto.",
},
{
imageUrl: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
name: "John Smith",
content: "Delectus impedit saepe officiis ab aliquam repel.",
},
  ];

  return (

    <section className="mb-0  m-4 md:m-10  text-white">
      <div className="mx-auto text-center  md:max-w-xl lg:max-w-3xl">
        <h3 className="mb-0  md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-yellow-300 font-semibold leadi text-center w-[90%] md:w-[40rem] pt-10 ">What We Offer</h3>
        <p className="mb-6 pb-2 md:mb-12 md:pb-0 text-xl  text-black">
          We use our business process experience to drive automation and reimagine newer ways of working
        </p>
      </div>

      <motion.div className="grid  gap-4 p-9 md:gap-6 xl:gap-8 text-center md:grid-cols-2 lg:grid-cols-3">
        {testimonialsData.map((testimonial, index) => (
          <ScrollAnimation key={index} delay={index * 0.1}>
            <div className=" shadow-2xl  hover:shadow-gray-500 bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 inline-block pt-4 rounded-lg mb-5 md:mb-20 w-full sm:w-[20rem] bg-white ">
              <div className="mx-auto shadow-2xl -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white">
                <img src={testimonial.imageUrl} alt={`Avatar of ${testimonial.name}`} />
              </div>
              <div className="p-6 text-black">
                <h4 className="mb-4 text-2xl font-semibold">{testimonial.name}</h4>
                <hr />
                <p className="mt-4 text-white text-">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="cyan"
                    className="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  {testimonial.content}
                </p>
                <button className=" mt-5 text-cyan rounded-md p-1 bg-black text-cyan-300  ">Read More </button>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </motion.div>
    </section>
  );
};

const ScrollAnimation = ({ children, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }, // Custom easing for smoother animation
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default Services;