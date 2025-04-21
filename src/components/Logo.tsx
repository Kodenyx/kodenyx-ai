
import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size = 180, className = "" }: LogoProps) => {
  return (
    <img
      src="/lovable-uploads/15fa4592-4e05-4391-884e-311325192276.png"
      alt="Kodenyx AI logo"
      width={size}
      height={size}
      style={{ display: "block", backgroundColor: "transparent", boxShadow: "none" }}
      className={`object-contain rounded-md ${className}`}
    />
  );
};

export default Logo;
