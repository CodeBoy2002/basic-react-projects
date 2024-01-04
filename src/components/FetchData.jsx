import React, { useState, useEffect } from 'react'
import './style/Card.css'

const url = 'https://jsonplaceholder.typicode.com/posts'

const FetchData = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    
    useEffect(()=> {
        const fetchData = async ()=> {
            try {
                const response = await fetch(url)
                const jsonData = await response.json()
                if(!response.ok) {
                    setLoading(false)
                    setError(true)
                    return
                }
                setData(jsonData)
                setLoading(false)
            } catch (error) {
                console.log(`Error fetching data ${error}`);
            }
        }
        fetchData()
    }, [])
    
    if(loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    if(error) {
        return (
            <h1>Error.. Not found</h1>
        )
    }

  return (
    <div>
        <h2>Displaying Data From the API</h2>
        <div className='card-container'>
            {data.map((item)=> {
                const { id, title, body } = item
                return (
                    <div key={id} className='card'>
                        <h2>{title}</h2>
                        <p>{body}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default FetchData