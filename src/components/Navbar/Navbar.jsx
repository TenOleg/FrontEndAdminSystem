import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className={'nav'}>
            <div>
                <NavLink to={'/home'}>Home</NavLink>
            </div>
            <div>
                <NavLink to={'/users'}>Users</NavLink>
            </div>
            <div>
                <NavLink to={'/posts'}>Posts</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;