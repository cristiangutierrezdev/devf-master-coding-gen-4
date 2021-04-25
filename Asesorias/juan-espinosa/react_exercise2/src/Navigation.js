import React from 'react'
import Profile from './Profile'
import "./navigation.css"

function Navigation() {
    return (
        <div className="Profile_Navigation">
            <h1>Navigation</h1>
            <Profile />
            <button className="navigationBtn" onClick={changeColor}>change background color</button>
        </div>
    )
}

function changeColor() {
    const Blue=document.querySelector('.Profile_Navigation');
    Blue.classList.toggle('Profile_Navigation--blueBg');
}

export default Navigation