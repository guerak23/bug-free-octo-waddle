import React from "react";
import { WaveBackground } from "@/components/ui/wave-background";
import { LimelightNav } from "@/components/ui/limelight-nav";
import { FloatingDock } from "@/components/ui/dock";
import { HeroSection } from "@/components/hero/hero-section";
import { ProgressiveBlurLogos } from "@/components/ui/progressive-blur-logos";
import { FeaturesSection } from "@/components/features/features-section";
import { PipelineSection } from "@/components/pipeline/pipeline-section";
import { AboutSection } from "@/components/about/about-section";
import { HoverFooter } from "@/components/ui/hover-footer";

export default function Home() {
  return (
    <WaveBackground>
      {/* 1. Limelight Top Navigation */}
      <LimelightNav />

      {/* 2. Hero Section with Download/Access Animation */}
      <HeroSection />

      {/* 3. Progressive Blur Logo Cloud */}
      <ProgressiveBlurLogos />

      {/* 4. Core Features with Marketing Badges & Services Cards */}
      <FeaturesSection />

      {/* 5. The Automation Pipeline & Platform Stats */}
      <PipelineSection />

      {/* 6. About Us & Architecture FAQ */}
      <AboutSection />

      {/* 7. Hover Reveal Footer */}
      <HoverFooter />

      {/* 8. Floating Bottom Dock */}
      <FloatingDock />
    </WaveBackground>
  );
}
