import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../../models/Scene";
import logo from "../../assets/images/header/logo.png";
const Sofa = () => (
  <Canvas
    camera={{ position: [-3, 1.5, 5], zoom: 3.5 }}
    className="sofa"
    style={{ height: "380px", width: "732px" }}
  >
    <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
    <color attach="background" args={["white"]} />
    <hemisphereLight intensity={1} />
    <spotLight
      position={[20, 40, 40]}
      angle={0.9}
      penumbra={1}
      intensity={2}
      castShadow
    />
    <Suspense fallback={logo}>
      <group position={[-0.4, 0, 0]}>
        <Model />
      </group>
    </Suspense>
  </Canvas>
);

export default Sofa;
