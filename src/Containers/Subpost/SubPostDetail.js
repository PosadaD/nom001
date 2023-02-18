import { useParams } from "react-router-dom";
import Data from '../../Data/SubData';
import "./PostDetail.css"
import SliderSection from "./slider/SliderSection"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import {Pagination, Mousewheel} from "swiper";

function PostDetail(){

    const postData = Data.data.subdata

    const dataDisplaySection = Object.values(postData).map(item => {

        return(
            <SwiperSlide key={item.id}>
                <SliderSection 
                    item={item}
                />

            </SwiperSlide>
        )
    })

    const {subpostId} = useParams();
    const Post = Data.data.subdata.find(post => post.pdf === subpostId);
  
    var PDF = require(`../../SubPDF/${Post.pdf}.pdf`)

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