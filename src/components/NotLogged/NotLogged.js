import React from 'react';

function NotLogged (){
    return(
        <div className="notlogged">
        <p>YOU ARE NOT LOGGED IN!</p>
        <p>PLEASE CLICK THE BUTTON TO RETURN TO THE HOME SCREEN.</p>
        <a href='http://localhost:3000/#/'>
            <button>Return Home</button>
            </a>
        </div>
    )
}
export default NotLogged;