// src/pages/About.tsx
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const About: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="about"
        >
            <h2>About Me</h2>
            <p>
                I'm a tech enthusiast who fell in love with computers back in
                2010 when I first used my dad's old XP laptop. That
                soul-soothing and exciting experience sparked a lifelong passion
                for technology. Since then, I've been on a journey of continuous
                learning and exploration in the world of computers and software
                development.
            </p>
            <p>
                My coding journey began with Python scripting in middle school,
                followed by Java in high school. As my skills grew, I expanded
                my knowledge to include modern frontend technologies like
                Flutter and Jetpack Compose, as well as backend technologies
                using Python and Go. I'm always excited to tackle new challenges
                and push the boundaries of what's possible with code.
            </p>

            <h3>Education</h3>
            <ul className="education-list">
                <li>
                    <FaGraduationCap />
                    <div>
                        <h4>Bachelor of Technology in Computer Science</h4>
                        <span>
                            VIT-AP University
                            <br />
                            September 2022 - present
                            <br />
                            CGPA: 9.33
                        </span>
                    </div>
                </li>
                <br />
                <li>
                    <FaGraduationCap />
                    <div>
                        <h4>12th in Non-Medical with Informatics Practices</h4>
                        <span>
                            Jodhamal Public School, Jammu
                            <br />
                            June 2022
                            <br />
                            Percentage: 93%
                        </span>
                    </div>
                </li>
                <br />
                <li>
                    <FaGraduationCap />
                    <div>
                        <h4>10th Grade</h4>
                        <span>
                            Army Public School, Udhampur
                            <br />
                            June 2020
                            <br /> Percentage: 94%
                        </span>
                    </div>
                </li>
            </ul>
        </motion.div>
    );
};

export default About;
