import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "The user experience is great, and the platform is very easy to use.",
    author: "Erica Wyatt",
    title: "Product Manager",
    avatar: "/assets/images/avatar-erica-wyatt.jpg",
  },
  {
    quote:
      "This solution has completely transformed how we handle our development workflow.",
    author: "Cameron Yang",
    title: "Senior Developer",
    avatar: "/assets/images/avatar-cameron-yang.jpg",
  },
  {
    quote: "The performance improvements we've seen are incredible.",
    author: "Harry Bender",
    title: "Tech Lead",
    avatar: "/assets/images/avatar-harry-bender.jpg",
  },
];

function TestimonialsSection() {
  return (
    <section className="py-32 bg-zinc-800">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={index}
              initial={{
                opacity: 0,
                y: 24,
              }}
              viewport={{
                once: true,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.5,
                ease: "easeInOut",
                duration: 1,
              }}
              className="flex flex-col justify-between"
            >
              <p className="font-heading font-black text-3xl md:text-4xl">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <cite className="mt-8 block">
                <div className="flex gap-3 items-center">
                  <div>
                    <div
                      className="size-16 bg-zinc-700 rounded-full overflow-hidden"
                      style={{
                        backgroundImage: `url(${testimonial.avatar})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  </div>
                  <div>
                    <div className="text-lg not-italic font-black">
                      {testimonial.author}
                    </div>
                    <div className="text-zinc-400 not-italic">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
