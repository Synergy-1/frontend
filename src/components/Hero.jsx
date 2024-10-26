import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import { Link } from "react-router-dom";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heading="Washing Machine"
        subheading="Laundry Automation Companion"
      >
        <ExampleContent1 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://plus.unsplash.com/premium_photo-1683134512538-7b390d0adc9e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heading="Air Cooler"
        subheading="Portable Cooling Container
"
      >
        <ExampleContent2 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1536353284924-9220c464e262?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heading="Refrigerator"
        subheading=" Food Preservation Center"
      >
        <ExampleContent3 />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent1 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Efficient and Convenient Clothing Care
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xs text-neutral-600 md:text-lg">
        A washing machine is a home appliance designed to automate the process
        of washing clothes, making it easier and more efficient than hand
        washing. Using water, detergent, and a combination of different wash
        cycles, washing machines can handle various fabrics and load sizes.
        Available in both front-loading and top-loading models, washing machines
        today often include features like quick wash, heavy-duty cycles, and
        energy-saving options.
      </p>

      <Link
        to="/app"
        className="w-full rounded bg-neutral-900 px-6 py-2 text-lg text-white transition-colors hover:bg-neutral-700 md:w-fit"
      >
        More <FiArrowUpRight className="inline" />
      </Link>
    </div>
  </div>
);

const ExampleContent2 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      On-the-Go Cooling for Every Adventure
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-lg">
        A cooler is a portable device designed to keep items cool, often used
        outdoors for picnics, beach trips, and camping. Unlike refrigerators,
        which require constant power, coolers work with insulated walls and are
        typically filled with ice or cooling packs to maintain a low temperature
        for several hours. Modern coolers come with wheels, drain plugs, and
        even digital temperature control for convenience.
      </p>

      <Link
        to="/app"
        className="w-full rounded bg-neutral-900 px-6 py-2 text-lg text-white transition-colors hover:bg-neutral-700 md:w-fit"
      >
        More
        <FiArrowUpRight className="inline" />
      </Link>
    </div>
  </div>
);

const ExampleContent3 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Reliable Freshness and Food Longevity
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-lg">
        A refrigerator, often called a fridge, is an essential appliance in
        households, known for its ability to preserve food by keeping it at low
        temperatures. Using a combination of compressors and refrigerants, a
        fridge prevents the growth of bacteria and mold, ensuring freshness for
        an extended period. Modern refrigerators come with various features like
        adjustable shelves, temperature controls, energy-saving modes, and
        advanced compartments designed to store different food types efficiently
      </p>

      <Link
        to="/app"
        className="w-full rounded bg-neutral-900 px-6 py-2 text-lg  text-white transition-colors hover:bg-neutral-700 md:w-fit"
      >
        More <FiArrowUpRight className="inline" />
      </Link>
    </div>
  </div>
);
