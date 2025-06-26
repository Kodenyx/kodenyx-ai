
import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size = 180, className = "" }: LogoProps) => {
  return (
    <img
      src="/lovable-uploads/28b57f66-8580-4314-a91b-fbcca87072bd.png"
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
