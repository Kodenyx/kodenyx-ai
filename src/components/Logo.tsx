
import React from "react";

const Logo = ({ size = 96 }: { size?: number }) => {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/lovable-uploads/86bf570a-82ba-4ab4-93e7-bd24878f25e4.png"
        alt="Kodenyx AI logo"
        width={size}
        height={size}
        className="rounded-md object-contain bg-transparent"
        style={{ backgroundColor: "transparent", boxShadow: "none" }}
      />
      <span
        className="text-4xl md:text-5xl font-black text-white tracking-tight hidden sm:inline"
        style={{ letterSpacing: "0.01em" }}
      >
        Kodenyx AI
      </span>
    </div>
  );
};

export default Logo;

