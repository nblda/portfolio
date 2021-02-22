import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoIosArrowForward, IoIosArrowBack  } from 'react-icons/io';

function NavArrow(props){
console.log(props)

// const redirectTo = (target) =>  {
//    history.push('/'+target);
// }

    return(
        <div>
            <div className="nav-arrow-left">
                { props.to && props.side==="left" && <Link to={props.to}><IoIosArrowBack /></Link>}
            </div>
            <div className="nav-arrow-right">
                { props.to && props.side==="right" && <Link to={props.to}><IoIosArrowForward /></Link>}
            </div>
        </div>
    );
}

export default NavArrow;