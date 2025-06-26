
import React, { useState, useEffect } from "react";
import { removeBackground, loadImage } from "../utils/backgroundRemoval";

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size = 180, className = "" }: LogoProps) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processLogo = async () => {
      try {
        setIsProcessing(true);
        
        // Fetch the original image
        const response = await fetch("/lovable-uploads/8fbdfeae-0517-4da9-a85a-f55256cbdb6f.png");
        const blob = await response.blob();
        
        // Load the image
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create URL for the processed image
        const url = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(url);
        
      } catch (error) {
        console.error('Error processing logo:', error);
        // Fallback to original image if processing fails
        setProcessedImageUrl("/lovable-uploads/8fbdfeae-0517-4da9-a85a-f55256cbdb6f.png");
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();

    // Cleanup function to revoke the object URL
    return () => {
      if (processedImageUrl) {
        URL.revokeObjectURL(processedImageUrl);
      }
    };
  }, []);

  // Show loading state or fallback while processing
  if (isProcessing || !processedImageUrl) {
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
  }

  return (
    <img
      src={processedImageUrl}
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
