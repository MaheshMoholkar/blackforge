import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "../components/button";
import Circle from "../components/circle";
import Hexagon from "../components/hexagon";

function HeroSection() {
  const icosahedronRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<HTMLImageElement>(null);
  const cuboidRef = useRef<HTMLImageElement>(null);
  const torusRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress: icosahedronProgress } = useScroll({
    target: icosahedronRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: cubeProgress } = useScroll({
    target: cubeRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: cuboidProgress } = useScroll({
    target: cuboidRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: torusProgress } = useScroll({
    target: torusRef,
    offset: ["start end", "end start"],
  });

  const icosahedronRotate = useTransform(
    icosahedronProgress,
    [0, 1],
    [30, -45]
  );
  const cubeRotate = useTransform(cubeProgress, [0, 1], [100, -45]);
  const cuboidRotate = useTransform(cuboidProgress, [0, 1], [20, -20]);
  const torusRotate = useTransform(torusProgress, [0, 1], [20, -20]);

  return (
    <section className="py-24 md:py-52 overflow-x-clip">
      <div className="container">
        <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider mb-4">
          Introducing Blockforge
        </p>
        <h1 className="font-heading font-black text-5xl md:text-6xl text-center mt-4 max-w-3xl mx-auto">
          The Future of Blockchain is Here.
        </h1>
        <p className="text-center text-xl md:text-2xl text-zinc-400 mt-6 max-w-xl mx-auto">
          Blockforge is pioneering smart contract integrity with cutting-edge
          data solutions.
        </p>
        <div className="flex justify-center mt-10">
          <Button className="">Get Started</Button>
        </div>
        <div className="flex justify-center mt-24">
          <div className="inline-flex relative z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon
                className="size-[1100px]"
                size={1100}
                reverse
                duration={15}
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1800px]" size={1800} duration={60} />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[200px] -top-[900px]" animate>
                <motion.img
                  ref={cubeRef}
                  style={{
                    rotate: cubeRotate,
                  }}
                  src="/assets/images/cube.png"
                  alt="Cube Image"
                  className="size-[140px]"
                />
              </Circle>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[200px] top-[270px]" animate>
                <motion.img
                  ref={cuboidRef}
                  style={{
                    rotate: cuboidRotate,
                  }}
                  src="/assets/images/cuboid.png"
                  alt="Cuboid Image"
                  className="size-[140px]"
                />
              </Circle>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute -left-[600px] -top-[80px]">
                <motion.img
                  ref={torusRef}
                  style={{
                    rotate: torusRotate,
                  }}
                  src="/assets/images/torus.png"
                  alt="Torus Image"
                  className="size-[140px]"
                />
              </Circle>
            </div>
            <motion.div
              ref={icosahedronRef}
              style={{
                rotate: icosahedronRotate,
              }}
              className="inline-flex"
            >
              <img
                src="/assets/images/icosahedron.png"
                alt="Icosahedron Image"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+100px)] max-w-none -z-10 saturate-10 brightness-[4%] hue-rotate-[240deg]"
              />
              <img
                src="/assets/images/icosahedron.png"
                alt="Icosahedron Image"
                className="w-[500px]"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-40 md:mt-80 gap-4">
          <div className="h-10 w-5 outline outline-[6px] outline-fuchsia-500/10 inline-flex rounded-full justify-center pt-2">
            <motion.div
              className="h-3 w-1 bg-fuchsia-500 rounded-full "
              animate={{
                translateY: 12,
                opacity: 0.2,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            ></motion.div>
          </div>
          <p className="uppercase text-zinc-500 font-extrabold tracking-wider">
            Scroll to learn more
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
