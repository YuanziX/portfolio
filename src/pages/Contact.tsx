// src/pages/Contact.tsx
import React from "react";
import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

const Contact: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="contact"
        >
            <h2>Contact Me</h2>
            <motion.div
                className="contact-info"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <motion.div className="contact-item" whileHover={{ x: 5 }}>
                    <FaMapMarkerAlt />
                    <span>Jammu, Jammu and Kashmir</span>
                </motion.div>
                <motion.div className="contact-item" whileHover={{ x: 5 }}>
                    <FaEnvelope />
                    <a href="mailto:achubadyal4@gmail.com">
                        achubadyal4@gmail.com
                    </a>
                </motion.div>
                <motion.div className="contact-item" whileHover={{ x: 5 }}>
                    <FaLinkedin />
                    <a
                        href="https://linkedin.com/in/achyut-badyal-06402a275"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn Profile
                    </a>
                </motion.div>
                <motion.div className="contact-item" whileHover={{ x: 5 }}>
                    <FaGithub />
                    <a
                        href="https://github.com/YuanziX"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub Profile
                    </a>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Contact;
