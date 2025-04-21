
import React from "react";

const Logo = ({ size = 96 }: { size?: number }) => {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/lovable-uploads/c1d02088-4fe5-431c-b2ba-51cf053cfacc.png"
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

