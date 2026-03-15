"use client";

import { Warp } from "@paper-design/shaders-react";

const GRAIN_URL =
  "https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png";

export default function WarpBackground({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ borderRadius: "inherit" }}
    >
      <Warp
        style={{ width: "100%", height: "100%" }}
        colors={["#000000", "#75c1f0", "#ffffff"]}
        speed={1.0}
        proportion={0.25}
        softness={1.0}
        distortion={0.04}
        swirl={0.20}
        swirlIterations={20}
        shape="checks"
        shapeScale={0.68}
        scale={4.4}
        rotation={0}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("${GRAIN_URL}")`,
          backgroundSize: "200px",
          backgroundRepeat: "repeat",
          opacity: 0.125,
        }}
      />
    </div>
  );
}
