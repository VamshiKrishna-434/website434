
import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animations
import './Projects.css';

const Projects = () => {
    return (
        <motion.section id="projects" className="projects-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <section id="projects" className="projects-section">
                <h2 id="n">Projects</h2>
                <div className="project-container">
                    <div className="project">
                        <h3>Web-based Weather App</h3>
                        <p>Developed a web-based weather application using HTML, CSS, JavaScript, and the WeatherAPI.</p>
                        <p>Achieved accurate weather forecasts with real-time data integration, resulting in improved user engagement and satisfaction.</p>
                        <p><strong>Technology Stack:</strong> HTML, CSS, JavaScript, WeatherAPI</p>
                    </div>
                    <div className="project">
                        <h3>Tax Calculation Program using Data Structures</h3>
                        <p>Implemented a C program for tax calculations, leveraging various data structures.</p>
                        <p>Streamlined tax computation processes, resulting in improved efficiency and accuracy in financial calculations.</p>
                        <p><strong>Technology Stack:</strong> C, Data Structures</p>
                    </div>
                    <div className="project">
                        <h3>AI-based Chatbot</h3>
                        <p>Developed an AI-based chatbot using Python, integrating the ChatGPT3 engine and NLP modules.</p>
                        <p>Enhanced user interaction and engagement through natural language processing, leading to improved conversational experiences and customer satisfaction.</p>
                        <p><strong>Technology Stack:</strong> Python, ChatGPT3, NLP</p>
                    </div>
                    <div className="project">
                        <h3>IoT-based Smart Dustbin</h3>
                        <p>Developing an IoT-based Smart Dustbin using Raspberry Pi 3 and Python modules to detect fill levels, differentiate waste types, and send alerts via MQTT; project currently in progress with focus on sensor integration and real-time monitoring.</p>
                        <p><strong>Technology Stack:</strong> Raspberry Pi, Python, MQTT</p>
                    </div>
                    <div className="project">
                        <h3>React Personal Website</h3>
                        <p>Designed and developed a personal website using ReactJS for a dynamic and interactive user experience.</p>
                        <p><strong>Technology Stack:</strong> ReactJS</p>
                    </div>
                </div>
            </section>
            );
        </motion.section>
    );
}

export default Projects;
