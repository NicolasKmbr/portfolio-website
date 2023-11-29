"use client";
import styles from "./page.module.css";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import RotatingCube from "@/components/RotatingCube";
import Stickman from "@/components/blenderTest";

export default function Home() {
  const myMesh = useRef(null);
  return (
    <main className={styles.main}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Suspense fallback={null}>
          <Stickman />
        </Suspense>
      </Canvas>
    </main>
  );
}
