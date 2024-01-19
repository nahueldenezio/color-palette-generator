import React, { useState, useEffect } from 'react';
import randomcolor from 'randomcolor';
import copy from 'copy-to-clipboard';

const ColorPalette = () => {
  const [colors, setColors] = useState([]);
  const [hoveredColor, setHoveredColor] = useState(null);

  const generatePalette = () => {
    const newColors = randomcolor({ count: 5 });
    setColors(newColors);
  };

  const handleColorClick = (color) => {
    copy(color);
  };

  useEffect(() => {
    // Llama a generatePalette al montar el componente
    generatePalette();
  }, []); // El segundo argumento [] significa que este efecto se ejecutará solo al montar el componente

  return (
    <div>
      <button onClick={generatePalette}>Generate Palette</button>
      <div className="color-palette-container">
        {colors.map((color, index) => (
          <div
            className='color-box'
            key={index}
            style={{
              backgroundColor: color,
              width: '100px',
              height: '100px',
              margin: '5px',
              cursor: 'pointer',
              position: 'relative',
            }}
            onClick={() => handleColorClick(color)}
            onMouseEnter={() => setHoveredColor(color)}
            onMouseLeave={() => setHoveredColor(null)}
          >
            {hoveredColor === color && (
              <span
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  padding: '10px',
                  color: '#fff',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  borderRadius: '5px',
                  display: 'inline-block',
                }}
              >
                {color}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;