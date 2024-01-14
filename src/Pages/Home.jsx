import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../Components/Loader";
import Island from "../Models/Island";
import Sky from "../Models/Sky";
import Plane from "../Models/Plane";
import Bird from "../Models/Bird";
import HomeInfo from "../Components/HomeInfo";
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPositon = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 320) {
      screenScale = [0.4, 0.4, 0.4];
    } else if (window.innerWidth > 320 && window.innerWidth < 767) {
      screenScale = [0.5, 0.5, 0.5];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPositon, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale;
    let screenPositon;
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPositon = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPositon = [0, -4, -4];
    }
    return [screenScale, screenPositon];
  };
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-9 left-0 right-0 z-10 flex items-center justify-center p-2 mt-2">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[10, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            position={planePosition}
            scale={planeScale}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className="w-10 h-10 object-contain cursor-pointer"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        ></img>
      </div>
      <div className="absolute right-2 bottom-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-2 md:text-lg cursor-wait max-w-[40%] capitalize text-sm">
        hold the screen and move your mouse to explore more
      </div>
    </section>
  );
};

export default Home;
