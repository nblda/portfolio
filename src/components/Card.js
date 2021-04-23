import React from 'react';

import CardInfo from './CardInfo.js';

function Card(props){
    console.log(props.item.techs.html);
    return(
        <div className="d-flex flex-column n-card">
            <div className="d-flex justify-content-center" > 
                <img className="n-card-image" src={props.item.imgSrc} alt={props.item.imgSrc}></img>
                </div>
            { <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} techs={props.item.techs} /> }
            
        </div>
    );
}

export default Card; 