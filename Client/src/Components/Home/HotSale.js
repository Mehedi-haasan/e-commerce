import React, { useState,useEffect } from 'react'
import {v4 as uuidv4} from "uuid";
// import { Icon } from "@iconify/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HotSaleCart from './HotSaleCart';

const HotSale = () => {


    
    var settings1 = {
        // dots: true,
        infinite: true,
        autoplaySpeed: 5000,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };

      const url="http://localhost:5500/test";
      const [data, setData]=useState([]);
     
      
      const fetchData=async(url)=>{
        const response = await fetch(url);
        const data = await response.json();
        setData(data);    
      }
    
      // useEffect(()=>{
      //   fetchData(url);
      // },[]);
 
  return (
    <div className='bg-[#313CBF] rounded'>
        <h1 className='py-3 text-2xl font-bold text-white ml-[1%]'>Hot Sale</h1>
        <div className='px-2'>
        <Slider {...settings1}>
          {data.map(({id,discount,image,colour,input,size,heading,stock,price,rule,category}) => {
              return  <div key={uuidv4()}  className="scale-95">
                <HotSaleCart id={id}  discount={discount} image={image} input={input} colour={colour} category={category} rules={rule} size={size} heading={heading} stock={stock} price={price}/>
              </div>
              })}
        </Slider>
        </div>
        <h1 className='py-1 text-2xl font-bold text-white ml-[2%]'>{}</h1>
    </div>
  )
}

export default HotSale
