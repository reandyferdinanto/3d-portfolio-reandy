import React, {useRef, useEffect} from 'react'

import eagleScene from '../models/3d/eagle.glb'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function EagleModel(props) {
    const eagleRef = useRef();
    const { scene, animations } = useGLTF(eagleScene);
    const { actions } = useAnimations(animations, eagleRef);
  
    useEffect(() => {
        console.log('Animations object:', animations);
        actions['CINEMA_4D_Principal'].play();
        // actions['eagle'].play();


    },[actions])

    useFrame(({clock, camera}) => {
        eagleRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2

        if (eagleRef.current.position.x > camera.position.x + 5) {
            eagleRef.current.rotation.y = Math.PI;
          } else if (eagleRef.current.position.x < camera.position.x - 10) {
            eagleRef.current.rotation.y = 0;
          }
      
          if (eagleRef.current.rotation.y === 0) {
            eagleRef.current.position.x += 0.01;
            eagleRef.current.position.z -= 0.01;
          } else {
            eagleRef.current.position.x -= 0.01;
            eagleRef.current.position.z += 0.01;
          }
    })

  return (
    <mesh ref={eagleRef} position = {[-8, -5, -5]} scale={[0.05, 0.05, 0.05]}>
        <primitive object={scene} />
    </mesh>
  )
}
  
  useGLTF.preload("/models/eagle.glb");
  
  export default EagleModel;