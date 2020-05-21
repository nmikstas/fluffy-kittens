import React from "react";
import { NavLink } from 'react-router-dom';
import "./style.css";

const Nav = () =>
{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink
                exact
                to="/"
            >
                <div className="navbar-brand"></div>
            </NavLink>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse" id="navbarText">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink
                            exact
                            activeClassName="navbarLink--active"
                            className="navbarLink"
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            activeClassName="navbarLink--active"
                            className="navbarLink"
                            to="/login"
                        >
                            Login
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            activeClassName="navbarLink--active"
                            className="navbarLink"
                            to="/signup"
                        >
                            Signup
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
