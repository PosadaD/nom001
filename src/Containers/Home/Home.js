import "./Home.css"
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "./Components/Slider";
import Data from "../../Data/Data"
import TablasData from "../../Data/TablasData";
import Tablashome from "./Components/tablas"

import { Parallax, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Home(){

    const nomData = Data.data.nom
    const dataSection = nomData.map(item => {
        return(
            <SwiperSlide key={item.id}>
                <Slider  
                    item={item}
                />
            </SwiperSlide>
        )
    })

    const tabData = TablasData.data.datatab
    const tablasSection = tabData.map(item => {
        return(
            <Tablashome key={item.id}
                item = {item}
            />
        )
    })


    return(
        <section className="homeContainer">
            <Swiper
                style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
                }}
                speed={600}
                parallax={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                slot="container-start"
                className="parallax-bg"
                style={{
                    "backgroundImage":
                    "url(https://c.pxhere.com/photos/19/78/current_energy_environment_power_line_upper_lines_electricity_high_voltage_strommast-1114488.jpg!d)",
                }}
                data-swiper-parallax="-23%"
                ></div>
                {dataSection}
            </Swiper>
            <div className="tablasSection">
                {tablasSection}
            </div>
        </section>
    )
}

export default Home;