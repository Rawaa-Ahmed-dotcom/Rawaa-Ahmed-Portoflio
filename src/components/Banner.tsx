
import { Typewriter } from "react-simple-typewriter";
import { sectionVariant } from "../utils/animationVariants";
import {motion} from "framer-motion";
const Banner = () => {
  return (
    <motion.section variants = {sectionVariant} className="hero-banner mt-35" id="home">
      <div className="info-container flex justify-start w-full">
        <div className="md:w-fit w-full">
          <div className=" text-xl md:text-2xl lg:text-3xl text-white flex items-center  gap-2 md:gap-3 mb-3 max-[370px]:flex-col max-[370px]:items-start">
            <h1 className="m-0!">I'm </h1>
            <h1 className="text-[var(--color-primary)] m-0!">
              <span className="inline-block min-w-[200px]">
                <Typewriter
                  words={["Rawaa Ahmed"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
          </div>
          <p className="text-[var(--color-secondary)] w-full md:w-[600px] mt-0 leading-6.5 text-[18px] tracking-wider">
            Frontend Developer specializing in React.js, focused on building
            modern, responsive, and user-friendly web applications with clean UI
            and smooth user experience.
          </p>
        </div>
      </div>
      <div className="span flex justify-end w-full mt-14 items-center">
        <div className="w-160 ">
          <div className="bg-[#0d0d0d] border border-white/10 rounded-xl p-6 font-mono text-sm text-[var(--color-primary)] shadow-lg">
            <p>&gt; npm run dev</p>
            <p>&gt; Starting development server...</p>
            <p>&gt; Ready on http://localhost:3000</p>
            <p className="text-white mt-2">Frontend Developer Mode: ACTIVE</p>
          </div>
          
        
        </div>
       
      </div>
    </motion.section>
  );
};

export default Banner;
