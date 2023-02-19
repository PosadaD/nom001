import { useParams } from "react-router-dom";
import Data from '../../Data/Data';
import SubData from "../../Data/SubData";
import "./PostDetail.css"
import SliderSection from "./slider/SliderSection"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import {Pagination, Mousewheel} from "swiper";

function PostDetail(){

    const postData = SubData.data.subdata

    const dataDisplaySection = Object.values(postData).map(item => {

        return(
            <SwiperSlide key={item.id}>
                <SliderSection 
                    item={item}
                />

            </SwiperSlide>
        )
    })

    const {postId} = useParams();
    const Post = Data.data.nom.find(post => post.pdf === postId);

    //var PDF = require(`../../PDF/${Post.pdf}.pdf`)

    var PDF = require(`https://github.com/PosadaD/nom001/tree/main/src/PDF${Post.pdf}.pdf`)

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