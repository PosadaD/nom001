import { useParams } from "react-router-dom";
import Data from '../../Data/TablasData';
import "./PostDetail.css"
import SliderSection from "./slider/SliderSection"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import {Pagination, Mousewheel} from "swiper";

function PostDetail(){

    const postData = Data.data.datatab

    const dataDisplaySection = Object.values(postData).map(item => {

        return(
            <SwiperSlide key={item.id}>
                <SliderSection 
                    item={item}
                />

            </SwiperSlide>
        )
    })

    const {tabpostId} = useParams();
    const Post = Data.data.datatab.find(post => post.pdf === tabpostId);
  
    var PDF = require(`../../TablasPDF/${Post.pdf}.pdf`)

    return (
        <>
            <div className="pdfContainer">
                <embed src={PDF} type="application/pdf"/>
            </div>
            <div className="sliderBar-Container">
                <Swiper slidesPerView={3} spaceBetween={30} mousewheel={true} pagination={{clickable: true,}} modules={[Pagination, Mousewheel]} className="mySwiper">
                    {dataDisplaySection}
                </Swiper>
            </div>
        </>
    )
}

export default PostDetail;