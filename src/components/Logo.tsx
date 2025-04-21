
import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size = 180, className = "" }: LogoProps) => {
  return (
    <img
      src="/lovable-uploads/7be76edd-6327-4fba-a83c-f2133794e255.png"
      alt="Kodenyx AI logo"
      width={size}
      height={size}
      style={{ display: "block", backgroundColor: "transparent", boxShadow: "none" }}
      className={`object-contain rounded-md ${className}`}
    />
  );
};

export default Logo;

