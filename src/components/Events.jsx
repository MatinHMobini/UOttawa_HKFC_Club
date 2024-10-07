import React, { useState } from 'react';
import './Events.css'; // Importing custom CSS file for animations
import { motion } from 'framer-motion';
import logo from "../assets/HKFCLogo.png";


// Example event data
const eventList = [
  {
    id: 1,
    title: "Introduction à HKFC / Introduction to HKFC",
    category: "Future",
    date: "TBD",
    description: "Rejoignez-nous pour notre premier événement où nous nous présenterons mutuellement et présenterons les objectifs du HKFC. Join us for our first event where we introduce eachother and the goals of HKFC.",
    location: "TBD",
    image: logo
  },
  {
    id: 2,
    title: "Discussion sur la carrière / Career Talk",
    category: "Future",
    date: "TBD",
    description: "Rencontrez des professionnels du secteur et découvrez les opportunités de carrière. Meet industry professionals and learn about career opportunities.",
    location: "TBD",
    image: logo
  },
  {
    id: 3,
    title: "Construction d'équipe / Team Building",
    category: "Future",
    date: "TBD",
    description: "Une journée d’exercices et d’activités passionnants pour renforcer l’esprit d’équipe. A day of exciting team-building exercises and activities.",
    location: "TBD",
    image: logo
  }
];

const Events = () => {
  const [filter, setFilter] = useState('All');

  const filteredEvents = filter === 'All' ? eventList : eventList.filter(event => event.category === filter);

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
        whileInView={{opacity:1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration:0.5, delay: 0.4}}
        className="my-20 text-center text-4xl font-semibold">Événements \ Events</motion.h2>

      <motion.div 
        whileInView={{opacity:1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration:0.5, delay: 0.4}}
        className="flex justify-center mb-8">
        <button 
          className={`mx-2 px-4 py-2 border rounded ${filter === 'All' ? 'bg-blue-500 text-white' : 'bg-black text-white'}`}
          onClick={() => setFilter('All')}
        >
          Tout / All
        </button>
        <button 
          className={`mx-2 px-4 py-2 border rounded ${filter === 'Future' ? 'bg-blue-500 text-white' : 'bg-black text-white'}`}
          onClick={() => setFilter('Future')}
        >
          Avenir / Future
        </button>
        <button 
          className={`mx-2 px-4 py-2 border rounded ${filter === 'Past' ? 'bg-blue-500 text-white' : 'bg-black text-white'}`}
          onClick={() => setFilter('Past')}
        >
          Passé / Past
        </button>
      </motion.div>

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
                alt={event.title}
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover"
              />
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">{event.title}</h3>
                <p className="text-sm md:text-base text-gray-400">{event.date}</p>
                <p className="text-base md:text-lg">{event.description}</p>
                <p className="text-sm md:text-base font-bold">Emplacement / Location: {event.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Events;
