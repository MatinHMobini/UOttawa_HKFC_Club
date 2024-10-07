import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const MissionStatment = () => {
  const lines = ABOUT_TEXT.trim().split('\n');
  const bulletPoints = lines.slice(0); // lines as bullet points

  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className="flex flex-col items-center">
        <motion.div 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 0.5, delay: 0.4}}
          className="w-full lg:w-3/4 lg:p-8 text-center"
        >
          <h2 className="my-20 text-5xl font-semibold">
            <span className="text-orange-200">énoncé de</span> Mission 
            <br />  
            Mission <span className="text-orange-200">Statement</span>
            </h2>

          <div className="flex items-center justify-center">
            <img 
              className="rounded-2xl"
              src="https://media1.tenor.com/m/ySTIeIgZQBMAAAAC/pushups-intense.gif" 
              alt="Push-ups GIF"
              style={{
                width: '100%',   
                height: 'auto',  
                maxWidth: '600px' 
              }}
            />
          </div>
        </motion.div>
        <motion.div 
          whileInView={{opacity:1, y: 0}}
          initial={{opacity: 0, y: 100}}
          transition={{duration:0.5, delay: 0.4}}
          className="w-full lg:w-3/4 text-center mt-6"
        >
          <div className="flex flex-col items-center justify-center">
            <ul className="list-disc pl-6 space-y-2">
              {bulletPoints.map((line, index) => (
                <li key={index}>{line.trim()}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MissionStatment;
