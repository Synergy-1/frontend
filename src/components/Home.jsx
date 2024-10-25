/* eslint-disable react/prop-types */
import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useRef } from "react";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-white">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <Nav />
        <Schedule />
        <Hero />
      </ReactLenis>
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-black">
      <img src="/logo.jpg" className="h-12 w-12 rounded-full" />
      <button
        onClick={() => {
          document.getElementById("launch-schedule")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1 p-2 rounded-lg text-black text-lg font-semibold tracking-wide"
      >
        About Us <FiArrowRight />
      </button>
    </nav>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: "url(/computer.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://imgs.search.brave.com/-3Pjo6er0ivHLJVEWo1_NqX9lffw-0ZnAJ_cI1V_jmc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MjE2NTY1NDM0NTMt/ZTRjYWMzNmMwYzQw/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjAuMyZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1UWjhmSGRo/YzJocGJtY2xNakJ0/WVdOb2FXNWxmR1Z1/ZkRCOGZEQjhmSHd3.jpeg"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="../../public/img3.jpg"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="https://imgs.search.brave.com/tG5qzgTP6eC2kUY8wcSHxwWAbIBhi9yx80HP0e1TCQU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9xdWlj/a2VsZWN0cmljaXR5/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOS8wMi9UaGUt/SW1wb3J0YW5jZS1v/Zi1Db25zZXJ2aW5n/LUVuZXJneS1RdWlj/ay1FbGVjdHJpY2l0/eS1CbG9nLmpwZw"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="../../public/img5.jpg"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-black"
    >
      <motion.h1
        initial={{ y: 50, opacity: 0 }} // Initial state for entrance animation
        animate={{ y: 0, opacity: 1 }} // Final state
        transition={{ ease: "easeInOut", duration: 0.75 }} // Animation transition
        className="mb-5 text-6xl font-black uppercase text-black"
      >
        SYNERGY1
      </motion.h1>
      <motion.h2
        initial={{ y: 50, opacity: 0 }} // Initial state for entrance animation
        animate={{ y: 0, opacity: 1 }} // Final state
        transition={{ ease: "easeInOut", duration: 0.75, delay: 0.2 }} // Delay for the subtitle
        className="tracking-wider text-3xl font-bold mb-5"
      >
        Smart. Sustainable. Simple.
      </motion.h2>
      <motion.p
        initial={{ y: 50, opacity: 0 }} // Initial state for entrance animation
        animate={{ y: 0, opacity: 1 }} // Final state
        transition={{ ease: "easeInOut", duration: 0.75, delay: 0.4 }} // Delay for the paragraph
        className="text-md font-semibold tracking-wide"
      >
        At Synergy, we believe that energy conservation and sustainability can
        be seamlessly integrated into everyday life. Our innovative solutions
        empower households to optimize their energy and water usage without
        compromising comfort or convenience. By harnessing the latest
        technology, we offer smart plug-in devices that monitor and manage
        energy consumption, ensuring that every home contributes to a greener
        planet. Join us on our journey to make sustainable living simple and
        accessible for everyone.
      </motion.p>
      <motion.button
        initial={{ y: 20, opacity: 0 }} // Initial state for entrance animation
        animate={{ y: 0, opacity: 1 }} // Final state
        transition={{ ease: "easeInOut", duration: 0.75, delay: 0.6 }} // Delay for the button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="py-3 px-8 m-4 bg-gray-200 text-black rounded-lg font-semibold text-lg flex items-center justify-center shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        <span className="ml-2">
          <FiArrowRight />
        </span>
      </motion.button>
    </section>
  );
};
