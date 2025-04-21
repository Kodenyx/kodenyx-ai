
import React from "react";

const Logo = ({ size = 96 }: { size?: number }) => {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/lovable-uploads/21a37e1d-c374-49c3-8c21-ad0e9be2b488.png"
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
