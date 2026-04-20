import { sectionVariant } from "../utils/animationVariants";
import ProjectCard from "./common/ProjectCard";
import SectionTitle from "./common/SectionTitle";
import { motion } from "framer-motion";
import { useGetAllProjects } from "../Hooks/Projects/useGetAllProjects.ts";
import type { project } from "../utils/types";
import { BeatLoader } from "react-spinners";
import Error from "./feedbacks/Error.tsx";
import type { PostgrestError } from "@supabase/supabase-js";
const Projects = () => {
  const { data: projects, isLoading, isError, error } = useGetAllProjects();

  return (
    <motion.section variants={sectionVariant} className="flex flex-col gap-8 mt-50" id="projects">
      <SectionTitle
        title="My Projects"
        desc="Crafted with code, designed for users"
      />
      <div className="flex items-center justify-center text-center">
        {isLoading && <BeatLoader color="white" />}
        {isError && <Error error={error as PostgrestError} />}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects &&
          projects?.map((project: project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
      </div>
    </motion.section>
  );
};

export default Projects;
