
import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size = 180, className = "" }: LogoProps) => {
  return (
    <img
      src="/lovable-uploads/8fbdfeae-0517-4da9-a85a-f55256cbdb6f.png"
      alt="Kodenyx AI logo"
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
