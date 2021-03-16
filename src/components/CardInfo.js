import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../styles.css';

function CardInfo(props){

    const style = useSpring({opacity: 1, from: {opacity:0}});

    console.log(props.changed);

    if(props.changed==="true"){
        return(
            <animated.div className="n-card-info" style={style}>
            <p className="n-card-title">{props.title}</p>
            <p className="n-card-sub-title">{props.subTitle}</p>
            {props.link && <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>} 
        </animated.div>
        );
    } else {
        return(
            <>
            { props.item.selected &&
            <animated.div className="n-card-info" style={style}>
                <p className="n-card-title">{props.title}</p>
                <p className="n-card-sub-title">{props.subTitle}</p>
                {props.link && <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>} 
            </animated.div>
            }
            </>
        );
    }

    
}

export default CardInfo;