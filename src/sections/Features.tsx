import { twMerge } from "tailwind-merge";
import Card from "../components/card";
import { useEffect, useState } from "react";

const cardData = [
  {
    title: "Revolutionary Blockchain API",
    description:
      "Effortlessly integrate and manage blockchain data with our cutting edge API, designed for seamless connectivity.",
    image: "/assets/images/pill.png",
    color: "fuchsia",
  },
  {
    title: "Decentralized Data Solutions",
    description:
      "Empower your applications with decentralized data solutions, ensuring security and transparency at every step.",
    image: "/assets/images/cube.png",
    color: "lime",
  },
  {
    title: "Next-Gen Smart Contracts",
    description:
      "Unlock the potential of next-gen smart contracts with our robust and scalable API, tailored for modern blockchain needs.",
    image: "/assets/images/cone.png",
    color: "cyan",
  },
  {
    title: "Seamless Blockchain Integration",
    description:
      "Integrate blockchain technology seamlessly into your projects, with minimal effort and maximum efficiency.",
    image: "/assets/images/icosahedron.png",
    color: "violet",
  },
];

function FeatureSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isHovering) {
      const interval = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % cardData.length);
      }, 3000);
      return () => clearTimeout(interval);
    }
  }, [activeIndex, isHovering]);

  return (
    <section className="py-24 md:-mt-28 overflow-x-clip">
      <div className="container">
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
          Discover the future of blockchain with Blockforge
        </h2>
        <div className="mt-36 lg:mt-48 flex">
          <div className="flex flex-none gap-8">
            {cardData.map((card, index) => (
              <div
                className="inline-flex transition-all duration-500"
                key={index}
                style={{
                  transform: `translateX(calc((-100% - 2rem) * ${
                    activeIndex
                  }))`,
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <Card
                  key={index}
                  color={card.color}
                  className="max-w-xs md:max-w-md"
                >
                  <div className="flex justify-center -mt-28">
                    <div className="inline-flex relative">
                      <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                      <img
                        src={card.image}
                        alt="Pill"
                        className="size-40 group-hover:-translate-y-6 transition "
                      />
                    </div>
                  </div>
                  <h3 className="font-heading font-black text-3xl mt-12">
                    {card.title}
                  </h3>
                  <p className="text-lg text-zinc-400 mt-4">
                    {card.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="bg-zinc-950 inline-flex  rounded-full p-2.5 gap-4">
            {cardData.map((_, index) => (
              <div
                key={index}
                className={twMerge(
                  "size-2.5 bg-zinc-500 rounded-full cursor-pointer",
                  activeIndex === index && "bg-zinc-300"
                )}
                onClick={() => {
                  setActiveIndex(index);
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
