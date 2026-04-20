import  { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sectionVariant } from "../../utils/animationVariants";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  return (
    <motion.header variants={sectionVariant} className=" flex items-center justify-center w-full ">
      <div className="flex items-center justify-between w-full">
        <div className="logo">
          <a
            href="#"
            className="text-2xl md:text-3xl lg:text-4xl text-[var(--color-primary)] font-bold"
          >
            Rawaa Ahmed
          </a>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="#about"
                className="text-[20px] text-[var(--color-secondary)] hover:text-[var(--color-primary)]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-[20px] text-[var(--color-secondary)] hover:text-[var(--color-primary)]"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-[20px] text-[var(--color-secondary)] hover:text-[var(--color-primary)]"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-[20px] text-[var(--color-secondary)] hover:text-[var(--color-primary)]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="burger-icon hidden max-md:block">
          <Menu
            color="white"
            size={30}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-[50%] min-h-screen fixed  top-0 right-0 bottom-0 bg-[var(--color-primary)] z-50"
              >
                <div className="w-full flex items-center justify-end p-4">
                  <X
                    size={40}
                    color="white"
                    className="cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  />
                </div>
                <div className="links w-full  mt-12">
                  <ul className="flex  flex-col items-center gap-8 w-full text-center">
                    <li className="hover:bg-[rgba(255,255,255,0.15)] w-[80%] py-2.5 rounded-lg duration-300 backdrop-blur-[3px] border border-transparent hover:border-[rgba(255,255,255,0.1)]">
                      <a
                        href="#about"
                        className="text-[20px] text-[var(--color-secondary)] cursor-pointer "
                      >
                        About
                      </a>
                    </li>
                    <li className="hover:bg-[rgba(255,255,255,0.15)] w-[80%] py-2.5 rounded-lg duration-300 backdrop-blur-[3px] border border-transparent hover:border-[rgba(255,255,255,0.1)]">
                      <a
                        href="#skills"
                        className="text-[20px] text-[var(--color-secondary)] "
                      >
                        Skills
                      </a>
                    </li>
                    <li className="hover:bg-[rgba(255,255,255,0.15)] w-[80%] py-2.5 rounded-lg duration-300 backdrop-blur-[3px] border border-transparent hover:border-[rgba(255,255,255,0.1)]">
                      <a
                        href="#projects"
                        className="text-[20px] text-[var(--color-secondary)] "
                      >
                        Projects
                      </a>
                    </li>
                    <li className="hover:bg-[rgba(255,255,255,0.15)] w-[80%] py-2.5 rounded-lg duration-300 backdrop-blur-[3px] border border-transparent hover:border-[rgba(255,255,255,0.1)]">
                      <a
                        href="#contact"
                        className="text-[20px] text-[var(--color-secondary)] "
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
