import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">SOWN</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/seeds">Seeds</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/collections">Collections</Link>
            </li>
        </ul>
    )
}