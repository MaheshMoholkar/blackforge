import { useRef, type ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { animate, motion, useScroll, useTransform } from "framer-motion";

function Circle(
  props: ComponentPropsWithoutRef<"div"> & { animate?: boolean }
) {
  const { className, children, animate = false } = props;
  return (
    <div
      className={twMerge(
        "bg-zinc-900 size-[240px] inline-flex justify-center items-center rounded-full relative",
        className
      )}
    >
      <motion.div
        animate={
          animate && {
            rotate: 360,
          }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className={twMerge(
          "absolute inset-0 outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 rounded-full border-[6px] border-transparent",
          animate && "border-t-fuchsia-500/30"
        )}
      ></motion.div>
      {children}
    </div>
  );
}

export default Circle;
