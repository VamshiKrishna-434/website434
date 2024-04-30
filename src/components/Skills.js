import React from 'react';
import './Skills.css';
import javaImage from '../images/java.png';
import cImage from '../images/c.png';
import cppImage from '../images/c++.png';
import cSharpImage from '../images/c#.png';
import pythonImage from '../images/python.png';
import webDevImage from '../images/web-dev.png';
import reactImage from '../images/react.png';
import gitImage from '../images/git.png';
import linuxImage from '../images/linux.png';
import communicationIcon from '../images/communication.png';
import listeningIcon from '../images/listening.png';
import thinkingIcon from '../images/critical-thinking.png';
import timeManagementIcon from '../images/time-management.png';
import problemSolvingIcon from '../images/problem-solving.png';
import leadershipIcon from '../images/leadership.png';
import { motion } from 'framer-motion'; // Import framer-motion for animations
import './Skills.css';

const Skills = () => {
    const technicalSkills = [
        { name: "Java", image: javaImage },
        { name: "C", image: cImage },
        { name: "C++", image: cppImage },
        { name: "C#", image: cSharpImage },
        { name: "Python", image: pythonImage },
        { name: "Web Development", image: webDevImage },
        { name: "React", image: reactImage },
        { name: "Git", image: gitImage },
        { name: "Linux (Ubuntu)", image: linuxImage }
    ];

    const softSkills = [
        { name: "Communication Skills", icon: communicationIcon },
        { name: "Listening Skills", icon: listeningIcon },
        { name: "Critical-Thinking", icon: thinkingIcon },
        { name: "Time Management", icon: timeManagementIcon },
        { name: "Problem-Solving", icon: problemSolvingIcon },
        { name: "Leadership", icon: leadershipIcon }
    ];
    return (
        <motion.div className="skills-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div className="skills-container">
                <h2>Technical Skills</h2>
                <div className="shelf">
                    {technicalSkills.map((skill, index) => (
                        <div className="skill-item" key={index}>
                            <img src={skill.image} alt={skill.name} />
                            <span className="skill-name">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <h2>Soft Skills</h2>
                <div className="shelf">
                    {softSkills.map((skill, index) => (
                        <div className="skill-item soft" key={index + technicalSkills.length}>
                            <img src={skill.icon} alt={skill.name} />
                            <span className="skill-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Skills;
