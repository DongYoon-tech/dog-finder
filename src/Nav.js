import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"

const Nav = ({ dogs }) => {

    const links = dogs.map(data => (
        <Link to={`/dogs/${data.name.toLowerCase()}`}>{data.name}</Link>
    ))

    return (
        <div className="Navs">
            <Link to="/">Home</Link>
            {links}
        </div>
    )
}


export default Nav;