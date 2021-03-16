import React from 'react';
import NavArrow from '../components/NavArrow';
import Hero from '../components/Hero';
import ProjectCarousel from '../components/ProjectCarousel';

function ProjectsPage(props){

    return(
        <>
        <Hero title={props.title} subTitle={props.subTitle} />
        <NavArrow side="left" to="/stack"/>
        <NavArrow side="right" to="/about"/>
        <ProjectCarousel />
        </>
    )
}

export default ProjectsPage;