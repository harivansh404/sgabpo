import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
            initial='hidden'
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ delay }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollAnimation;
