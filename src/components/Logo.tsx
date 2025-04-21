
import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size = 360, className = "" }: LogoProps) => {
  return (
    <img
      src="/lovable-uploads/0307e07c-23d0-4e1a-b223-9380d9309fa9.png"
      alt="Kodenyx AI logo"
      width={size}
      height={size}
      style={{ display: "block", backgroundColor: "transparent", boxShadow: "none" }}
      className={`object-contain rounded-md ${className}`}
    />
  );
};

export default Logo;

