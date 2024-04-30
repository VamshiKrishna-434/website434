import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animations
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
    const handleEmailClick = () => {
        const emailAddress = 'vamshikrishna43496@gmail.com';
        const mailtoLink = 'mailto:' + encodeURIComponent(emailAddress);
        window.location.href = mailtoLink;
    };

    const handleWhatsappClick = () => {
        window.open('https://api.whatsapp.com/send?phone=8618690008', '_blank');
    };

    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/vamshikrishna4_3_4?igsh=MXF1ajhyOXpvdmg4Nw==', '_blank');
    };

    return (
        <motion.div className="contact-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h2>Contact Me</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                {/* Form elements */}
            </form>
            <button id="emailBtn" onClick={handleEmailClick}>Send Email</button>

            <div>
                <div className="social-icons">
                    <ul>
                        <motion.li whileHover={{ scale: 1.2 }}>
                            <a href="https://www.linkedin.com/in/vamshi-krishna-v-a1790b22a" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size='3x' />
                            </a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.2 }}>
                            <FontAwesomeIcon icon={faWhatsapp} onClick={handleWhatsappClick} size='3x' color='darkgreen' />
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.2 }}>
                            <FontAwesomeIcon icon={faInstagram} onClick={handleInstagramClick} size='3x' color='pink' />
                        </motion.li>
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}

export default Contact;
