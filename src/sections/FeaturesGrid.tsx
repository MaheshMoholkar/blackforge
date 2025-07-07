import { useEffect, useRef } from "react";
import Button from "../components/button";
import TextButton from "../components/text-button";
import { motion, useScroll, useTransform } from "framer-motion";

const listItems = [
  "Experience unparalled security and scalability",
  "Fully benefit from scalable network effects",
  "Unlock the potential of decentralized networks",
];

function FeaturesGrid() {
  const torusKnotRef = useRef<HTMLImageElement>(null);
  const firstHemisphereRef = useRef<HTMLImageElement>(null);
  const secondHemisphereRef = useRef<HTMLImageElement>(null);
  const coneRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress: torusKnotScrollYProgress } = useScroll({
    target: torusKnotRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: firstHemisphereScrollYProgress } = useScroll({
    target: firstHemisphereRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: secondHemisphereScrollYProgress } = useScroll({
    target: secondHemisphereRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: coneScrollYProgress } = useScroll({
    target: coneRef,
    offset: ["start end", "end start"],
  });

  const torusKnotTranslateY = useTransform(
    torusKnotScrollYProgress,
    [0, 1],
    [100, -100]
  );
  const torusKnotRotate = useTransform(
    torusKnotScrollYProgress,
    [0, 1],
    [30, -30]
  );

  const firstHemisphereTranslateY = useTransform(
    firstHemisphereScrollYProgress,
    [0, 1],
    [50, -50]
  );
  const firstHemisphereRotate = useTransform(
    firstHemisphereScrollYProgress,
    [0, 1],
    [-20, -50]
  );

  const secondHemisphereTranslateY = useTransform(
    secondHemisphereScrollYProgress,
    [0, 1],
    [50, -50]
  );
  const secondHemisphereRotate = useTransform(
    secondHemisphereScrollYProgress,
    [0, 1],
    [-20, 10]
  );

  const coneTranslateY = useTransform(coneScrollYProgress, [0, 1], [50, -50]);
  const coneRotate = useTransform(coneScrollYProgress, [0, 1], [12, 45]);

  return (
    <section className="py-24 md:py-52 overflow-x-clip">
      <div className="container">
        <div className="flex flex-col gap-56 md:gap-48 lg:gap-80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                Empowering the Future of Blockchain.
              </h2>
              <p className="text-xl lg:text-2xl text-zinc-400 mt-8">
                Blockforge provides robust and secure infrastructure to support
                the next generation of decentralized applications.
              </p>
              <ul className="mt-12 flex flex-col gap-8">
                {listItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 -outline-offset-4 outline-fuchsia-500/10 rounded-full">
                      <div className="size-1.5 bg-fuchsia-500 rounded-full"></div>
                    </div>
                    <div className="text-xl font-bold">{item}</div>
                  </li>
                ))}
              </ul>
              <div className="mt-12 flex gap-8">
                <Button>Get Started</Button>
                <TextButton color="fuchsia">Learn More</TextButton>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative inline-flex lg:right-[-50px]">
                <motion.img
                  ref={torusKnotRef}
                  src="/assets/images/torus-knot.png"
                  alt="Torus Knot"
                  className="size-96 max-w-none z-0"
                  style={{
                    translateY: torusKnotTranslateY,
                    rotate: torusKnotRotate,
                  }}
                />
                <motion.img
                  ref={firstHemisphereRef}
                  src="/assets/images/hemisphere.png"
                  alt="Hemisphere"
                  className="absolute size-96 top-3/4 -z-10 scale-x-[-1]"
                  style={{
                    translateY: firstHemisphereTranslateY,
                    rotate: firstHemisphereRotate,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative hidden md:block">
              <div className="absolute right-0 z-0 lg:right-[50px]">
                <motion.img
                  ref={coneRef}
                  src="/assets/images/cone.png"
                  alt="Cone"
                  className="size-96 max-w-none rotate-12"
                  style={{
                    translateY: coneTranslateY,
                    rotate: coneRotate,
                  }}
                />
                <motion.img
                  ref={secondHemisphereRef}
                  src="/assets/images/hemisphere.png"
                  alt="Hemisphere"
                  className="absolute size-96 top-3/4 -z-10"
                  style={{
                    translateY: secondHemisphereTranslateY,
                    rotate: secondHemisphereRotate,
                  }}
                />
              </div>
            </div>

            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                Blockforge leads the way.
              </h2>
              <div className="flex flex-col gap-8 text-xl lg:text-2xl text-zinc-400 mt-6">
                <p>
                  Blockforge is dedicated to supporting the evolution of Web 3
                  applications by delivering the necessary infrastructure and
                  security
                </p>
                <p>
                  Blockforge is dedicated to supporting the evolution of Web 3.
                  As a decentralized blockchain scaling platform, Blockforge
                  enables developers to create scalable, user-friendly dApps
                  with low transaction costs, all while ensuring robust
                  security.
                </p>
              </div>
              <div className="mt-12 flex gap-8">
                <Button>Get Started</Button>
                <TextButton color="fuchsia">Learn More</TextButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesGrid;
