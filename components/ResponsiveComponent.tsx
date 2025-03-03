"use client";

import React from "react";
import useScreenSize from "@/hook/useScreenSize";

interface ResponsiveComponentProps {
    children: (props: { size: number | undefined }) => React.ReactNode;
  }

  const ResponsiveComponent: React.FC<ResponsiveComponentProps> = ({ children }) => {
    const size = useScreenSize();

  return <>{children({ size })}</>;
};

export default ResponsiveComponent;