import { MEMBERS } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa"; 

const ClubMembers = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{opacity:1, y: 0}}
        initial={{opacity: 0, y: 100}}
        transition={{duration:0.5, delay: 0.4}}
        className="my-20 text-center text-4xl font-semibold"
      >
        Rencontrez Les Membres De Notre Club / Meet Our Club Members
      </motion.h2>
      <div>
        {MEMBERS.map((member, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center"> 
            <motion.div 
              whileInView={{opacity:1, x: 0}}
              initial={{opacity: 0, x: -100}}
              transition={{duration:0.5, delay: 0.4}}
              className="w-full lg:w-1/4 flex justify-center"
            > 
              <img 
                src={member.image} 
                alt={member.name} 
                className="mb-6 rounded object-cover"
                style={{
                  objectFit: 'cover',
                  width: '100%',              // Image scales responsively
                  height: 'auto',             // Maintain aspect ratio
                  maxWidth: '200px',          // Set a maximum width limit
                  maxHeight: '200px',         // Set a maximum height limit
                }}
              />
            </motion.div>
            <motion.div 
              whileInView={{opacity:1, x: 0}}
              initial={{opacity: 0, x: 100}}
              transition={{duration:0.5, delay: 0.4}}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{member.name} - <span className="text-sm text-purple-100">{member.role}</span></h6>
              <p className="mb-4 text-neutral-400">{member.description}</p>

              {/* Links to LinkedIn and Email */}
              <div className="flex space-x-2">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    <FaLinkedin className="text-2xl" />
                  </a>
                )}
                {member.email && (
                  <a href={`mailto:${member.email}`} className="text-blue-500">
                    <FaEnvelope className="text-2xl" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClubMembers;
