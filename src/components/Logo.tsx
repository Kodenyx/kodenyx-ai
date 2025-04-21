
import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size = 180, className = "" }: LogoProps) => {
  return (
    <img
      src="/lovable-uploads/dd5d5212-4c8d-425f-842e-8b2597ef5455.png"
      alt="Kodenyx AI logo"
      width={size}
      height={size}
      style={{ display: "block", backgroundColor: "transparent", boxShadow: "none" }}
      className={`object-contain rounded-md ${className}`}
    />
  );
};

export default Logo;

