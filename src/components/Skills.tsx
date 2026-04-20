import { motion } from "framer-motion";
import {
  cardVariants,
  colors,
  containerVariants,
  floatVariants,
  sectionVariant,
} from "../utils/animationVariants";
import SectionTitle from "./common/SectionTitle";
import { useGetAllSkills } from "../Hooks/Skills/useGetAllSkills";
import type { Skill } from "../utils/types.js";
import { getRandomColor } from "../utils/getRandomColor.js";
import {BeatLoader} from "react-spinners";
import Error from "./feedbacks/Error.js";
import type { PostgrestError } from "@supabase/supabase-js";

export default function SkillsSection() {
  const { data: skills, isLoading, isError, error ,isFetching } = useGetAllSkills();
  const randomColor = getRandomColor(colors);
  return (
    <motion.section
      variants={sectionVariant}
      className="bg-transparent min-h-screen flex flex-col items-center justify-center relative overflow-hidden mt-50"
      id = "skills"
    >
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, 30 * (i % 2 === 0 ? 1 : -1), 0],
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8 + i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          style={{
            position: "absolute",
            width: 300 + i * 60,
            height: 300 + i * 60,
            borderRadius: "50%",
            background: [
              "radial-gradient(circle, rgba(187,75,255,0.12), transparent 70%)",
              "radial-gradient(circle, rgba(97,218,251,0.08), transparent 70%)",
              "radial-gradient(circle, rgba(255,100,130,0.07), transparent 70%)",
              "radial-gradient(circle, rgba(68,160,255,0.09), transparent 70%)",
              "radial-gradient(circle, rgba(255,215,0,0.05), transparent 70%)",
            ][i],
            top: `${[10, 60, 30, 5, 70][i]}%`,
            left: `${[5, 70, 40, 80, 20][i]}%`,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      ))}

      {/* Title */}
      <SectionTitle
        title="My Skills"
        desc="Technologies I use to build things that matter"
      />
       {(isLoading && isFetching )&&  <BeatLoader color="white"/>}
      {isError && <Error error = {error as PostgrestError}/>}
      {skills && <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: 20,
          maxWidth: 900,
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {skills?.map((skill: Skill, i: number) => (
          <motion.div key={skill.title} variants={cardVariants}>
            <motion.div
              variants={floatVariants(i)}
              animate="animate"
              whileHover={{
                scale: 1.12,
                rotate: 0,
                boxShadow: `0 0 40px ${randomColor}55, 0 8px 32px rgba(0,0,0,0.4)`,
                transition: { duration: 0.2 },
              }}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: `1px solid rgba(255,255,255,0.15)`,
                borderRadius: 20,
                padding: "24px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                cursor: "default",
                backdropFilter: "blur(16px)",
                boxShadow: `0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(circle at 50% 0%, ${randomColor}22, transparent 60%)`,
                  pointerEvents: "none",
                }}
              />

              <motion.img
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 3 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={skill.icon}
              />

              <span
                style={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: 0.5,
                  textAlign: "center",
                }}
              >
                {skill.title}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>} 
    </motion.section>
  );
}
