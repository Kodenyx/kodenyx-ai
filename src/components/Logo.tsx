
import React from "react";

const Logo = ({ size = 96 }: { size?: number }) => {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/lovable-uploads/41ee2b8f-7df1-47a5-bf16-113066abda78.png"
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

