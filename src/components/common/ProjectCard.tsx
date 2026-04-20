import { motion } from "framer-motion";
import type { project } from "../../utils/types";

const ProjectCard = ({ project }: { project: project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="bg-[#111] border border-[rgba(255,255,255,0.07)] rounded-2xl overflow-hidden cursor-pointer transition-all  duration-300 group hover:border-[var(--color-primary)]/40 hover:shadow-[0_20px_60px_rgba(227,100,20,0.12)]"
    >
      <div className="w-full h-45 relative overflow-hidden bg-[#1a1a1a]">
        {project.img ? (
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover brightness-85 group-hover:scale-105 group-hover:brightness-70 transition-all duration-400"
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e0e1dd"
              strokeWidth="1"
              opacity={0.15}
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          </div>
        )}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[rgba(227,100,20,0.15)]" />
        <div className="project-badges absolute flex items-center justify-between z-2 top-3.5 left-3.5 right-3.5">
          <span className="bg-[rgba(10,10,10,0.85)] border border-[rgba(227,100,20,0.5)] text-[var(--color-primary)] text-[10px] font-semibold tracking-wide uppercase py-[4px] px-[10px] rounded-[99px] backdrop-blur-[8px]">
            Web App
          </span>
          <span className="bg-[rgba(10,10,10,0.85)] text-[rgba(224,225,221,0.5)] text-[11px] py-1 px-2.5 rounded-[99px] backdrop-blur-[8px]">
            {project.id}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex gap-1.5 flex-wrap mb-3.5">
          {project?.tags?.map((tag: string, index: number) => (
            <span
              className="text-[10px] font-medium text-[rgba(224,225,221,0.45)] bg-white/5 border border-white/[0.08] px-2 py-[3px] rounded-[4px] tracking-[0.5px]"
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-[18px] font-bold text-[var(--color-secondary)] leading-6 mb-2">
          {project.title}
        </h3>

        <p
          style={{
            fontSize: 13,
            color: "rgba(224,225,221,0.45)",
            lineHeight: 1.6,
            marginBottom: 18,
          }}
          className="text-[13px] text-[rgba(224,225,221,0.45)] leading-7 mb-4"
        >
          {project.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-t-[rgba(255,255,255,0.06)]">
          {/* GitHub link */}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-1.5 text-[12px] font-medium text-[rgba(224,225,221,0.5)] "
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            GitHub
          </a>

          {/* Live button */}
          <motion.a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-1.5 bg-[var(--color-primary)] text-white text-[12px] font-semibold py-2 px-3.5 rounded-[8px] "
          >
            Live Demo
            <motion.span
              className="inline-block"
              whileHover={{ x: 3, y: -3 }}
              transition={{ duration: 0.15 }}
            >
              ↗
            </motion.span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
