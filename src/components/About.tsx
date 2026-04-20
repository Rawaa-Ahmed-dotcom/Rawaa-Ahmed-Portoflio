
import {motion} from "framer-motion";
import { sectionVariant } from "../utils/animationVariants";
const About = () => {
  return (
    <motion.section variants={sectionVariant} className="w-full flex flex-col mt-50" id="about">
      <div className="mb-6">
        <h1 className="text-xl md:text-3xl lg:!text-5xl text-[var(--color-secondary)] tracking-wider text-left leading-10 lg:leading-15 ">
          I believe frontend is the bridge between ideas and users, where every
          small UI detail can shape the entire experience and make it either
          better or worse.
        </h1>
      </div>
      <div>
        <h3 className="text-[var(--color-secondary)] border-b border-b-[var(--color-secondary)] pb-2">
          Who Iam.
        </h3>
        <div className="flex flex-col gap-2.5 mt-12">
        <p className="text-[var(--color-secondary)] text-[16px] leading-6 tracking-wide">
            I’m <span className="text-[var(--color-primary)] font-bold">Rawaa Ahmed</span>, A <span className="text-[var(--color-primary)] font-bold">21</span> years old passionate <span className="text-[var(--color-primary)] font-bold">Frontend Developer</span> specializing in
            building <span className="text-[var(--color-primary)] font-bold">modern</span>, <span className="text-[var(--color-primary)] font-bold">responsive</span>, and <span className="text-[var(--color-primary)] font-bold">user-friendly</span> web applications. I
            enjoy turning ideas into interactive digital experiences using
            technologies like <span className="text-[var(--color-primary)] font-bold">React</span> and <span className="text-[var(--color-primary)] font-bold">Tailwind CSS</span>, with a strong focus on
            clean design and smooth user experience
          </p>
          <p className="text-[var(--color-secondary)] text-[16px] leading-6 tracking-wide">
            I’m currently a <span className="text-[var(--color-primary)] font-bold">student</span> at the Faculty of <span className="text-[var(--color-primary)] font-bold">Computer Science</span>, in my <span className="text-[var(--color-primary)] font-bold">third</span> year, and I live in <span>Mansoura,Egypt</span>. I’m continuously learning and improving my skills to grow as a developer and create impactful projects.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
