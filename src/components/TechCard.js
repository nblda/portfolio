import React from 'react';

function TechCard(props){


    return(
        <div className="d-flex justify-content-center tech-card m-1">
            { props.tech && <p className="d-flex">{props.tech}</p> }
        </div>
        
    );
}

export default TechCard;