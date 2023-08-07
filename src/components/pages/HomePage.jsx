import Services from "../Home/Services";
import Testimonials from "../Testimonials/Testimonials";
import ContactForm from "../Contact/ContactForm";
import Hero from "../Home/Hero.jsx";
import Stats from "../Stats/Stats";

const HomePage = () => {
    return (
        <>
            <Hero />
            <Services />
            <Testimonials />
            <Stats />
            <ContactForm />
        </>
    );
};

export default HomePage;
