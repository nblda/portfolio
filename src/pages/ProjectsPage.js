import React from 'react';
import NavArrow from '../components/NavArrow';

function ProjectsPage(props){

    return(
        <>
        <p>Projects Page works</p>
        <NavArrow side="left" to="/stack"/>
        <NavArrow side="right" to="/about"/>
        </>
    )
}

export default ProjectsPage;