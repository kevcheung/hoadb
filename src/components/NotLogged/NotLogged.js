import React from 'react';
import { Link } from 'react-router-dom';

function NotLogged (){
    return(
        <div className="notlogged">
        <p>YOU ARE NOT LOGGED IN!</p>
        <p>PLEASE CLICK THE BUTTON TO RETURN TO THE HOME SCREEN.</p>
        <Link to='/'>
            <button>Return Home</button>
            </Link>
        </div>
    )
}
export default NotLogged;