
import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size = 180, className = "" }: LogoProps) => {
  return (
    <img
      src="/lovable-uploads/3b2c9ddf-a4f6-48aa-9cea-7d9708f57089.png"
      alt="KAI logo"
      width={size}
      height={size}
      style={{ 
        display: "block", 
        backgroundColor: "transparent", 
        boxShadow: "none",
        filter: "drop-shadow(0 0 0 transparent)"
      }}
      className={`object-contain ${className}`}
    />
  );
};

export default Logo;
