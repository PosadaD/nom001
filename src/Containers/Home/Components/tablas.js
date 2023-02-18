import "./tablas.css"
import {Link} from "react-router-dom"

function Tablashome(props){

    var Description = props.item.description;

    return(
        <>
            <div className="TablasContainer">
                <h3>{props.item.title}</h3>
                <p>{Description.substring(0, 150)}...</p>
                <Link to={`../tab/${props.item.pdf}`}><button>Ver Tabla</button></Link>
            </div>
        </>
    )
}


export default Tablashome;