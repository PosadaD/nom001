import "./Slider.css"
import {Link} from "react-router-dom"

function SliderSection(props){

    var Description = props.item.description;
 
    return(
        <div className="containerSectionSl">
            <div className="infoSl">
                <h3>{props.item.title}</h3>
                <p>{Description.substring(0, 150)}...</p>
                <Link to={`../tab/${props.item.pdf}`}><button>Leér más</button></Link>
            </div>
        </div>      
    )
}

export default SliderSection;