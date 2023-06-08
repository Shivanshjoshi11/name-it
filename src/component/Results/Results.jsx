import React from 'react';
import './Results.css'
import NameCard from '../NameCard/NameCard';
import uuidv4 from 'uuidv4';
// const { uuid } = require('uuidv4');

const ResultContainer = ({suggestedNames}) => {
    const suggestedNameJsx = suggestedNames && suggestedNames.map(suggestedName => {
        return <NameCard key={uuidv4()} suggestedName={suggestedName}/>
    });

    return(
        <div className='results-container'>
            {suggestedNameJsx}
        </div>
    )
}

export default ResultContainer;