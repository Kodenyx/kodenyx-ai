
import React from "react";

// Uses the uploaded logo, adds a purple overlay for color consistency.
const Logo = ({ size = 56 }: { size?: number }) => {
  return (
    <div className="relative flex items-center gap-2 select-none">
      <div
        className="rounded-lg overflow-hidden flex items-center justify-center"
        style={{
          width: size,
          height: size,
        }}
      >
        {/* The logo image */}
        <img
          src="/lovable-uploads/5923d951-7acb-47fe-a118-797916c477f3.png"
          alt="Kodenyx AI Logo"
          className="object-contain w-full h-full"
          style={{
            display: "block",
            zIndex: 1,
            position: "relative",
          }}
        />
        {/* Subtle purple overlay using Tailwind and a blend mode */}
        <div
          className="absolute inset-0 bg-[#9b87f5] mix-blend-multiply opacity-70 pointer-events-none rounded-lg"
          style={{ zIndex: 2 }}
        ></div>
      </div>
      <span className="text-2xl font-bold text-white" style={{ color: "#9b87f5" }}>
        Kodenyx AI
      </span>
    </div>
  );
};

export default Logo;
