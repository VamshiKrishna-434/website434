import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animations
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './About.css';

const About = () => {
    return (
        <motion.section id="about" className="about-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div className="about-heading">
                <h2>About Me</h2>
            </div>
            <motion.div className="about-content" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
                <p>I'm currently a Computer Science Engineering student in my third year at BMS Institute of Technology and Management (BMSIT). Passionate about technology and its applications, I'm constantly exploring new concepts and pushing the boundaries of what I can achieve. With a strong foundation in computer science principles, I'm eager to delve deeper into areas such as software development, artificial intelligence, and data science.<br />
                    Outside of academics, I enjoy taking part in coding competitions, collaborating on projects with peers, and staying up-to-date with the latest developments in the tech industry. I'm also an active member of various tech communities and strive to contribute positively to the field.<br />
                    As a passionate Student Developer and HackerRank Enthusiast, I am proficient in Java, C, C++, C#, and React. I am skilled in both Windows and Linux environments. Feel free to connect with me on
                    <a href="https://www.linkedin.com/in/vamshi-krishna-v-a1790b22a/" className="linkedin-link">
                        LinkedIn
                    </a>
                    to learn more about my professional journey and interests.
                </p>
            </motion.div>
        </motion.section>
    );
}

export default About;
