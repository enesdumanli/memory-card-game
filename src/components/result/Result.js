import React from 'react';
import {withRouter} from 'react-router-dom';

const Result = (props) => {
    console.warn(props);
    return (
        <div>
            "{props.location.score} denemede tüm kartları eşleştirdiniz."
        </div>
    )
}

export default withRouter(Result);
