import Button from "../components/button";
import Circle from "../components/circle";
import Hexagon from "../components/hexagon";

function CallToAction() {
  return (
    <section className="py-60 md:py-80 overflow-hidden">
      <div className="container">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon className="size-[700px]" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon className="size-[1100px]" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute left-0 -top-[400px]">
              <img
                src="/assets/images/cuboid.png"
                alt="Cube"
                className="size-[140px]"
              />
            </Circle>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute -left-[600px] -top-[70px]">
              <img
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
