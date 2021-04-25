import React from 'react'
import "./nav_styles.css";
import { Link } from "react-router-dom";

function nav() {
    return (
        <nav>
            <ul className="nav_styles">
                <Link to="/Profile" className="nav_styles--bullets">
                    <li>Profile</li>
                </Link>
                <Link to="/Navigation" className="nav_styles--bullets">
                    <li>Navigation</li>
                </Link>
            </ul>
        </nav>
    )
}

export default nav