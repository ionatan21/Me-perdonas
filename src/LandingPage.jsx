// src/components/LandingPage.jsx
import React, { useState, useEffect } from "react";
import "./LandingPage.css";

const messages = [
  "tengo algo importante que decir... 😔",
  "Lo siento mucho 😭",
  "No volverá a pasar 🙏",
  "¿Me perdonas 🥺?",
];

const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => {
        if (prevIndex < messages.length - 1) {
          return prevIndex + 1;
        } else {
          clearInterval(interval);
          return prevIndex;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleYesClick = () => {
    setShowPopup(true);
  };

  const handleNoClick = () => {
    setNoClickCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="landing-page">
      {messages[currentMessageIndex] && (
        <h1 className={`title${currentMessageIndex}`}>
          {messages[currentMessageIndex]}
        </h1>
      )}

      {currentMessageIndex === messages.length - 1 ? (
        <div className="buttons">
          <button
            className="yes-button"
            style={{ transform: `scale(${1 + noClickCount * 0.1})` }}
            onClick={handleYesClick}
          >
            Sí
          </button>
          <button className="no-button" onClick={handleNoClick}>
            No
          </button>
        </div>
      ) : null}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>¡Sabía que lo harías! tkm ❤️</h2>
            <img
              src="https://res.cloudinary.com/ds8cp2nxp/image/upload/v1719686169/yufla2dmzsta1_z86rfi.gif"
              alt="Background"
            />
          </div>
        </div>
      )}

      <footer className="footer ">
        <strong className="text-white">Hecho por Jonatan</strong>
      </footer>
    </div>
  );
};

export default LandingPage;
