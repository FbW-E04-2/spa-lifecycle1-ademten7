import React from 'react';

const Header = props => {
    return (
        <div className="header">
          <div className="logo">UserSearch</div>
          <div className="menu"><span onClick={props.navigationHandler.bind(this, 'search')}>Search User</span> | <span onClick={props.navigationHandler.bind(this, 'about')}>About</span></div>
        </div>
    )
}

export default Header;
