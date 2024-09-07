// src/pages/Projects.tsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaMobileAlt, FaServer, FaAndroid } from "react-icons/fa";

interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    icon: React.ReactNode;
}

const projects: Project[] = [
    {
        title: "VITalize - Full Stack Student Companion App",
        description:
            "A student companion app offering easy access to timetables, attendance, marks, and exam schedules. Features a Python-based backend for data scraping and API services, coupled with a robust mobile frontend.",
        technologies: [
            "Flutter",
            "Dart",
            "FastAPI",
            "Python",
            "BLOC",
            "Hive NoSQL",
        ],
        githubUrl: "https://github.com/YuanziX/VITalize",
        icon: <FaMobileAlt />,
    },
    {
        title: "Beatify-core",
        description:
            "A Go backend for a music streaming app, handling music management, user authentication, and streaming. Supports HTTP range requests for efficient streaming and allows user uploads and music retrieval.",
        technologies: ["Go", "net/http", "JWT", "PostgreSQL"],
        githubUrl: "https://github.com/YuanziX/beatify-core",
        icon: <FaServer />,
    },
    {
        title: "Customized Android Kernel",
        description:
            "Rebased OEM changes on the latest CAF tag for Qualcomm fixes, and customized the Android kernel for Xiaomi Phoenix to boost performance and battery life. Implemented hardware-level SafetyNet.",
        technologies: ["C", "Linux Kernel", "Android"],
        githubUrl: "https://github.com/YuanziX/android_kernel_xiaomi_phoenix",
        icon: <FaAndroid />,
    },
];

const Projects: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="projects"
        >
            <h2>Projects</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="icon">{project.icon}</div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="technologies">
                            {project.technologies.map((tech, techIndex) => (
                                <motion.span
                                    key={techIndex}
                                    className="tech-tag"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                        <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-link"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaGithub /> View on GitHub
                        </motion.a>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Projects;
