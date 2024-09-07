// src/pages/Skills.tsx
import React from "react";
import { motion } from "framer-motion";
import {
    FaCode,
    FaServer,
    FaTools,
    FaDatabase,
    FaLanguage,
} from "react-icons/fa";

interface SkillCategory {
    name: string;
    skills: string[];
    icon: React.ReactNode;
}

const skillCategories: SkillCategory[] = [
    {
        name: "Frontend",
        skills: ["Flutter", "Android (Kotlin / Jetpack Compose)"],
        icon: <FaCode />,
    },
    {
        name: "Backend",
        skills: ["Flask", "FastAPI", "Go"],
        icon: <FaServer />,
    },
    {
        name: "Utilities",
        skills: [
            "Selenium (Python)",
            "Git",
            "Postman",
            "HTTP toolkit",
            "Bash",
            "Linux Operating System",
            "Data Structures and Algorithms",
        ],
        icon: <FaTools />,
    },
    {
        name: "Languages",
        skills: ["Python", "Dart", "Java", "Kotlin", "C", "JavaScript", "Go"],
        icon: <FaLanguage />,
    },
    {
        name: "Databases",
        skills: ["MySQL", "PostgreSQL", "SQLite", "Firebase"],
        icon: <FaDatabase />,
    },
];

const Skills: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>Skills</h2>
            <div className="skill-categories">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        className="skill-category"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                    >
                        <div className="icon">{category.icon}</div>
                        <h3>{category.name}</h3>
                        <ul>
                            {category.skills.map((skill, skillIndex) => (
                                <li key={skillIndex}>{skill}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Skills;
