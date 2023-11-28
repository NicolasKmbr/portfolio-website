import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function RotatingCube() {
  const myMesh = useRef();

  useFrame(({ clock }) => {
    myMesh.current.rotation.x = clock.getElapsedTime();
  });

  return (
    <mesh ref={myMesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial color="royalblue" />
    </mesh>
  );
}
