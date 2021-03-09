import React,{useState} from 'react'
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    const [name,setName] = useState("");
    return (
        <div className="container">
            <h1> Welcome to our Card Game! </h1>
            <input style={{marginBottom:"20px"}}onChange={(e)=>setName(e.target.value)}
                placeholder="Your Name"/>
            <Link style={{ textDecoration: 'none',fontFamily:"monospace",fontSize:"24px"}} to={{pathname:"/game", name}}><br></br>Start the game!</Link>
        </div>
    )
}

export default Home
