import React,{useState} from 'react'
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    const [name,setName] = useState("");
    return (
        <div>
            <h1>
                Welcome to our Memory Game!
            </h1>
            <input onChange={(e)=>setName(e.target.value)}
                placeholder="Your Name"/>
            <Link to={{pathname:"/game", name}}>Start the game !</Link>
        </div>
    )
}

export default Home
