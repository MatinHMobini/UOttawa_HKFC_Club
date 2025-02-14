import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = ({ language }) => {
  return (
    <motion.div 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="border-b border-neutral-900 pb-20"
    >
      {/* Dynamic Heading */}
      <h2 className="my-10 text-center text-4xl font-semibold">
        {language === "en" ? "Get In Touch" : "Entrer en contact"}
      </h2>
      
      {/* Address & Email */}
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <a href={`mailto:${CONTACT.email}`} className="border-b">{CONTACT.email}</a>
      </div>
    </motion.div>
  );
};

export default Contact;
