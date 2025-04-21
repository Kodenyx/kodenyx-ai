
import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size = 360, className = "" }: LogoProps) => {
  return (
    <img
      src="/lovable-uploads/bd2325b6-601b-4a57-bd31-d4dbd42bc355.png"
      alt="Kodenyx AI logo"
      width={size}
      height={size}
      style={{ display: "block", backgroundColor: "transparent", boxShadow: "none" }}
      className={`object-contain rounded-md ${className}`}
    />
  );
};

export default Logo;
