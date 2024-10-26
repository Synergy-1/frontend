/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

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

// Model components remain unchanged (AC, Washing_Machine, Refrigerator)

function Dashboard() {
  const [selectedModel, setSelectedModel] = useState("Refrigerator");
  const [isLoading, setIsLoading] = useState(false);
  const [sensorData, setSensorData] = useState({
    weight: 0,
    temperature: 0,
    humidity: 0,
    motionDetected: false,
  });

  // Fetch API data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://10.60.201.123/data"); // Replace with your endpoint
        setSensorData(response.data);
      } catch (error) {
        console.error("Error fetching sensor data:", error);
      }
    };
    fetchData();
  }, []);

  async function handleClick() {
    try {
      setIsLoading(true);
      await axios.post("http://10.60.201.123/led");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const renderModel = () => {
    switch (selectedModel) {
      case "Washing_Machine":
        return <Washing_Machine />;
      case "Refrigerator":
      default:
        return <Refrigerator />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-screen w-screen flex flex-col relative bg-white">
        <div className="flex flex-1 p-2 justify-evenly items-center relative">
          {/* Button Section */}
          <div className="flex item-center justify-center w-[20vw] mr-[40vw]">
            <div>
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

                {selectedModel === "Washing_Machine" && (
                  <button
                    className="py-2 px-4 m-2 bg-red-500 text-white rounded-lg flex items-center justify-center"
                    onClick={handleClick}
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          ></path>
                        </svg>
                        Releasing Water
                      </>
                    ) : (
                      "Release Water"
                    )}
                  </button>
                )}
              </div>

              {selectedModel === "Washing_Machine" && (
                <div className="bg-yellow-500 flex items-center gap-1 tracking-wide w-1/2   p-4 rounded-lg text-white">
                  <p>Weight=</p>
                  <span>{sensorData.weight}g</span>
                </div>
              )}

              {selectedModel === "Refrigerator" && (
                <div className="bg-yellow-500 flex items-center gap-1 tracking-wide   p-4 w-2/3 rounded-lg text-white">
                  <p>Temperature=</p>
                  <span>{sensorData.temperature}C</span>
                </div>
              )}

              {selectedModel === "Refrigerator" && (
                <div
                  className={`${
                    sensorData.motionDetected ? "bg-red-500" : "bg-green-500"
                  } text-white p-3 mt-2 rounded-lg`}
                >
                  {sensorData.motionDetected ? (
                    <p>Storage full optimizing energy</p>
                  ) : (
                    <p>Minimizing cooling effect</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Canvas Container */}
          <div
            className="absolute bottom-0 right-0 bg-teal-700 rounded-tl-full"
            style={{ height: "80vh", width: "40vw" }}
          >
            <Canvas
              camera={{ position: [0, 2, 5], fov: 45 }}
              style={{ height: "100%", width: "100%" }}
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} />
              <Suspense fallback={null}>{renderModel()}</Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
