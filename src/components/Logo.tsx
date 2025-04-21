
import React from "react";

const Logo = ({ size = 52 }: { size?: number }) => {
  // You can adjust `size` prop for flexibility in different UI sections
  return (
    <div className="flex items-center gap-2">
      <img
        src="/lovable-uploads/b2d9b509-2906-4602-b4fc-e2ba390caf17.png"
        alt="Kodenyx AI logo"
        width={size}
        height={size}
        className="rounded-md object-contain bg-transparent"
        style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.08)" }}
      />
      <span
        className="text-2xl md:text-3xl font-black text-white tracking-tight hidden sm:inline"
        style={{ letterSpacing: "0.01em" }}
      >
        Kodenyx AI
      </span>
    </div>
  );
};

export default Logo;
