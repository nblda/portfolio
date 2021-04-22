import React from 'react';

function CardInfo(props){

        return(
            <>
            { 
            <div className="d-flex flex-column n-card-info">
                <p className="d-flex justify-content-center n-card-title">{props.title}</p>
                <p className="d-flex justify-content-center n-card-sub-title">{props.subTitle}</p>
                {props.link && <a className="d-flex justify-content-center" href={props.link} target="_blank" rel="noopener noreferrer">View</a>} 
            </div>
            }
            </>
        );   
}

export default CardInfo;