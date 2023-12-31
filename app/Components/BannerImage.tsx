'use client'
import React, { use, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Axios from "axios";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const sliderImageUrl = [
    //First image url
    {
        url:
            "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1"
    },
    {
        url:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*"
    },
    //Second image url
    {
        url:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*"
    },
    //Third image url
    {
        url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU"
    },

    //Fourth image url

    {
        url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU"
    }
];

const BannerImage = () => {
    let url='https://strggetmedemo.blob.core.windows.net/';
    const [ImageUrl,setImageUrl] =useState([])

    const fetchBannerImage = async () => {
        let url = 'https://strggetmedemo.blob.core.windows.net/';
        let value1: any = [];
        const reponse = await Axios.post("https://beta-get4me-api-lyhjqrvjta-el.a.run.app/food-demo/api/collections/heropanels/query", { "data": { "filters": {} } }).then((res) => {
            if (res?.status == 200) {
                return res?.data?.items;
            }
        }).catch((err)=>
        console.log(err))
        setImageUrl(reponse)

    }
    useEffect(() => {
        fetchBannerImage()
    }, [])

    return (
        <div className="parent">
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                infinite={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
            >
               
                {ImageUrl.map((imageUrl: any, index) => {
                    return (
                        <div className="slider" key={index}>
                            <img src={url+(imageUrl?.image?.relativePath.replace(' ','%20'))} alt="movie" />
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};
export default BannerImage;
