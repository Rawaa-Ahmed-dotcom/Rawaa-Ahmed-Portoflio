
import {motion} from "framer-motion"
const SectionTitle = ({title , desc} : {title:string;desc : string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center mb-16 relative z-1"
    >
      <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-white m-0 leading-[1.1]">
        <span className="text-[var(--color-primary)]">{title}</span>
      </h2>
      <p className="text-[var(--color-secondary)] text-[16px] mt-[14px]">
        {desc}
      </p>
    </motion.div>
  );
};

export default SectionTitle;
