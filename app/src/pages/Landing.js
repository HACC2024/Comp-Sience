
import React, { useState, useEffect } from 'react';
import NavbarComponent from '../components/NavbarComponent';
import FooterComponent from '../components/Footer';

const Landing = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 5000); // 5 seconds

        return () => clearTimeout(timer);
    }, []);

    const welcomeText = "Welcome to the Hawaii Keiki Museum Energy Playground!";

    return (
        <div className="landing-page">
            <div className={`intro ${showContent ? 'fade-out' : ''}`}>
                <h1>
                    {welcomeText.split('').map((char, index) => (
                        <span 
                            key={index} 
                            style={{ animationDelay: `${index * 0.07}s` }}
                            className="falling-letter"
                        >
                            {char === ' ' ? '\u00A0' : char} {/* Use non-breaking space for spaces */}
                        </span>
                    ))}
                </h1>
            </div>
            <div className={`main-content ${showContent ? 'fade-in' : ''}`}>
                <body style={{ backgroundColor: "grey" }}>
                    {/* Your main content here */}
                </body>
            </div>
        </div>
    );
};

export default Landing;