import React from 'react';
import TechCard from './TechCard';

function CardInfo(props){

        let technos = props.techs;

        let html, css, js, php, angular, react, mysql, pgsql = 0;

        for(let i=0; i<technos.length; i++){

            switch (true) {
                case "html"=== technos[i]:
                    html = 1;
                    break;
                case "css"=== technos[i]:
                    css = 1;
                    break;
                case "js"=== technos[i]:
                    js = 1;
                    break;
                case "php"=== technos[i]:
                    php = 1;
                    break;
                case "angular"=== technos[i]:
                    angular = 1;
                    break;
                case "react"=== technos[i]:
                    react = 1;
                    break;
                case "mysql"=== technos[i]:
                    mysql = 1;
                    break;
                case "pgsql"=== technos[i]:
                    pgsql = 1;
                    break;
                default:
                    break;
            }

        }


        return(
            <>
            { 
            <div className="d-flex flex-column n-card-info">
                <p className="d-flex justify-content-center n-card-title">{props.title}</p>

                <div className="d-flex justify-content-center">
                    { html===1 && <TechCard tech="HTML"/> }
                    { css===1 && <TechCard tech="CSS"/> }
                    { js===1 && <TechCard tech="JS"/> }
                    { react===1 && <TechCard tech="React"/> }
                    { angular===1 && <TechCard tech="Angular"/> }
                    { php===1 && <TechCard tech="PHP"/> }
                    { mysql===1 && <TechCard tech="MySQL"/> }
                    { pgsql===1 && <TechCard tech="PgSQL"/> }
                </div>

                <p className="d-flex justify-content-center n-card-sub-title">{props.subTitle}</p>
                {props.link && <a className="d-flex justify-content-center" href={props.link} target="_blank" rel="noopener noreferrer">View</a>} 
            </div>
            }
            </>
        );   
}

export default CardInfo;