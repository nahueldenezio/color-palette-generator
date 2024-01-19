import React, { useState } from 'react';
import axios from 'axios';
import copy from 'copy-to-clipboard';
import { FaSpinner } from 'react-icons/fa'; 

const Header = () => {
  const [luckyColor, setColorOfTheDay] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchColorOfTheDay = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://www.thecolorapi.com/random');
      setColorOfTheDay(response.data.hex.value);
    } catch (error) {
      console.error('Error fetching color:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleColorClick = (color) => {
    copy(color);
  };

  const handleColorFindClick = () => {
    fetchColorOfTheDay();
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact-section');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    // Recargar la página
    window.location.reload();
  };

  return (
    <header>
      <nav>
        <button onClick={handleHomeClick}>Home</button>
        <button onClick={handleColorFindClick}>
          {loading ? (
            <span>
              <FaSpinner className="spinner" />
            </span>
          ) : (
            'Lucky Color'
          )}
        </button>
        <button onClick={handleContactClick}>Contact</button>
      </nav>
      {luckyColor && (
        <div>
          <p>Your lucky color is: {luckyColor}</p>
          <div
            style={{
              width: '50px',
              height: '50px',
              margin: '0 auto',
              backgroundColor: luckyColor,
            }}
            onClick={() => handleColorClick(luckyColor)}
          ></div>
        </div>
      )}
    </header>
  );
};

export default Header;
