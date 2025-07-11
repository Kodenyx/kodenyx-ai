
import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size = 180, className = "" }: LogoProps) => {
  return (
    <img
      src="/lovable-uploads/fa2197d3-f566-4cca-8edb-e93e86b348e7.png"
      alt="KAI KODENYX AI logo"
      width={size}
      height={size}
      style={{ 
        display: "block", 
        backgroundColor: "hsl(var(--secondary))",
        boxShadow: "none",
        filter: "drop-shadow(0 0 0 transparent)"
      }}
      className={`object-contain ${className}`}
    />
  );
};

export default Logo;
