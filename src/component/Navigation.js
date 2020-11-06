import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css'

function Navigation() {
    return (
        <div className="nav">
                    <ul>
                        <NavLink to="/" exact activeClassName="active">
                        <li><i className="fas fa-user"></i></li>
                        <li>Friends</li>
                        </NavLink>
                    </ul>
                    <ul>
                        <NavLink to="/chats" activeClassName="active">
                        <li><i className="far fa-comments"></i></li>
                        <li>Chats</li>
                        </NavLink>
                    </ul>
                    <ul>
                        <NavLink to="/find" activeClassName="active">
                        <li><i className="fas fa-search"></i></li>
                        <li>Find</li>
                        </NavLink>
                    </ul>
                    <ul>
                        <NavLink to="/more" activeClassName="active">
                        <li><i className="fas fa-ellipsis-h"></i></li>
                        <li>More</li>
                        </NavLink>
                    </ul>
                </div>
    )
}

export default Navigation
