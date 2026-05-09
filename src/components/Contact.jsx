import { useState } from 'react';
import { motion } from 'framer-motion';

import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiGithub,
    FiLinkedin,
    FiTwitter,
    FiSend,
} from 'react-icons/fi';

import './Contact.css';

const Contact = () => {
    const [result, setResult] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        setResult('Sending...');

        const formData = new FormData(event.target);

        formData.append(
            'access_key',
            '2bf284c8-50e6-417e-83c7-f6baba9ed2ac'
        );

        const response = await fetch(
            'https://api.web3forms.com/submit',
            {
                method: 'POST',
                body: formData,
            }
        );

        const data = await response.json();

        if (data.success) {
            setResult('Message Sent Successfully!');
            event.target.reset();

            setTimeout(() => {
                setResult('');
            }, 5000);
        } else {
            console.log('Error', data);

            setResult(data.message);
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="section-header">
                <p className="section-subtitle">
                    Get In Touch
                </p>

                <h2 className="section-title">
                    Contact Me
                </h2>

                <p className="section-desc">
                    Have a project in mind or want to
                    collaborate? Let's create something
                    amazing together.
                </p>
            </div>

            <div className="contact-container">
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="contact-heading">
                        Let's Work <br />

                        <span className="gradient-text">
                            Together
                        </span>
                    </h3>

                    <p className="contact-text">
                        Whether you have a project in mind,
                        want to collaborate, or just want
                        to say hello — I'd love to hear
                        from you!
                    </p>

                    <div className="info-cards">
                        <div className="info-card glass-card">
                            <div className="info-icon">
                                <FiMail />
                            </div>

                            <div>
                                <p className="info-label">
                                    EMAIL
                                </p>

                                <p className="info-value">
                                    pradipgarai2026@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="info-card glass-card">
                            <div className="info-icon">
                                <FiPhone />
                            </div>

                            <div>
                                <p className="info-label">
                                    PHONE
                                </p>

                                <p className="info-value">
                                    +91 7980734036
                                </p>
                            </div>
                        </div>

                        <div className="info-card glass-card">
                            <div className="info-icon">
                                <FiMapPin />
                            </div>

                            <div>
                                <p className="info-label">
                                    LOCATION
                                </p>

                                <p className="info-value">
                                    India
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-social">
                        <p>Follow me on social media</p>

                        <div className="social-links">
                            <a
                                href="https://github.com/Pradip-Garai"
                                target="_blank"
                                rel="noreferrer"
                                className="social-icon"
                            >
                                <FiGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/pradip-garai-1190232a7/"
                                target="_blank"
                                rel="noreferrer"
                                className="social-icon"
                            >
                                <FiLinkedin />
                            </a>

                            <a
                                href="https://x.com/Pradip_Garai12"
                                target="_blank"
                                rel="noreferrer"
                                className="social-icon"
                            >
                                <FiTwitter />
                            </a>

                            <a
                                href="mailto:pradipgarai2026@gmail.com"
                                className="social-icon"
                            >
                                <FiMail />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="contact-form-container glass-card"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <form
                        className="contact-form"
                        onSubmit={onSubmit}
                    >
                        <div className="form-group-row">
                            <div className="form-group">
                                <label>Your Name</label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Your Email</label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Subject</label>

                            <input
                                type="text"
                                name="subject"
                                placeholder="Project Collaboration"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Message</label>

                            <textarea
                                name="message"
                                placeholder="Tell me about your project..."
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary submit-btn"
                        >
                            Send Message <FiSend />
                        </button>

                        <span
                            style={{
                                display: 'block',
                                marginTop: '10px',
                                textAlign: 'center',
                                color: 'var(--cyan-accent)',
                            }}
                        >
                            {result}
                        </span>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;