import React, { useState } from "react";

const HoverNeighbor = () => {
  const colorArray = ["red", "green", "blue"];
  const [colors, setColors] = useState({
    1: "red",
    2: "red",
    3: "red",
    4: "red",
    5: "red",
  });

  //   const handleColorChange = (buttonId) => {
  //     setColors((prevColor) => {
  //       const newColor = { ...prevColor };

  //       // FOR THE NEXT COLOR
  //       const nextColorId = buttonId === 5 ? 1 : buttonId + 1;
  //       newColor[nextColorId] = "red";

  //       // FOR THE BUTTON WE HOVER
  //       newColor[buttonId] = "green";

  //       //FOR THE PREVIOUS BUTTON
  //       const prevColorId = buttonId === 1 ? 5 : buttonId - 1;
  //       newColor[prevColorId] = "blue";

  //       return newColor;
  //     });
  //   };

  const handleColorCycle = (buttonId) => {
    setColors((prevColor) => {
      const newColor = { ...prevColor };

      const currentIndex = colorArray.indexOf(colors[buttonId]);
      const nextColorIndex = (currentIndex + 1) % colorArray.length;

      newColor[buttonId] = colorArray[nextColorIndex];

      return newColor;
    });
  };

  return (
    <div>
      <h2>Changing color when hover on a Single Button</h2>
      <div>
        {[1, 2, 3, 4, 5].map((buttonId) => (
          <button
            key={buttonId}
            onMouseEnter={() => handleColorCycle(buttonId)}
            style={{ backgroundColor: colors[buttonId], color: "white" }}
          >
            {buttonId}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HoverNeighbor;
