import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from "react";

function blenderTest() {
  const glb = useLoader(GLTFLoader, "/test.glb");
  const myMesh = useRef();

  useFrame(({ clock }) => {
    myMesh.current.rotation.x = clock.getElapsedTime();
  });

  return <primitive ref={myMesh} object={glb.scene} />;
}

export default blenderTest;
