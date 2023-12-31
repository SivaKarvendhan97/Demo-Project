'use client'
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from "@mui/material";
import Axios from "axios";
import { Parallax } from 'react-parallax';

export default function SliderComponent() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
  };
  let url = 'https://strggetmedemo.blob.core.windows.net/';
    const [ImageUrl, setImageUrl] = useState([])

    const fetchBannerImage = async () => {
        let url = 'https://strggetmedemo.blob.core.windows.net/';
        let value1: any = [];
        const reponse = await Axios.post("https://beta-get4me-api-lyhjqrvjta-el.a.run.app/food-demo/api/collections/testimonials/query", { "data": { "filters": {} } }).then((res) => {
            if (res?.status == 200) {
                return res?.data?.items;
            }
        }).catch((err) =>
            console.log(err))
          
        setImageUrl(reponse)

    }
    useEffect(() => {
        fetchBannerImage()
    }, [])
  return (
    <Parallax blur={10} bgImage="/background.jpg" bgImageAlt="the cat" strength={200}>
    <Slider {...settings}>
  

      {ImageUrl.map((imageUrl: any, index) => {
                    return (
                   <div key={index} className="ratingclass">
                   <span>
                     <img src={url + (imageUrl?.image?.relativePath.replace(' ', '%20'))} alt='image' height={100} width={100} style={{borderRadius:'50px'}}></img>
                     <Typography sx={{color:'#F77909',paddingTop:'16px',paddingLeft:'30px'}}>
                      {imageUrl?.name}
                     </Typography>
                     <Typography sx={{paddingLeft:'30px'}}>
                     {imageUrl?.place}
                     </Typography>
                     </span>
                     <span>
                     
                     <Typography sx={{textAlign:'center',color:'#ffffff'}}>
                  {imageUrl?.content}
                     </Typography>
                     </span>
                 </div>
                    );
                })}

    </Slider>
    </Parallax>
  );
}