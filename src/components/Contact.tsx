
import { motion } from "framer-motion";
import SectionTitle from "./common/SectionTitle";
import { sectionVariant } from "../utils/animationVariants";
const Contact = () => {
  return (
  <motion.section variants={sectionVariant} className="mt-50 pb-5 " id="contact">
    <SectionTitle title="Contact with me" desc=""/>
    <div className="w-full flex items-center justify-center">
        <ul className="flex items-center gap-4 w-[40%] justify-center">
            <li><a href = "https://www.facebook.com/share/1BCL6ztTgQ/"><img src = "https://img.icons8.com/?size=100&id=118497&format=png&color=000000" className="size-9"/></a></li>
            <li><a href = "https://github.com/Rawaa-Ahmed-dotcom"><img src = "https://img.icons8.com/?size=100&id=D5XsEXNbhkMI&format=png&color=000000" className="size-9"/></a></li>
            <li><a href = "https://www.linkedin.com/in/rawaaahmed/"><img src = "https://www.svgrepo.com/show/448234/linkedin.svg" className="size-9"/></a></li>
            <li><a href = "mailto:rawaaahmed987@gmail.com"><img src = "https://raw.githubusercontent.com/ashu-guo/ashu-guo/master/assets/gmail.svg" className="size-9"/></a></li>
        </ul>
    </div>
  </motion.section>);
};

export default Contact;
