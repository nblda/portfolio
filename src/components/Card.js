// import React from 'react';
// import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import '../styles.css'
import CardInfo from './CardInfo.js';



function Card(props){
    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80, }
    });
    // const bgImage = {
    //     background: `url(${image1})`,
    //   } 
    // const backgroundProjects = {
    //     background-image: {props.item.imgSrc}
    // };

// console.log(props.item.imgSrc);

    return(
        // <div className="d-inline-block n-card" onClick={(e) => props.click(props.item)}> 
        //     <img className="n-card-image" src={props.item.imgSrc} alt={props.item.imgSrc}></img>
        //     { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
        //     {/* props.item.selected && */}
        // </div>

        <div className="d-flex justify-content-around" onClick={() => set(state => !state)}>
            <a.div class="c back" style={{  backgroundImage: `url(${props.item.imgSrc})`, opacity: opacity.interpolate(o => 1 - o), transform }}>
            </a.div>
            <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`)}} > 
            { flipped && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
            </a.div>
        </div>

    );
}

export default Card;