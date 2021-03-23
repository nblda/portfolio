// import React from 'react';
// import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import '../styles.css'
// import Col from 'react-bootstrap/Col';

// import AboutCardInfo from './AboutCarInfo.js';



function AboutCard(props){
    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80, }
    });

    return(
            <div className="d-flex justify-content-around test" onClick={() => set(state => !state)}>
                <a.div class="c back" style={{  backgroundImage: `url(${props.item.imgSrc})`, opacity: opacity.interpolate(o => 1 - o), transform }}>
                </a.div>
                <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`)}} > 
                    <div className="d-flex flex-column n-card-info">
                        <p className="d-flex justify-content-center n-card-title">{props.item.title}</p>
                        <p className="d-flex justify-content-center n-card-sub-title">{props.item.subTitle}</p>
                        {props.item.link && <a className="d-flex justify-content-center" href={props.item.link} target="_blank" rel="noopener noreferrer">View</a>} 
                    </div>
                </a.div>
            </div>
    );
}

export default AboutCard;