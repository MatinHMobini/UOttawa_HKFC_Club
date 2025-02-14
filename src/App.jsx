import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import MissionStatement from './components/MissionStatment';
import Events from './components/Events';
import AnnouncementBoard from './components/AnnouncementBoard';
import ClubMembers from './components/ClubMembers';
import Contact from './components/Contact';

const App = () => {
  const [language, setLanguage] = useState("en"); // Default to English

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
                      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>  
      </div>

      <div className="container mx-auto px-8"> 
        <Navbar setLanguage={setLanguage} />
        <Introduction language={language} />
        <MissionStatement language={language} /> 
        <Events language={language} />
        <AnnouncementBoard language={language} />
        <ClubMembers language={language} />
        <Contact language={language} />
      </div>
      
    </div>
  );
};

export default App;
