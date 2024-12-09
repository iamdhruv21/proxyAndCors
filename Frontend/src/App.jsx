import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/api/jokes")
            .then(response => response.json())
            .then(data => setData(data))
            .catch((err) => {
                console.log(err);
            })
    }, []);

  return (
    <>
        <h1>Jokes</h1>
        <h2>Total Jokes: {data.length}</h2>

        {data.map((joke) => (
            <div key={joke.id}>
                <h2>{joke.title}</h2>
                <p>{joke.detail}</p>
            </div>
        ))}
    </>
  )
}

export default App
