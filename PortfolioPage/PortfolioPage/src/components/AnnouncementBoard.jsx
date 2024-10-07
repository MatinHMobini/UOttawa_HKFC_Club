import { motion } from "framer-motion";

const announcements = [

  {
    title: "Mise à jour de l'événement / Event Update",
    date: "TBD",
    message: "Notre première réunion de club aura lieu à TBD. Assurez-vous d'apporter vos idées d'événements! Our First club meeting will be held at TBD. Make sure to bring your event ideas!",
    category: "Événements / Events"
  },
  {
    title: "Actualités générales du club / General Club News",
    date: "TBD",
    message: "Bienvenue à tous les nouveaux membres ! Nous sommes ravis de commencer avec de nouveaux projets et événements ce semestre. Welcome to all new members! We are excited to get started with new projects and events this semester.",
    category: "Général / General"
  },
  /*{
    title: "New Project Announcement",
    date: "2024-10-10",
    message: "We are starting a new project focusing on physical wellness and career development for members.",
    category: "Plans"
  },*/
  {
    title: "Rappel du sondage / Poll Reminder",
    date: "TBD",
    message: "N'oubliez pas de participer à notre dernier sondage pour postuler à un poste chez HKFC ! Don't forget to participate in our latest poll to apply for a role at HKFC!",
    category: "Sondage / Poll"
  },
];

const AnnouncementBoard = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{opacity:1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration:0.5, delay: 0.5}}
        className="my-20 text-center text-4xl font-semibold">Tableau d'annonces / Announcement Board</motion.h2>
      
      <div>
        {announcements.map((announcement, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4"> 
              <motion.p 
                whileInView={{opacity:1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration:0.5, delay: 0.5}}
                className="mb-2 text-sm text-neutral-400">{announcement.date}</motion.p>
            </div>

            <motion.div 
              whileInView={{opacity:1, x: 0}}
              initial={{opacity: 0, x: 100}}
              transition={{duration:0.5, delay: 0.5}}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-xl">
                {announcement.title} - <span className="text-sm text-purple-100">{announcement.category}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{announcement.message}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBoard;
