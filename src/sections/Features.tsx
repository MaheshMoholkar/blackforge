import { twMerge } from "tailwind-merge";
import TextButton from "../components/text-button";

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
    image: "/assets/images/cuboid.png",
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
    image: "/assets/images/pill.png",
    color: "violet",
  },
];

function FeatureSection() {
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
                key={index}
                className="relative z-0 p-8 md:p-10 max-w-xs md:max-w-md group cursor-default"
              >
                <div
                  className={twMerge(
                    "absolute size-16 rounded-xl top-1.5 right-1.5 -z-10 blur-lg transition duration-300 opacity-0 group-hover:opacity-100",
                    card.color == "fuchsia" && "bg-fuchsia-500",
                    card.color == "lime" && "bg-lime-500",
                    card.color == "cyan" && "bg-cyan-500",
                    card.color == "violet" && "bg-violet-500"
                  )}
                ></div>
                <div
                  className={twMerge(
                    "absolute size-16 rounded-xl top-1.5 right-1.5 -z-10 transition duration-300",
                    card.color == "fuchsia" &&
                      "bg-fuchsia-500 group-hover:bg-fuchsia-400",
                    card.color == "lime" &&
                      "bg-lime-500 group-hover:bg-lime-300",
                    card.color == "cyan" &&
                      "bg-cyan-500 group-hover:bg-cyan-400",
                    card.color == "violet" &&
                      "bg-violet-500 group-hover:bg-violet-400"
                  )}
                ></div>
                <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
                <div className="relative z-10">
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
                </div>
                <h3 className="font-heading font-black text-3xl mt-12">
                  {card.title}
                </h3>
                <p className="text-lg text-zinc-400 mt-4">{card.description}</p>
                <div className="flex justify-between mt-12">
                  <TextButton color={card.color}>Learn More</TextButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-8 text-zinc-500 group-hover:text-zinc-300 transition -translate-x-2 group-hover:translate-x-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="bg-zinc-950 inline-flex  rounded-full p-2.5 gap-4">
            {cardData.map((_, index) => (
              <div
                key={index}
                className="size-2.5 bg-zinc-500 rounded-full cursor-pointer"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
