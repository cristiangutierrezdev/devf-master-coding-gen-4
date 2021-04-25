import React from 'react'
import './profile_information.css'
import UserDesc from './UserDesc'

function Profile (){
    const userName=prompt("Type the username")
    const imgURL=prompt("Type the URL of the profile image")
    
    return (
        <div className="Profile_information">
            <img className="Profile_information__user" src={imgURL} alt="lost information"/>
            <h2 className="Profile_information__text">{userName}</h2>
            <UserDesc 
                className="Profile_information__text"
                name={userName}
                URL={imgURL}
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum lacinia tempor. Suspendisse sed eleifend justo. Aliquam tincidunt nulla ac eros tincidunt, venenatis malesuada lacus varius. Aliquam lobortis diam nec turpis sagittis, sit amet imperdiet risus blandit. Vivamus volutpat mi libero, et interdum orci ullamcorper et."
            />
        </div>
    )
}

export default Profile