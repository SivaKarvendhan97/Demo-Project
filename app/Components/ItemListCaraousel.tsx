'use client'
import React, { use, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Axios from "axios";
import { Paper, Typography } from "@mui/material";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const ItemListCarausel = () => {
    let url = 'https://strggetmedemo.blob.core.windows.net/';
    const [ImageUrl, setImageUrl] = useState([]);
    const [datavalues,setValues] = useState([]);

    const fetchBannerImage = async () => {
        const reponse = await Axios.post("https://beta-get4me-api-lyhjqrvjta-el.a.run.app/food-demo/api/collections/featured-products/query", { "data": { "filters": {} } }).then((res) => {
            if (res?.status == 200) {
                return res?.data?.items?.[0]?.products;
            }
          
        }).catch((err) =>
            console.log(err))
         
        setImageUrl(reponse)

    }
    const fetchProductPrice =async(id : any)=>{
        let value1: any = [];
      const value = await id.map(async(index: any) => {
        const reponse: any = await  Axios.get('https://beta-get4me-api-lyhjqrvjta-el.a.run.app/food-demo/api/products/' + `${index?.productId}`).then((res) => {
                if (res?.status == 200) {
                    value1.push(res?.data)
                }     
            })
         setValues(value1);
         return reponse;
        })
        return value1;
    }
    useEffect(() => {
        fetchBannerImage()
    }, [])
    useEffect(() => {
        fetchProductPrice(ImageUrl)
    }, [ImageUrl])

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
                {datavalues?.map((imageUrl: any, index) => {
                    return (
                        <div className="itemPadding" key={index}>
                        <Paper style={{ background: '#f2f2f2', boxShadow: 'none' }} key={index} className="itemMain">
                            <div className="itemList"> <img src={url + (imageUrl?.defaultImage?.relativePath.replace(' ', '%20'))} alt="movie" />
                            </div>
                            <Typography sx={{ paddingTop: '16px',paddingLeft:'9px', fontSize:'16px',fontWeight:'600'}} className="imageName">
                                {imageUrl?.name}
                            </Typography>
                        </Paper>
                    <span  className="pricePromo">

                        <Typography className="Promoprice">
                        <CurrencyRupeeIcon/> 
                        <span>{imageUrl?.unitPrice}
                        </span>
                            </Typography>
                            </span>
                            </div>

                    );
                })}
            </Carousel>
        </div>
    );
};
export default ItemListCarausel;
