import { useRef } from "react";
import Button from "../components/button";
import Circle from "../components/circle";
import Hexagon from "../components/hexagon";
import { motion, useScroll, useTransform } from "framer-motion";

function CallToAction() {
  const cuboidRef = useRef<HTMLImageElement>(null);
  const cylinderRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress: cuboidProgress } = useScroll({
    target: cuboidRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: cylinderProgress } = useScroll({
    target: cylinderRef,
    offset: ["start end", "end start"],
  });

  const cuboidRotate = useTransform(cuboidProgress, [0, 1], [-45, 45]);
  const cylinderRotate = useTransform(cylinderProgress, [0, 1], [-45, 45]);

  return (
    <section className="py-60 md:py-80 overflow-hidden">
      <div className="container">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon size={700} reverse />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon size={1100} duration={50} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute left-0 -top-[400px]" animate>
              <motion.img
                ref={cuboidRef}
                style={{
                  rotate: cuboidRotate,
                }}
                src="/assets/images/cuboid.png"
                alt="Cube"
                className="size-[140px]"
              />
            </Circle>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute -left-[600px] -top-[70px]" animate>
              <motion.img
                ref={cylinderRef}
                style={{
                  rotate: cylinderRotate,
                }}
                src="/assets/images/cylinder.png"
                alt="Cylinder"
                className="size-[140px]"
              />
            </Circle>
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
            Ready to <span className="block">get started?</span>
          </h2>
          <p className="text-zinc-400 text-xl md:text-2xl text-center mt-8 max-w-sm mx-auto">
            Start building using blockchain technology, with Blackforge
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
