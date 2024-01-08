import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import Loader from "../Components/Loader";
import Island from "../Models/Island";
import Sky from "../Models/Sky";
import Plane from "../Models/Plane";
import Bird from "../Models/Bird";
{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
  popup
</div>; */
}
const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPositon = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
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
  return (
    <section className="w-full h-screen relative">
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
            planePosition={planePosition}
            planeScale={planeScale}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
