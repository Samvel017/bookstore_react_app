import React from 'react';
import { NavLink } from 'react-router-dom';
import DarkLight from './DarkLight';
import ProfileButton from './ProfileButton';
import './header.scss';

export default function Header({users, dark, setDark}) {
  return (
    <div className="header">
      <header>
        <nav>
          <h3 className="website-title">Bookstore CMS</h3>
          <ul className="nav-bar">
            <li>
              <NavLink to="/books">BOOKS</NavLink>
            </li>
            <li>
              <NavLink to="/categories">CATEGORIES</NavLink>
            </li>
          </ul>
        </nav>
        <div className="header-right">
          <DarkLight dark={dark} setDark={setDark} />
          <ProfileButton users={users}/>
        </div>
      </header>
    </div>
  );
}
