import React, { useState, useEffect } from "react";
const url = "https://jsonplaceholder.typicode.com/posts";
import "./style/FetchDataHover.css";

const FetchAndRandom = () => {
  const [users, setUsers] = useState([]);
  const [cardColor, setCardColor] = useState([])
  const [visibleCards, setVisibleCards] = useState(5)

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const res = await fetch(url);
        const jsonData = await res.json();
        // console.log(jsonData);
        if (!res.ok) {
          setIsLoading(false);
          setIsError(true);
          return;
        }
        setUsers(jsonData);
        setCardColor(Array(users.length).fill('#FFFFFF'))
        setIsLoading(false);
      } catch (error) {
        console.log(`Failed to fetch the error:- ${error}`);
      }
    };

    fetchingData();
  }, []);

  const handleRandomColor = (userId)=> {
    setCardColor((prevColor)=> {
        const newColor = [ ...prevColor ]
        newColor[userId] = generateRandomColor()
        return newColor
    })
  }

  const generateRandomColor = ()=> {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  const handleShowMore = ()=> {
    setVisibleCards((prevCard)=> prevCard + 5)
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error... 404 NOT FOUND</h1>;
  }
  return (
    <div>
      <h1 style={{ fontFamily: "cursive" }}>
        Fetching User Details and Making Hover Effects
      </h1>
      <div className="card-container">
        {users.slice(0, visibleCards).map((user, index) => {
          const { id, title, body } = user;
          return (
            <div
              key={id}
              className="card"
              onMouseEnter={() => handleRandomColor(id)}
              style={{ backgroundColor: cardColor[id] }}
            >
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          );
        })}
        {visibleCards < users.length && (<button onClick={handleShowMore}>Show More</button>)}
      </div>
    </div>
  );
};

export default FetchAndRandom;
