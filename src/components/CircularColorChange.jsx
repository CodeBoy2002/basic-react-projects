import React, { useState } from "react";

const CircularColorChange = () => {
  const colors = ["red", "green", "blue"];
  const [boxColor, setBoxColor] = useState({
    1: "red",
    2: "red",
    3: "red",
    4: "red",
    5: "red",
    6: "red",
  });

  const handleColorChange = (boxId) => {
    setBoxColor((prevBox) => {
      const newColors = { ...prevBox };

      const currentIndex = colors.indexOf(newColors[boxId]);

      const nextIndex = (currentIndex + 1) % colors.length;

      newColors[boxId] = colors[nextIndex];

      return newColors;
    });
  };

  return (
    <>
      <div>Circular Color Change</div>
      <div>
        {[1, 2, 3, 4, 5, 6].map((boxId) => (
          <button
            id={boxId}
            style={{ backgroundColor: boxColor[boxId] }}
            onMouseEnter={() => handleColorChange(boxId)}
          >
            {boxId}
          </button>
        ))}
      </div>
    </>
  );
};

export default CircularColorChange;
