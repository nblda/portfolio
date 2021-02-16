import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

function NavArrow(props){
console.log(props)

// const redirectTo = (target) =>  {
//    history.push('/'+target);
// }

    return(
        <div>
            {/* <Link className="nav-link" to='/home' >left</Link> */}
            { props.to && props.side==="left" && <Link to={props.to}>left</Link>}
            { props.to && props.side==="right" && <Link to={props.to}>right</Link>}
        </div>
    );
}

export default NavArrow;