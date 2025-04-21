
import React from "react";

const Logo = ({ size = 96 }: { size?: number }) => {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/lovable-uploads/4ff8a7cb-24c8-497c-8326-ac990abfc85b.png"
        alt="Kodenyx AI logo"
        width={size}
        height={size}
        className="rounded-md object-contain bg-transparent"
        style={{ backgroundColor: "transparent", boxShadow: "none" }}
      />
    </div>
  );
};

export default Logo;
