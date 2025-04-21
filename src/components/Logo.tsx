
import React from "react";

const Logo = ({ size = 52 }: { size?: number }) => {
  // Replaced logo image source with the new uploaded image
  return (
    <div className="flex items-center gap-2">
      <img
        src="/lovable-uploads/fa64d886-9a9b-42ae-969f-bb7501d24d58.png"
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

