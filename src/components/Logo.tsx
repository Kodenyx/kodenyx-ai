
import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size = 180, className = "" }: LogoProps) => {
  return (
    <img
      src="/lovable-uploads/2d45bf47-cf24-43c6-be90-66acb389f636.png"
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
