import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

// import skyScene from "../../assets/3d/sky.glb";
import skyScene from "../../assets/3d/animeSky.glb";
// import skyScene from "../../assets/3d/spaceSky.glb";



// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function Sky({ isRotating }) {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  const skyScale = 1



  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });

  return (

    <mesh ref={skyRef} scale={[skyScale, skyScale, skyScale]}>
      <directionalLight intensity={-1} position={[0, -1, 0]} />
      <primitive object={sky.scene} />
    </mesh>
  );
}

// import { useRef } from "react";
// import { useGLTF } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";

// import skyScene from "../../assets/3d/fantasySky.glb";

// export function Sky({ isRotating }) {
//   const sky = useGLTF(skyScene);
//   const skyRef = useRef();

//   // Set the camera position inside the sphere
//   const cameraPosition = { x: -5, y: -5, z: 0.1 };

//   // Adjust the rotation speed based on your preference
//   const rotationSpeed = 0.25;

//   useFrame(({ camera }, delta) => {
//     // Update camera position
//     camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);

//     if (isRotating) {
//       skyRef.current.rotation.y += rotationSpeed * delta;
//     }
//   });

//   return (
//     <mesh ref={skyRef}>
//       <primitive object={sky.scene} />
//     </mesh>
//   );
// }

