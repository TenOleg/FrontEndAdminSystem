import React from "react";

const Header = (props) => {
    return (
        < header
            className={'header'}>< a
            href={'#s'}> Administration
            Page < /a>
            <div>
                <button onClick={props.logout}>Logout</button>
            </div>

        </header>
    )
}

export default Header;