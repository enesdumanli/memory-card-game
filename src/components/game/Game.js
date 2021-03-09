import React,{ useState,useEffect } from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import { shuffle } from 'lodash'

import Card from './../card/Card'

import './Game.scss'

import dunya from './../../images/dunya.png';
import geridonusum from './../../images/geridonusum.png';
import kadin1 from './../../images/kadin1.png';
import kadin2 from './../../images/kadin2.png';
import pervane from './../../images/pervane.png';
import sise from './../../images/sise.png';


const Game = ({ location: { name } }) => {

    const [cards] = useState([
        { name: 'dunya', open: false, id: 1, image: dunya, isCompleted: false },
        { name: 'geridonusum', open: false, id: 2, image: geridonusum, isCompleted: false },
        { name: 'kadin1', open: false, id: 3, image: kadin1, isCompleted: false },
        { name: 'kadin2', open: false, id: 4, image: kadin2, isCompleted: false },
        { name: 'pervane', open: false, id: 5, image: pervane, isCompleted: false },
        { name: 'sise', open: false, id: 6, image: sise, isCompleted: false },
        { name: 'dunya', open: false, id: 7, image: dunya, isCompleted: false },
        { name: 'geridonusum', open: false, id: 8, image: geridonusum, isCompleted: false },
        { name: 'kadin1', open: false, id: 9, image: kadin1, isCompleted: false },
        { name: 'kadin2', open: false, id: 10, image: kadin2, isCompleted: false },
        { name: 'pervane', open: false, id: 11, image: pervane, isCompleted: false },
        { name: 'sise', open: false, id: 12, image: sise, isCompleted: false }
    ]);

    const [shuffledCards,setShuffledCards] = useState([])
    const [matchedCards,setMatchedCards] = useState([])
    const [flippedCards,setFlippedCards] = useState([])
    const [score,setScore] = useState(0)

    const history = useHistory();
    
    useEffect(()=>{
        setShuffledCards(shuffle(cards));
    },[])

    let checkCards = () =>{
        if(flippedCards[0].id===flippedCards[1].id){
            shuffledCards.find(item => item.id === flippedCards[0].id).open = false;
        }
        else if(shuffledCards.find(item => item.id === flippedCards[0].id).isCompleted === true || shuffledCards.find(item => item.id === flippedCards[1].id).isCompleted === true){
            if(shuffledCards.find(item => item.id === flippedCards[0].id).isCompleted === true ){
                shuffledCards.find(item => item.id === flippedCards[0].id).open = true;
                shuffledCards.find(item => item.id === flippedCards[1].id).open = false;
            }
            if(shuffledCards.find(item => item.id === flippedCards[1].id).isCompleted === true){
                shuffledCards.find(item => item.id === flippedCards[1].id).open = true;
                shuffledCards.find(item => item.id === flippedCards[0].id).open = false;
            }
            if(shuffledCards.find(item => item.id === flippedCards[0].id).isCompleted === true && shuffledCards.find(item => item.id === flippedCards[1].id).isCompleted === true){
                shuffledCards.find(item => item.id === flippedCards[1].id).open = true;
                shuffledCards.find(item => item.id === flippedCards[0].id).open = true;
            }
        }
        else if(flippedCards[0].name===flippedCards[1].name){
            shuffledCards.find(item => item.id === flippedCards[0].id).isCompleted = true;
            shuffledCards.find(item => item.id === flippedCards[1].id).isCompleted = true;
            setMatchedCards([...matchedCards, flippedCards[0].id, flippedCards[1].id]);

            if(matchedCards.length===10){
                history.push({
                    pathname:'/result',
                    score:score,
                })
            }
        }    
        else{
            shuffledCards.find(item => item.id === flippedCards[0].id).open = false;
            shuffledCards.find(item => item.id === flippedCards[1].id).open = false;
        }
        setFlippedCards([]);
    }

    let onClickHandler = (card,index) => {
        
        setScore(score+0.5)
        let flippedCardsShallowCopy = flippedCards;
        shuffledCards[index].open=true
        flippedCardsShallowCopy.push(card);
        setFlippedCards(flippedCardsShallowCopy)// spread operator not working quite well here thats why we create copy

        if(flippedCards.length===2){
            setTimeout(()=>{
                checkCards()},500)
            }
    }        
    const varName = (name !== "" ? name : "secret visitor");
    return (
    <>  
        <h2 style={{fontFamily:"sans-serif"}}>Nice to see you {varName}!</h2>
        <div className="card-container">
            {shuffledCards.map((card,index)=>
                <Card item={card}
                    key={index}
                    onClickHandler={()=> flippedCards.length === 2 ? null : onClickHandler(card,index)}
                />
            )}
        </div>
    </>
    )
}


export default withRouter(Game);