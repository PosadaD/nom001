import "./header.css";
import {Link} from "react-router-dom"
import {FaSearch} from "react-icons/fa"
import React, { useState } from "react";


function Header({ onSearch }){

    const headerImg = require("../../Assets/header/Logo.JPG")

    
    return(
        <header className="headerContainer">
            <div className="imgContainer">
                <Link to={"/"}><img alt="" src={headerImg}></img></Link>
            </div>
            <form className="search">
                <Link to={'../books'} ><button type="submit" className="btn btn-primary"><FaSearch className="icon"/>Buscar libros</button></Link>
            </form>
            <div className="titleContainer">
                <h1>NOM-001-SEDE-2012</h1>
            </div>
        </header>
    )
}


export default Header;