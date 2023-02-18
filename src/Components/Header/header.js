import "./header.css";
import {Link} from "react-router-dom"

function Header(){

    const headerImg = require("../../Assets/header/Logo.JPG")

    return(
        <header className="headerContainer">
            <div className="imgContainer">
                <Link to={"/"}><img alt="" src={headerImg}></img></Link>
            </div>
            <input type="text"></input>
            <div className="titleContainer">
                <h1>NOM-001-SEDE-2012</h1>
            </div>
        </header>
    )
}


export default Header;