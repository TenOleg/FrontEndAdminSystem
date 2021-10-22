import React from "react";
import {NavLink} from "react-router-dom";
import './Navbar.css'
import {SidebarData} from "./SidebarData";

const Navbar = () => {
    return (
        <div className={'Sidebar'}>
            <div className={'imgBlock'}>
                <img className={'img'}
                     src={'https://icon-library.com/images/administrator-icon/administrator-icon-19.jpg'}/>
                {/*<div className={'name'}>Administrator</div>*/}
            </div>
            <ul className={'SidebarList'}>
                {
                    SidebarData.map((val) => {
                        return (
                            <NavLink className={'navLink'} to={val.link}>
                                <li id={window.location.pathname === val.link ? 'active' : ''}
                                    className={'row'} key={val.id}>
                                    <div id={'icon'}>{val.icon}</div>
                                    <div id={'title'}>{val.title}</div>
                                </li>
                            </NavLink>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Navbar;