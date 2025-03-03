"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

interface RenderProps {
  children: React.ReactNode;
  className?: string;
}

const RenderModel = ({ children, className }: RenderProps) => {
  return (
    <Canvas className={`w-screen h-screen -z-10 relative ${className}`}>
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset='dawn' />
    </Canvas>
  );
};

export default RenderModel;
