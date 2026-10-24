/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnandNavbar } from './components/AnandNavbar.tsx';
import { AnandHero } from './components/AnandHero.tsx';
import { AnandDreamJob } from './components/AnandDreamJob.tsx';
import { AnandRoadmap } from './components/AnandRoadmap.tsx';
import { AnandFacts } from './components/AnandFacts.tsx';
import { AnandProjects } from './components/AnandProjects.tsx';
import { MotivationQuote } from './components/MotivationQuote.tsx';
import { AnandFooter } from './components/AnandFooter.tsx';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('about');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#ADADAD] flex flex-col justify-between selection:bg-[#F0A24C]/30 selection:text-white">
      {/* Navigation Header */}
      <AnandNavbar activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* About / Hero Section */}
        <div id="about">
          <AnandHero onNavigateTab={handleTabChange} />
        </div>

        {/* Dream Career Section */}
        <div id="dream">
          <AnandDreamJob />
        </div>

        {/* Roadmap / Goals Section */}
        <div id="roadmap">
          <AnandRoadmap />
        </div>

        {/* Facts & Hobbies Section */}
        <div id="facts">
          <AnandFacts />
        </div>

        {/* My Projects Section */}
        <div id="projects">
          <AnandProjects />
        </div>

        {/* Motivation Quote Section at the bottom */}
        <MotivationQuote />
      </main>

      {/* Footer */}
      <AnandFooter />
    </div>
  );
}
