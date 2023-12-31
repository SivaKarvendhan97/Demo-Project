import Axios from "axios";
import { useState } from "react";
export  const  fetchBannerImage = async  () =>{
let url='https://strggetmedemo.blob.core.windows.net/';
let value1: any = [];
    const reponse = await Axios.post("https://beta-get4me-api-lyhjqrvjta-el.a.run.app/food-demo/api/collections/heropanels/query",{"data":{"filters":{}}}).then((res) => {
        // res?.data?.items.map((index,value)=>{
        //    value1.push((url+(index?.image?.relativePath.replace(' ','%20'))))
        //    console.log( value1)
        //    return value1;
        // })
        if(res?.status == 200){
            return res?.data;
        }
     
      })
      .catch(err => console.log(err));

      console.log(reponse)
      
      
}

