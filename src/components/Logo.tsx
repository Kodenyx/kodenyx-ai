
import React from "react";

const Logo = ({ size = 52 }: { size?: number }) => {
  // Removed background and box shadow to clean up the logo appearance
  return (
    <div className="flex items-center gap-2">
      <img
        src="/lovable-uploads/fa64d886-9a9b-42ae-969f-bb7501d24d58.png"
        alt="Kodenyx AI logo"
        width={size}
        height={size}
        className="rounded-md object-contain bg-transparent"
        style={{}} // Removed boxShadow and background style
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
