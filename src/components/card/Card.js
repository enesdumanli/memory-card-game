import React from 'react'
import back from './../../images/arka.png';
import './Card.scss'

const Card = ({item,onClickHandler}) => {
    return (
        <div className="card">
           <img onClick={onClickHandler}  className= {item.open ? "card-open":"card-closed"}src = {item.open ? item.image : back}/>
        </div>
    )
}

export default Card
