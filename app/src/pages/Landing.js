import React, { useState, useEffect } from 'react';
import FooterComponent from '../components/Footer';

const Landing = () => {
  const [introOpacity, setIntroOpacity] = useState(1);
  const [mainContentOpacity, setMainContentOpacity] = useState(0);
  const [showIntro, setShowIntro] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (!hasSeenIntro) {
      setShowIntro(true);
      const introTimer = setTimeout(() => {
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

  const sections = {
    about: {
      title: "About the Challenge",
      content: "Step into the future of energy awareness at the Hawaii Keiki Museum's Energy Usage Challenge! Our innovative Energy Playhouse is designed to spark curiosity and ignite passion for energy conservation in young minds. Through interactive displays and real-time energy monitoring, keiki will discover the power of their everyday choices in creating a sustainable Hawaii."
    },
    objective: {
      title: "Objective",
      content: "Our mission is to transform energy education into a hands-on adventure. We aim to empower Hawaii's keiki with the knowledge to become energy-conscious citizens of tomorrow. By interacting with our Energy Playhouse, children will visualize energy consumption, master conservation techniques, and explore Hawaii's unique energy landscape. Our goal is to inspire a generation that will lead Hawaii towards a greener, more sustainable future."
    },
    features: {
      title: "Key Features",
      content: [
        "Interactive Energy Meter: Watch in real-time how different appliances and activities impact energy consumption. ",
        "Future Feature - Appliance Challenge: Engage in an exciting game to guess which household items use the most energy. ",
        "Future Feature - Hawaii Energy Mix Display: Explore an interactive map showcasing Hawaii's diverse energy sources, from solar to wind power. ",
        "Future Feature - Future Energy Innovator's Corner: Design your own energy-efficient home using our touch-screen modeling station. ",
        "Future Feature - Energy Savings Leaderboard: Compete with friends to see who can save the most energy in simulated daily scenarios. "
      ]
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'black', display: 'flex', flexDirection: 'column', color: 'white', fontFamily: "'Patrick Hand', cursive" }}>
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
      <div style={{ opacity: mainContentOpacity, transition: 'opacity 1s ease-in', flex: 1, display: 'flex', flexDirection: 'column', padding: '20px' }}>
        <nav style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          {Object.keys(sections).map(section => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              style={{
                margin: '0 10px',
                padding: '10px 20px',
                backgroundColor: activeSection === section ? '#4CAF50' : 'transparent',
                border: '2px solid #4CAF50',
                color: 'white',
                cursor: 'pointer',
                borderRadius: '5px',
                transition: 'background-color 0.3s'
              }}
            >
              {sections[section].title}
            </button>
          ))}
        </nav>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ backgroundColor: "rgba(255,255,255,0.1)", padding: '20px', borderRadius: '10px', marginBottom: '20px', maxHeight: '200px', overflowY: 'auto' }}>
            <h2>{sections[activeSection].title}</h2>
            {Array.isArray(sections[activeSection].content) ? (
              <ul>
                {sections[activeSection].content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{sections[activeSection].content}</p>
            )}
          </div>
          <div className="animations-container">
            <div className="windmill">
              <div className="tower"></div>
              <div className="nacelle"></div>
              <div className="rotor">
                <div className="blade blade1"></div>
                <div className="blade blade2"></div>
                <div className="blade blade3"></div>
              </div>
            </div>
            <div className="sun">
              <div className="sun-ray"></div>
              <div className="sun-ray"></div>
              <div className="sun-ray"></div>
              <div className="sun-ray"></div>
              <div className="sun-ray diagonal"></div>
              <div className="sun-ray diagonal"></div>
              <div className="sun-ray diagonal"></div>
              <div className="sun-ray diagonal"></div>
            </div>
            <div className="battery">
              <div className="battery-level"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fallDown {
          0% { transform: translateY(-50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animations-container {
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
          height: 280px;
          margin-top: auto;
          padding-bottom: 30px;
        }
        .windmill {
          position: relative;
          width: 100px;
          height: 200px;
        }
        .tower {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 10px;
          height: 150px;
          background-color: #888;
          transform: translateX(-50%);
        }
        .nacelle {
          position: absolute;
          top: 45px;
          left: 50%;
          width: 20px;
          height: 10px;
          background-color: #555;
          transform: translateX(-50%);
        }
        .rotor {
          position: absolute;
          top: 40px;
          left: 50%;
          width: 80px;
          height: 80px;
          animation: rotate 5s linear infinite;
          transform-origin: center top;
        }
        .blade {
          position: absolute;
          top: 0;
          left: 50%;
          width: 5px;
          height: 40px;
          background-color: #fff;
          transform-origin: center top;
        }
        .blade1 { transform: translateX(-50%) rotate(0deg); }
        .blade2 { transform: translateX(-50%) rotate(120deg); }
        .blade3 { transform: translateX(-50%) rotate(240deg); }
        @keyframes rotate {
          0% { transform: translateX(-50%) rotate(0deg); }
          100% { transform: translateX(-50%) rotate(360deg); }
        }
        .sun {
          width: 80px;
          height: 80px;
          background-color: #FFD700;
          border-radius: 50%;
          position: relative;
          animation: pulse 2s ease-in-out infinite;
          top: -30vh; /* Adjusted to move the sun higher */
        }
        .sun-ray {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 2px;
          height: 20px;
          background-color: #FFD700;
        }
        .sun-ray:nth-child(1) { transform: translate(-50%, -50%) rotate(0deg) translateY(-50px); }
        .sun-ray:nth-child(2) { transform: translate(-50%, -50%) rotate(90deg) translateY(-50px); }
        .sun-ray:nth-child(3) { transform: translate(-50%, -50%) rotate(180deg) translateY(-50px); }
        .sun-ray:nth-child(4) { transform: translate(-50%, -50%) rotate(270deg) translateY(-50px); }
        .sun-ray.diagonal:nth-child(5) { transform: translate(-50%, -50%) rotate(45deg) translateY(-50px); }
        .sun-ray.diagonal:nth-child(6) { transform: translate(-50%, -50%) rotate(135deg) translateY(-50px); }
        .sun-ray.diagonal:nth-child(7) { transform: translate(-50%, -50%) rotate(225deg) translateY(-50px); }
        .sun-ray.diagonal:nth-child(8) { transform: translate(-50%, -50%) rotate(315deg) translateY(-50px); }
        @keyframes pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 20px #FFD700; }
          50% { transform: scale(1.1); box-shadow: 0 0 40px #FFD700; }
        }
        .battery {
          width: 60px;
          height: 100px;
          border: 5px solid #fff;
          border-radius: 10px;
          position: relative;
          overflow: hidden;
        }
        .battery-level {
          position: absolute;
          bottom: 0;
          width: 100%;
          background-color: #4CAF50;
          animation: charge 4s ease-in-out infinite;
        }
        @keyframes charge {
          0%, 100% { height: 20%; }
          50% { height: 80%; }
        }
      `}</style>
    </div>
  );
};

export default Landing;