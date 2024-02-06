import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";
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
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
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


    const [data, setData] = useState([]);


    const fetchData = async () => {
        const response = await fetch(`http://localhost:8050/api/get/product/templete`)
        const data = await response.json();
        setData(data.items);
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log(data)

    return (
        <div className='bg-[#313CBF] rounded'>
            <h1 className='py-3 text-2xl font-bold text-white ml-[1%]'>Hot Sale</h1>
            <div className='px-2'>
                <Slider {...settings1}>
                    {data.map(({ id, category_id, description,image_url, name, price,standerd_price }) => {
                        return <div key={uuidv4()} className="scale-95 bg-white rounded">
                            <HotSaleCart id={id} category_id={category_id} description={description} image_url={image_url} name={name} price={price} standerd_price={standerd_price}/>
                        </div>
                    })}
                </Slider>
            </div>
            <h1 className='py-1 text-2xl font-bold text-white ml-[2%]'>{ }</h1>
        </div>
    )
}

export default HotSale
