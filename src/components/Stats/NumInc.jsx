import { useEffect, useRef } from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    animate,
    useInView,
} from "framer-motion";

function NumInc({ num }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        animate(count, isInView ? num : 0, {
            duration: 2,
        });
    }, [isInView, count, num]);

    return <motion.div ref={ref}>{rounded}</motion.div>;
}

export default NumInc;
