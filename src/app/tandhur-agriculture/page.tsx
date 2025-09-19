
"use client";

import HeroSection from "./components/HeroSection";
import ActivityMonitoring from "./components/ActivityMonitoring";
import CaseProjects from "./components/CaseProjects";
import Buttons from "./components/Buttons";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Buttons />
      <HeroSection />
      <ActivityMonitoring />
      <CaseProjects />
    </main>
  );
}