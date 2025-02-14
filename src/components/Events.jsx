import React, { useState } from 'react';
import './Events.css'; // Importing custom CSS file for animations
import { motion } from 'framer-motion';
import logo from "../assets/HKFCLogo.png";

const eventList = [
  {
    id: 1,
    title: {
      en: "Introduction to HKFC",
      fr: "Introduction à HKFC"
    },
    category: {
      en: "Future",
      fr: "Avenir"
    },
    date: "TBD",
    description: {
      en: "Join us for our first event where we introduce each other and the goals of HKFC.",
      fr: "Rejoignez-nous pour notre premier événement où nous nous présenterons mutuellement et présenterons les objectifs du HKFC."
    },
    location: "TBD",
    image: logo
  },
  {
    id: 2,
    title: {
      en: "Career Talk",
      fr: "Discussion sur la carrière"
    },
    category: {
      en: "Future",
      fr: "Avenir"
    },
    date: "TBD",
    description: {
      en: "Meet industry professionals and learn about career opportunities.",
      fr: "Rencontrez des professionnels du secteur et découvrez les opportunités de carrière."
    },
    location: "TBD",
    image: logo
  },
  {
    id: 3,
    title: {
      en: "Team Building",
      fr: "Construction d'équipe"
    },
    category: {
      en: "Future",
      fr: "Avenir"
    },
    date: "TBD",
    description: {
      en: "A day of exciting team-building exercises and activities.",
      fr: "Une journée d’exercices et d’activités passionnants pour renforcer l’esprit d’équipe."
    },
    location: "TBD",
    image: logo
  }
];

const Events = ({ language }) => {
  const [filter, setFilter] = useState('All');

  const filteredEvents = filter === 'All' ? eventList : eventList.filter(event => event.category.en === filter || event.category.fr === filter);

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
        whileInView={{opacity:1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration:0.5, delay: 0.4}}
        className="my-20 text-center text-4xl font-semibold">
        {language === "en" ? "Events" : "Événements"}
      </motion.h2>

      {/* Filter Buttons */}
      <motion.div 
        whileInView={{opacity:1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration:0.5, delay: 0.4}}
        className="flex justify-center mb-8">
        <button 
          className={`mx-2 px-4 py-2 border rounded ${filter === 'All' ? 'bg-blue-500 text-white' : 'bg-black text-white'}`}
          onClick={() => setFilter('All')}
        >
          {language === "en" ? "All" : "Tout"}
        </button>
        <button 
          className={`mx-2 px-4 py-2 border rounded ${filter === 'Future' ? 'bg-blue-500 text-white' : 'bg-black text-white'}`}
          onClick={() => setFilter('Future')}
        >
          {language === "en" ? "Future" : "Avenir"}
        </button>
        <button 
          className={`mx-2 px-4 py-2 border rounded ${filter === 'Past' ? 'bg-blue-500 text-white' : 'bg-black text-white'}`}
          onClick={() => setFilter('Past')}
        >
          {language === "en" ? "Past" : "Passé"}
        </button>
      </motion.div>

      {/* Events List */}
      <motion.div 
        whileInView={{opacity:1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration:0.5, delay: 0.4}}
        className="flex flex-col items-center gap-6">
        {filteredEvents.map((event, index) => (
          <motion.div 
            key={event.id}
            className={`group relative rounded-2xl border-4 border-neutral-800 p-6 transform transition-transform duration-200 ease-in-out hover:scale-110 hover:border-blue-500 ${index % 2 === 0 ? 'animate-jitter-up' : 'animate-jitter-down'} w-full md:w-3/4 lg:w-2/3 xl:w-1/2`}
          >
            <div className="flex items-center space-x-8">
              <img
                src={event.image}
                alt={event.title[language]}
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover"
              />
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">{event.title[language]}</h3>
                <p className="text-sm md:text-base text-gray-400">{event.date}</p>
                <p className="text-base md:text-lg">{event.description[language]}</p>
                <p className="text-sm md:text-base font-bold">{language === "en" ? "Location" : "Emplacement"}: {event.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Events;
