import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import Card from "./Card";

// Model components
function AC() {
  const { scene } = useGLTF("/ac.glb");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  const { position, scale } = useSpring({
    from: { scale: 0.5 },
    to: { scale: 1.2 },
    config: { mass: 1, tension: 180, friction: 12 },
  });

  return (
    <a.group ref={modelRef} position={position} scale={scale}>
      <primitive object={scene} />
    </a.group>
  );
}

function Washing_Machine() {
  const { scene } = useGLTF("/washing_machine.glb");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  const { position, scale } = useSpring({
    from: { scale: 0.5 },
    to: { position: [0, -1, 0], scale: 3.5 },
    config: { mass: 1, tension: 180, friction: 12 },
  });

  return (
    <a.group ref={modelRef} position={position} scale={scale}>
      <primitive object={scene} />
    </a.group>
  );
}

function Refrigerator() {
  const { scene } = useGLTF("/refrigerator.glb");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  const { position, scale } = useSpring({
    from: { scale: 0.5 },
    to: { position: [0, -1, 0], scale: 1.8 },
    config: { mass: 1, tension: 180, friction: 12 },
  });

  return (
    <a.group ref={modelRef} position={position} scale={scale}>
      <primitive object={scene} />
    </a.group>
  );
}

function Dashboard() {
  const [selectedModel, setSelectedModel] = useState("Refrigerator");

  const renderModel = () => {
    switch (selectedModel) {
      //   case "AC":
      //     return <AC />;
      case "Washing_Machine":
        return <Washing_Machine />;
      case "Refrigerator":
      default:
        return <Refrigerator />;
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col relative bg-neutral-300">
      <div className="p-2 flex items-center justify-between">
        <Link to="/">
          <img
            src="/logo.jpg"
            alt="logo"
            className="h-12 sm:h-14 mix-blend-color-burn"
          />
        </Link>
        <BiMenu className="text-3xl sm:text-5xl" />
      </div>

      <div className="flex flex-1 p-2 justify-evenly items-center relative">
        {/* Button Section */}
        <div className="flex item-center justify-center w-[20vw] p-4">
          <Card />
          <div className="flex items-center justify-center">
            <button
              onClick={() => setSelectedModel("Refrigerator")}
              className={`py-2 px-4 m-2 ${
                selectedModel === "Refrigerator"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              } rounded-lg`}
            >
              Refrigerator
            </button>
            {/* <button
            onClick={() => setSelectedModel("AC")}
            className={`py-2 px-4 m-2 ${
              selectedModel === "AC" ? "bg-blue-500 text-white" : "bg-gray-200"
            } rounded-lg`}
          >
            AC
          </button> */}
            <button
              onClick={() => setSelectedModel("Washing_Machine")}
              className={`py-2 px-4 m-2 ${
                selectedModel === "Washing_Machine"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              } rounded-lg`}
            >
              Washing Machine
            </button>
          </div>
        </div>

        <div>
          {/* Canvas Container */}
          <div
            className="absolute bottom-0 right-0 bg-green-800 rounded-tl-full"
            style={{ height: "80vh", width: "40vw" }}
          >
            <Canvas
              camera={{ position: [0, 2, 5], fov: 45 }} // Adjust camera position for a better view
              style={{ height: "100%", width: "100%" }}
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} />
              <Suspense fallback={null}>{renderModel()}</Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
