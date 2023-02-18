import {Link} from "react-router-dom"
import "./Slider.css"

function Slider(props){
    
    var Description = props.item.description;

    return(
        <div className="containerSlider">
            <div className="title" data-swiper-parallax="-300">
                {props.item.title}
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
                {props.item.subtitle}
            </div>
            <div className="text" data-swiper-parallax="-100">
                <p>
                    {Description.substring(0,250)}
                </p>
            </div>
            <Link to={`./${props.item.pdf}`}><button className="buttom">Leér más</button></Link>
        </div>
    )    
}

export default Slider;
