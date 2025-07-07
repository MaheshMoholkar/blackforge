import type { CollectionEntry } from "astro:content";
import Card from "../components/card";
import { getPostColorFromCategory } from "../utils/postUtils";
import Tag from "../components/tag";
import Button from "../components/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function LatestPosts({
  latestPosts,
}: {
  latestPosts: CollectionEntry<"blog">[];
}) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start center"],
  });

  const marginTop = useTransform(scrollYProgress, [0, 1], [0, 64]);

  return (
    <section className="py-24 md:py-52 overflow-x-clip">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
            Your portal to everything blockchain.
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 mt-8 text-center">
            Keep up with the newest trends, updates, and insights in the
            blockchain world, updated weekly.
          </p>
        </div>
        <div className="mt-16 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            {latestPosts
              .filter((_, index) => index % 2 === 0)
              .map((post, index) => (
                <Card
                  key={index}
                  color={getPostColorFromCategory(post.data.category)}
                  buttonText="Read More"
                >
                  <Tag color={getPostColorFromCategory(post.data.category)}>
                    {post.data.category}
                  </Tag>
                  <h3 className="font-heading font-black text-3xl mt-3">
                    {post.data.title}
                  </h3>
                  <p className="text-lg text-zinc-400 mt-6">
                    {post.data.description}
                  </p>
                </Card>
              ))}
          </div>
          <motion.div
            className="flex flex-col gap-8 mt-16"
            ref={targetRef}
            style={{
              marginTop,
            }}
          >
            {latestPosts
              .filter((_, index) => index % 2 === 1)
              .map((post, index) => (
                <Card
                  key={index}
                  color={getPostColorFromCategory(post.data.category)}
                  buttonText="Read More"
                >
                  <Tag color={getPostColorFromCategory(post.data.category)}>
                    {post.data.category}
                  </Tag>
                  <h3 className="font-heading font-black text-3xl mt-3">
                    {post.data.title}
                  </h3>
                  <p className="text-lg text-zinc-400 mt-6">
                    {post.data.description}
                  </p>
                </Card>
              ))}
          </motion.div>
        </div>
        <div className="mt-32 flex justify-center">
          <Button>Read the Blog</Button>
        </div>
      </div>
    </section>
  );
}

export default LatestPosts;
