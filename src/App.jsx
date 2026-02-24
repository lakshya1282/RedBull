import React from 'react';
import Hero from './components/Hero';
import ModernVideoSection from './components/ModernVideoSection';
import ModernFooter from './components/ModernFooter';
import useSmoothScroll from './hooks/useSmoothScroll';

function App() {
  // Activate Lenis Smooth Scrolling
  useSmoothScroll();

  return (
    <div className="App">
      <Hero />

      <ModernVideoSection
        videoSrc="/v1.mp4"
        alignment="left"
        title={[
          "Vitalizes Body and Mind.",
          "Energy for Every Moment.",
          "Stay Focused."
        ]}
        subtitle={[
          "Red Bull Energy Drink is appreciated worldwide by top athletes, busy professionals, university students and travelers on long journeys.",
          "Unlock your full potential with a formula designed for those who dare to challenge the limits.",
          "Whether you're studying for an exam or driving home, Red Bull gives you the focus you need."
        ]}
        ctaText="Explore the Formula"
        features={[
          { value: "80mg", label: "Caffeine" },
          { value: "100%", label: "Alpine Water" },
          { value: "B-Group", label: "Vitamins" },
          { value: "11g", label: "Sugars / 100ml" }
        ]}
      />

      <ModernVideoSection
        videoSrc="/v2.mp4"
        alignment="right"
        title={[
          "Unleash Your Potential.",
          "Challenge The Ordinary.",
          "Experience The Extraordinary."
        ]}
        subtitle={[
          "From high-altitude adventures to intense gaming marathons, Red Bull gives you the edge you need to stay ahead of the game.",
          "Join a global community of innovators, record-breakers, and thrill-seekers who redefine what's possible.",
          "Push your boundaries and experience the world without limits. Red Bull gives you wings."
        ]}
        ctaText="Join the World"
        features={[
          { value: "1000+", label: "Events Yearly" },
          { value: "172", label: "Countries" },
          { value: "800+", label: "Athletes" },
          { value: "∞", label: "Possibilities" }
        ]}
      />

      <ModernFooter />
    </div>
  );
}

export default App;
