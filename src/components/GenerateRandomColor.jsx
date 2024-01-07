import React, { useState } from "react";
import "./style/RandomColor.css";

const GenerateRandomColor = () => {
  const generateRandomColors = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const [colors, setColors] = useState(Array(16).fill("#ccc"));

  const handleButtonClick = (buttonIndex) => {
    setColors((prevColors) => {
      const newColors = [ ...prevColors ]
      newColors[buttonIndex] = generateRandomColors();
      return newColors;
    });
  };

  return (
    <div>
      <h2>Random Color Generator</h2>
      <div className="button-grid">
        {colors.map((color, index) => {
            return (
                <button
                  key={index}
                  onMouseEnter={() => handleButtonClick(index)}
                  style={{ backgroundColor: color }}
                />
            )
        })}
      </div>
    </div>
  );
};

export default GenerateRandomColor;
