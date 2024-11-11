import React, { useState, useEffect } from 'react';
import FooterComponent from '../components/Footer';

const Landing = () => {
    const [introOpacity, setIntroOpacity] = useState(1);
    const [mainContentOpacity, setMainContentOpacity] = useState(0);
    const [showIntro, setShowIntro] = useState(false);

    useEffect(() => {
        const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');

        if (!hasSeenIntro) {
            setShowIntro(true);
            const introTimer = setTimeout(() => {
                // Start fading out the intro and fading in the main content
                let opacity = 1;
                const fadeInterval = setInterval(() => {
                    opacity -= 0.02;
                    setIntroOpacity(Math.max(opacity, 0));
                    setMainContentOpacity(Math.min(1 - opacity, 1));
                    
                    if (opacity <= 0) {
                        clearInterval(fadeInterval);
                        setShowIntro(false);
                        sessionStorage.setItem('hasSeenIntro', 'true');
                    }
                }, 20); 
            }, 5000); 

            return () => clearTimeout(introTimer);
        } else {
            setMainContentOpacity(1);
        }
    }, []);

    const welcomeText = "Welcome to the Hawaii Keiki Museum Energy Playground!";

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            {showIntro && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'black',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: introOpacity,
                    zIndex: 10,
                    transition: 'opacity 1s ease-out',
                }}>
                    <h1 style={{ color: 'white', fontFamily: "'Patrick Hand', cursive" }}>
                        {welcomeText.split('').map((char, index) => (
                            <span 
                                key={index} 
                                style={{ 
                                    display: 'inline-block',
                                    opacity: 0,
                                    animation: `fallDown 0.5s forwards ${index * 0.07}s`,
                                }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </h1>
                </div>
            )}
            <div style={{ 
                opacity: mainContentOpacity,
                transition: 'opacity 1s ease-in',
            }}>
                <div style={{ backgroundColor: "grey" }}>
                </div>
            </div>
            <style jsx>{`
                @keyframes fallDown {
                    0% { transform: translateY(-50px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default Landing;