import React, { useState, useEffect } from 'react'
const url = 'https://randomuser.me/api/?results=5'
import './style/Card2.css'

const FetchData2 = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(()=> {
        const fetchData = async()=> {
            try {
                const response = await fetch(url);
                const jsonUser = await response.json()
                // console.log(jsonUser);
                if(!response.ok) {
                    setIsLoading(false)
                    setIsError(true)
                    return
                }
    
                setUsers(jsonUser.results)
                setIsLoading(false)
            } catch (error) {
                console.log(`Failed to fetch error ${error}`);
            }
        }

        fetchData()
    }, [])

    if(isLoading) {
        return (
            <h1>Loading...</h1>
        )
    }

    if(isError) {
        return (
            <h1>Error...404 NOT FOUND</h1>
        )
    }

  return (
    <div>
        <h2>User Info</h2>
        <div className="user-card-container">
        {users.map((user) => (
          <div key={user.login.uuid} className="user-card">
            <img src={user.picture.medium} alt={user.name.first} />
            <h3>{`${user.name.first} ${user.name.last}`}</h3>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FetchData2