
import React from "react";

const Logo = ({ size = 160 }: { size?: number }) => {
  return (
    <img
      src="/lovable-uploads/37136305-6ae5-49b2-ad75-b8ea7ec3755d.png"
      alt="Kodenyx AI logo"
      width={size}
      height={size}
      style={{ display: "block", backgroundColor: "transparent", boxShadow: "none" }}
      className="rounded-md object-contain"
    />
  );
};

export default Logo;
