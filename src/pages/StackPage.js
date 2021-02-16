import React from 'react';
import NavArrow from '../components/NavArrow';

function StackPage(props){

    return(
        <>
        <p>Stack Page works</p>
        <NavArrow side="left" to="/home"/>
        <NavArrow side="right" to="/projects"/>
        </>
    )
}

export default StackPage;