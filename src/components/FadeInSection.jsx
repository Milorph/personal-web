import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15, // 15% visible triggers animation
  });

  return (
    <motion.div
      ref={ref}
      style={{ overflow: "hidden" }}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >

      {children}
    </motion.div>
  );
};

export default FadeInSection;
