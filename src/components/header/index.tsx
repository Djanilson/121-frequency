import { Avatar } from 'antd';
import logo from 'assets/logo/icon.svg';
import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__title">
        <Link to="/">
          <img src={logo} alt="logo" className="header__logo" />
          <h1>121 Frequency</h1>
        </Link>
      </div>
      <div className="header__user">
        <p className="header__user__name">User Name</p>
        <Avatar className="header__user__avatar">UN</Avatar>
      </div>
    </header>
  );
};

export default Header;
