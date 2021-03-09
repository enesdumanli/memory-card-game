import React from 'react';
import {withRouter} from 'react-router-dom';

import gretaApproves from './../../images/approve.jpg'
import disApprove from './../../images/disapprove.jpg'

const Result = (props) => {
    const score = props.location.score+0.5;
    const handleResult = score <= 12 ?`Congrats! You succesfully matched all cards in ${score} try` : 
    `Not good! You matched all cards in ${score} try`
    const winningImage = score <= 12 ? gretaApproves : disApprove;
    return (
        <div>
            <h2>{handleResult}</h2>
            <img style = {{height:"427px",width:"600px"}} src = {winningImage}/>
            <h2>#SaveThePlanet</h2>

        </div>
    )
}

export default withRouter(Result);
