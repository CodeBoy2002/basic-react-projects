import React, { useState } from "react";

const ButtonHover = () => {
  const [buttonColors, setButtonColors] = useState({
    1: "black",
    2: "black",
    3: "black",
    4: "black",
    5: "black"
  });

  const handleColorChange = (buttonId)=> {
    setButtonColors((prevButton)=> {
        const newColor = { ...prevButton }

        //The button which we hover
        newColor[buttonId] = 'green'

        //The prev button
        const prevButtonId = buttonId === 1 ? 5 : buttonId - 1
        newColor[prevButtonId] = 'red'

        //The next button
        const nextButtonId = buttonId === 5 ? 1 : buttonId + 1
        newColor[nextButtonId] = 'blue'

        return newColor
    })
  }
  return (
    <>
      <div>Button Colors Changing</div>
      <div>
        {[1, 2, 3, 4, 5].map((buttonId) => (
          <button
            key={buttonId}
            onMouseEnter={() => handleColorChange(buttonId)}
            style={{ backgroundColor: buttonColors[buttonId], color: 'white' }}
          >
            {buttonId}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonHover;
