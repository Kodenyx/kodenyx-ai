
import Navbar from "@/components/Navbar";
import NewHero from "@/components/NewHero";
import AsSeenOn from "@/components/AsSeenOn";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import WhatWeFix from "@/components/WhatWeFix";
import GrowthPath from "@/components/GrowthPath";
import HowItWorks from "@/components/HowItWorks";
import ProofWins from "@/components/ProofWins";
import WhyKodenyx from "@/components/WhyKodenyx";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <NewHero />
      <AsSeenOn />
      <WhoThisIsFor />
      <WhatWeFix />
      <GrowthPath />
      <HowItWorks />
      <ProofWins />
      <WhyKodenyx />
      <FinalCTA />
    </div>
  );
};

export default Index;
