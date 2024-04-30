
import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animations
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Header.css';
import profileImage from './IMG_20231011_001243.jpg';
import resumePDF from './Res_VK.pdf';

const Header = () => {
    const openResumePDF = () => {
        window.open(resumePDF, '_blank');
    };

    const openLinkedinPage = () => {
        window.open('https://www.linkedin.com/in/vamshi-krishna-v-a1790b22a', '_blank');
    };

    return (
        <motion.header className="header" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <header className="header">
                <div className="profile">
                    <img src={profileImage} alt="Profile" className="profile-pic" />
                </div>
                <div className="name">V.Vamshi Krishna</div>
                <div className="navigation">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                        {/* Add onClick event to Resume button */}
                        <li><button className="resume-btn" onClick={openResumePDF}>Resume</button></li>
                        {/* Add onClick event to LinkedIn icon */}
                        <li><FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" onClick={openLinkedinPage} size='lg' /></li>
                    </ul>
                </div>
            </header>
        </motion.header>
    );
}

export default Header;
