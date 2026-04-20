
import Header from "./components/layout/Header";
import { motion } from "framer-motion";
import Banner from "./components/Banner";
import About from "./components/About";
import SkillsSection from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
      delayChildren : 1
    },
  },
};
const App = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="px-3 md:px-8 lg:px-20  w-full min-h-screen pt-8 relative bg-black "
      viewport={{ once: true }}
    >
      <Header />
      <Banner />
      <About />
      <SkillsSection />
      <Projects />
      <Contact/>
    </motion.div>
  );
};

export default App;
