/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutModal } from './components/AboutModal';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [aboutTab, setAboutTab] = useState<'all' | 'stats' | 'interests'>('all');

  // "Миний бүтээлүүд" хэсэг рүү шууд гүйлгэх
  const scrollToProjects = () => {
    const el = document.getElementById('my-projects-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openAboutAll = () => {
    setAboutTab('all');
    setAboutOpen(true);
  };
  const openStats = () => {
    setAboutTab('stats');
    setAboutOpen(true);
  };
  const openInterests = () => {
    setAboutTab('interests');
    setAboutOpen(true);
  };
  const openClub = () => {
    setAboutTab('stats');
    setAboutOpen(true);
  };
  const openContact = () => setContactOpen(true);

  return (
    <main className="relative min-h-screen w-full bg-black text-white selection:bg-white selection:text-black">
      {/* 1. Хулганы хөдөлгөөнөөр удирдах бүрэн дэлгэцийн видео дэвсгэр */}
      <BackgroundVideo />

      {/* 2. Толгой навигацийн цэс */}
      <Navbar
        onOpenProjects={scrollToProjects}
        onOpenAbout={openAboutAll}
        onOpenInterests={openInterests}
        onOpenClub={openClub}
        onOpenContact={openContact}
      />

      {/* 3. Гол Hero хэсэг */}
      <HeroSection
        onOpenProjects={scrollToProjects}
        onOpenAbout={openAboutAll}
        onOpenInterests={openInterests}
        onOpenStats={openStats}
      />

      {/* 4. "Миний бүтээлүүд" секц — хуудас дээр шууд ил харагдана */}
      <ProjectsSection />

      {/* 5. Хувийн мэдээлэл, сонирхлын модаль */}
      <AboutModal
        isOpen={aboutOpen}
        onClose={() => setAboutOpen(false)}
        activeTab={aboutTab}
      />

      {/* 6. Холбогдох модаль */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </main>
  );
}
