import React, { useState, useEffect } from 'react';
import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';

const Landing = () => {
    const [showContent, setShowContent] = useState(false);
    const [showIntro, setShowIntro] = useState(false);

    useEffect(() => {
        const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');

        if (!hasSeenIntro) {
            setShowIntro(true);
            const timer = setTimeout(() => {
                setShowContent(true);
                setShowIntro(false);
                sessionStorage.setItem('hasSeenIntro', 'true');
            }, 5000); // 5 seconds

            return () => clearTimeout(timer);
        } else {
            setShowContent(true);
        }
    }, []);

    const welcomeText = "Welcome to the Hawaii Keiki Museum Energy Playground!";

    return (
        <div className="landing-page">
            {showIntro && (
                <div className={`intro ${showContent ? 'fade-out' : ''}`}>
                    <h1>
                        {welcomeText.split('').map((char, index) => (
                            <span 
                                key={index} 
                                style={{ animationDelay: `${index * 0.07}s` }}
                                className="falling-letter"
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </h1>
                </div>
            )}
            <div className={`main-content ${showContent ? 'fade-in' : ''}`}>
                <div style={{ backgroundColor: "grey" }}>
                    {/* Your main content here */}
                </div>
            </div>
        </div>
    );
};

export default Landing;