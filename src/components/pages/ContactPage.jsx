import { motion } from "framer-motion";
import ContactForm from "../Contact/ContactForm";
import { IoIosCall } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { HiMail } from "react-icons/hi";

const ContactPage = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideInVariants = {
    hidden: { x: -100 },
    visible: { x: 0 },
  };

  return (
    <>
      <motion.section
        className="mb-0 mt-3 h-auto"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <div className="container mx-auto mt-16  text-center lg:text-left xl:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2  items-center">
            <motion.div
              className="mb-12 md:mb-0"
              initial="hidden"
              animate="visible"
              variants={slideInVariants}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="relative text-md font-bold grid grid-flow-row gap-5 hover:shadow-2xl rounded-lg bg-gradient-to-bl from-green-800 via-green-500 to-green-800 hover:bg-gradient-to-br hover:from-green-800 hover:via-green-500 hover:to-green-800 px-6 py-8 md:px-12 md:py-12 backdrop-blur-[30px]">
                <p>
                  <MdLocationPin />Office No:112-113 unique shoping complext Sonipat, Haryana 131101
                </p>
                <p>
                  <HiMail /> help@gmail.com
                </p>
                <p className="mb-2 md:mb-6 text-md uppercase">
                  <IoIosCall /> +91-9383400059
                </p>
              </div>
            </motion.div>
            <motion.div
              className="text-center"
              initial="hidden"
              animate="visible"
              variants={slideInVariants}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "easeInOut",
              }}
            >
              <img
                src="about.png"
                className="mb-0 rounded-full w-full max-w-md mx-auto md:mx-0"
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      <ContactForm />
    </>
  );
};

export default ContactPage;
