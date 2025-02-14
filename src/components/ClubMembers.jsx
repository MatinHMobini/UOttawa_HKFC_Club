import { MEMBERS } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa"; 

const ClubMembers = ({ language }) => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{opacity:1, y: 0}}
        initial={{opacity: 0, y: 100}}
        transition={{duration:0.5, delay: 0.4}}
        className="my-20 text-center text-4xl font-semibold"
      >
        {language === "en" ? "Meet Our Club Members" : "Rencontrez Les Membres De Notre Club"}
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
                  width: '100%',              
                  height: 'auto',             
                  maxWidth: '200px',         
                  maxHeight: '200px',        
                }}
              />
            </motion.div>
            <motion.div 
              whileInView={{opacity:1, x: 0}}
              initial={{opacity: 0, x: 100}}
              transition={{duration:0.5, delay: 0.4}}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{member.name} - 
                <span className="text-sm text-purple-100">
                  {language === "en" ? member.role.split(" / ")[1] : member.role.split(" / ")[0]}
                </span>
              </h6>
              
              <p className="mb-4 text-neutral-400">
                {language === "en" 
                  ? member.description.split(". ")[1] 
                  : member.description.split(". ")[0]
                }
              </p>

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
