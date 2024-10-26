import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto mt-32">
      <div>
        <span className="block mb-4 text-xs md:text-lg text-black font-medium">
          Simple. Sustainable. Smart.
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">Synergy1</h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          We’re on a mission to make your home appliances smarter and kinder to
          the planet! Synergy1 plugs into your washing machine, air cooler, and
          refrigerator to optimize energy and water use—automatically! Our
          sensor-driven, predictive tech connects your appliances to our server,
          keeping you in the loop with real-time data and status updates. Say
          hello to efficient, eco-friendly living!
        </p>
        <Link
          to="/app"
          className="bg-black text-white font-medium py-2 px-4 rounded transition-all hover:bg-black/50 active:scale-95"
        >
          Know more!
        </Link>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/4440652/pexels-photo-4440652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/6508357/pexels-photo-6508357.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/5539540/pexels-photo-5539540.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-2 grid-rows-2 h-[500px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
