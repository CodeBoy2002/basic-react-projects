import React, { useState } from "react";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState({ name: "", prices: "", amounts: "" });

  const handleChange = (e) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (items.name.trim() !== "" && items.prices.trim() !== "") {
      const newItem = [
        ...cart,
        {
          id: Date.now(),
          title: items.name,
          price: items.prices,
          amount: items.amounts,
        },
      ];
      setCart(newItem);
      setItems({ name: "", prices: "", amounts: "" });
    }
  };

  const handleDelete = (itemId)=> {
    const newCart = cart.filter((cartItem)=> cartItem.id !== itemId)
    setCart(newCart)
  }

  const calculateTotalAmount = ()=> {
    return cart.reduce((total, item)=> total + item.price * item.amount, 0)
  }

  return (
    <div>
      <div
        style={{
          margin: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          width: "20rem",
        }}
      >
        <input
          type="text"
          placeholder="Enter Item"
          style={{
            padding: "1rem",
            borderRadius: "1rem",
            fontFamily: "unset",
            fontSize: "1rem",
          }}
          name="name"
          value={items.name}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter price"
          style={{
            padding: "1rem",
            borderRadius: "1rem",
            fontFamily: "unset",
            fontSize: "1rem",
          }}
          name="prices"
          value={items.prices}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter amount"
          style={{
            padding: "1rem",
            borderRadius: "1rem",
            fontFamily: "unset",
            fontSize: "1rem",
          }}
          name="amounts"
          value={items.amounts}
          onChange={handleChange}
        />
        <button
          className="btn btn-primary"
          onClick={handleSubmit}
          style={{ border: "1rem", backgroundColor: "gray" }}
        >
          Add Item
        </button>

        {/* Map over each of the item in the cart */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "auto",
              gap: "1rem",
              fontFamily: "serif",
              fontSize: "20px",
            }}
          >
            <p>Item name</p>
            <p>Item price</p>
            <p>Item amount</p>
          </div>
          
          <ul>
            {cart.map((cartItem)=> {
              const { id, title, price, amount } = cartItem
              return (
                <li key={id}>
                  {title} - ${price} x {amount}
                  <button onClick={()=> handleDelete(id)} style={{ backgroundColor: 'red', color: 'black', marginLeft: '5px' }} >Remove</button>
                </li>
              )
            })}
          </ul>
          <p>Total Cost: ${calculateTotalAmount()}</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
