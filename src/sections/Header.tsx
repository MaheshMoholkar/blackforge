import { twMerge } from "tailwind-merge";
import Button from "../components/button";
import Hexagon from "../components/hexagon";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Careers",
    href: "/careers",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <>
      <header className="sticky top-0 bg-zinc-900/50 backdrop-blur-lg z-40">
        <div className="container">
          <div className="flex justify-between items-center h-24 md:h-28">
            <div>
              <img src="/assets/images/logo.svg" alt="BlockForge" />
            </div>
            <div className="flex items-center gap-4">
              <Button className="hidden md:inline-flex">Get Started</Button>
              <div
                className="size-10 relative"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <div
                  className={twMerge(
                    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1 transition-all duration-500",
                    isOpen && "rotate-45 translate-y-0"
                  )}
                >
                  <div className="w-5 h-0.5 bg-zinc-300"></div>
                </div>
                <div
                  className={twMerge(
                    "absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-1 transition-all duration-500",
                    isOpen && "translate-y-0 -rotate-45"
                  )}
                >
                  <div className="w-5 h-0.5 bg-zinc-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="fixed size-full top-0 left-0 z-30 bg-zinc-900"
          >
            <div className="absolute inset-2 rounded-md bg-zinc-800 mt-24 md:mt-28 z-0">
              <div className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 -z-10">
                <Hexagon size={700} />
              </div>
              <div className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 -z-10">
                <Hexagon size={1100} reverse duration={40} />
              </div>
              <div className="h-full flex justify-center items-center">
                <nav className="flex flex-col items-center gap-12 md:gap-16">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.25 * index,
                        ease: "linear",
                      }}
                    >
                      <span className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-zinc-500 hover:text-zinc-300 transition-colors">
                        {item.label}
                      </span>
                    </motion.a>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderSection;
