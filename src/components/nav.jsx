import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { displayData } from '../action/action';


function Nav(props) {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(displayData())
    },[])
    return (
        <>
            <div className='nav'>
                <div className='nav-center'>
                    {/* <Link to="/"><img id='logo' src={logo} alt="" /></Link> */}
                    <div id='logo'>
                        f
                    </div>
                    <input type="search" name="Search" placeholder='  Search Facebook' id="search" />
                </div>
                <div className="nav-right">
                    {/* {Module.map(mod => {
                       return <Link key={mod} to={mod.routeProps.path}><i id='heart' className="fas fa-heart"></i></Link>
                    })} */}
                <Link to="/">Home</Link>
                <Link to="/fav">Favourates</Link>
                    <i className="fas fa-user-friends"></i>
                    <i className="fab fa-facebook-messenger"></i>
                    <i className="fas fa-globe-europe"></i>
                    <i className="fas fa-question-circle"></i>
                    <i id='user' className="far fa-user-circle"></i>
                    <i className="fas fa-caret-down"></i>
                </div>
            </div>
        </>
    );
}

export default Nav; 