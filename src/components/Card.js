import React from 'react';

import CardInfo from './CardInfo.js';

function Card(props){
    return(
        <div className="d-inline-block n-card" onClick={(e) => props.click(props.item)}> 
            <img className="n-card-image" src={props.item.imgSrc} alt={props.item.imgSrc}></img>
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
            {/* props.item.selected && */}
        </div>
    );
}

export default Card;