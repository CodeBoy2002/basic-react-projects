import React, { useState } from "react";

const ToggleItems = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", isActive: false },
    { id: 2, name: "Item 2", isActive: false },
    { id: 3, name: "Item 3", isActive: false },
    { id: 4, name: "Item 4", isActive: false },
    { id: 5, name: "Item 5", isActive: false },
  ]);

  const handleColorChange = (itemId)=> {
    setItems((prevItem)=> 
        prevItem.map((item)=> item.id === itemId ? { ...item, isActive: !item.isActive } : item)
    )
  }

  return (
    <div>
      <h2>Toggle Items</h2>
      <ul>
        {items.map((item) => {
          const { id, name, isActive } = item;
          return (
            <div
              key={id}
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "25px",
                padding: "10px",
                gap: "20px",
              }}
            >
              <li style={{ marginTop: "40px" }}>{`${name}`}</li>
              <button
                onClick={() => handleColorChange(id)}
                style={{ backgroundColor: isActive ? 'green' : 'red' }}
              >
                {isActive}
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ToggleItems;
