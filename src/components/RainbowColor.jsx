import React, { useState } from "react";

const RainbowColor = () => {
    const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
  const [rainbowColor, setRainbowColor] = useState({
    1: "red",
    2: "orange",
    3: "yellow",
    4: "green",
    5: "blue",
    6: "indigo",
    7: "violet",
  });

  const handleRainbowColorChange = (colorId)=> {
    setRainbowColor((prevColor)=> {
        const newColor = { ...prevColor }

        const currentIndex = rainbowColors.indexOf(newColor[colorId])
        const nextIndex = (currentIndex + 1) % rainbowColors.length
        
        newColor[colorId] = rainbowColors[nextIndex]
        return newColor
    })
  }
  return (
    <>
      <div>Changing The RainbowColors</div>
      <div>
        {[1, 2, 3, 4, 5, 6, 7].map((colorId) => (
          <button
            id={colorId}
            onMouseEnter={() => handleRainbowColorChange(colorId)}
            style={{ backgroundColor: rainbowColor[colorId] }}
          >
            {colorId}
          </button>
        ))}
      </div>
    </>
  );
};

export default RainbowColor;
