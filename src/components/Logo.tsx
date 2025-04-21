
import React from "react";

const Logo = ({ size = 96 }: { size?: number }) => {
  // Updated logo source to the new image and removed background
  return (
    <div className="flex items-center gap-2">
      <img
        src="/lovable-uploads/a5477e48-1a61-4474-82e2-614793e46e8e.png"
        alt="Kodenyx AI logo"
        width={size}
        height={size}
        className="rounded-md object-contain bg-transparent"
        style={{}} // No background or boxShadow
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
