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

      const url="http://localhost:5000/test1";
      const [data2, setData2]=useState([]);
     
      
      const fetchData=async(url)=>{
        const response = await fetch(url);
        const data = await response.json();
        setData2(data);    
      }
    
      useEffect(()=>{
        fetchData(url);
      },[]);


      const data =[
        {
         id:1,
         discount:5,
         heading:"Men slim t-shirt",
         price:550,
         stock:"In Stock",
         image:[
                {
                 image:"https://img.freepik.com/premium-photo/realistic-t-shirt-mockup-featuring-model-wearing-it-showcasing-how-design-looks-when-worn_911620-9046.jpg",
                },
                {
                  image:"https://img.freepik.com/premium-photo/ecommerce-photo-black-tshirt-man_969419-953.jpg",
                },
                {
                  image:"https://img.freepik.com/premium-photo/generative-ai-tshirt-design-people-concept-close-up-young-man-blank-black-tshirt-sh_934909-5170.jpg",
                },
                {
                  image:"https://img.freepik.com/free-photo/black-t-shirt-with-word-kiri-1-it_1340-37795.jpg",
                }
         ],
         colour:[
             {
                 colour:"Red",
                 type:"colour",
                 value:"Red",
     
             },
             {
                 colour:"Yellow",
                 type:"colour",
                 value:"Yellow",
     
             },
             {
                 colour:"White",
                 type:"colour",
                 value:"White",
     
             },
             {
                 colour:"Black",
                 type:"colour",
                 value:"Black",
     
             },
         ],
         size:[
             {
                 size:"S",
                 price:35
             },
             {
                 size:"M",
                 price:60,
             },
             {
                 size:"L",
                 price:75,
             },
             {
                 size:"X",
                 price:100
             },
         
         ],
         input:[
             {
                 name:"Name",
                 type:"text",
                 placeholder:"Enter your name"
             },
             {
                 name:"Email",
                 type:"email",
                 placeholder:"Enter your email"
             }
         ],
         rules:[
             {
                 rule:"Maximum Login 1 Device",
             },
             {
                 rule:"Streaming from one device at a time",
             },
             {
                 rule:"If you want to change the device you have to logout from previous device then login new device",
             },
             {
                 rule:"Video Quality: Ultra-HD (up to 4k)",
             },
         ],
         rating:4,
         category:"T-Shirt",
        },
        {
         id:2,
         discount:5,
         heading:"Women slim t-shirt",
         price:550,
         stock:"In Stock",
         image:[
                {
                 image:"https://img.freepik.com/premium-photo/white-tshirt-mockup-boy-girl-woman-man-2023-photo-only_873925-1460.jpg",
                },
                {
                  image:"https://img.freepik.com/premium-photo/child-kid-tshirt-template-with-yellow-green-red-orange-grey-tshirt-design-with-white-background_873925-127049.jpg",
                },
                {
                  image:"https://img.freepik.com/premium-photo/tshirt-mockup_925962-877.jpg",
                },
                {
                  image:"https://img.freepik.com/free-photo/woman-wearing-white-t-shirt-stands-front-garage-door_1340-42568.jpg",
                }
         ],
         colour:[
             {
                 colour:"Red",
                 type:"colour",
                 value:"Red",
     
             },
             {
                 colour:"Yellow",
                 type:"colour",
                 value:"Yellow",
     
             },
             {
                 colour:"White",
                 type:"colour",
                 value:"White",
     
             },
             {
                 colour:"Black",
                 type:"colour",
                 value:"Black",
     
             },
         ],
         size:[
             {
                 size:"S",
                 price:35
             },
             {
                 size:"M",
                 price:60,
             },
             {
                 size:"L",
                 price:75,
             },
             {
                 size:"Xl",
                 price:100
             },
         ],
         input:[
             {
                 name:"Name",
                 type:"text",
                 placeholder:"Enter your name"
             },
             {
                 name:"Email",
                 type:"email",
                 placeholder:"Enter your email"
             }
         ],
         rules:[
             {
                 rule:"Maximum Login 1 Device",
             },
             {
                 rule:"Streaming from one device at a time",
             },
             {
                 rule:"If you want to change the device you have to logout from previous device then login new device",
             },
             {
                 rule:"Video Quality: Ultra-HD (up to 4k)",
             },
         ],
         rating:4,
         category:"T-Shirt",
        },
        {
         id:3,
         discount:5,
         heading:"Smart Watch",
         price:2499,
         stock:"In Stock",
         image:[
                {
                 image:"https://img.freepik.com/premium-photo/standard-extended-generic-modern-smart-wearable-watch-wide-banner-with-blank-screen-mockup_870512-2242.jpg",
                },
                {
                  image:"https://img.freepik.com/premium-photo/generic-smartwatches-isolated-colorfull-background-3d-illustration_960782-6400.jpg",
                },
                {
                  image:"https://img.freepik.com/premium-photo/generic-smartwatches-isolated-colorfull-background-3d-illustration_960782-6375.jpg",
                },
                {
                  image:"https://img.freepik.com/premium-photo/generic-smartwatches-isolated-colorfull-background-3d-illustration_960782-6349.jpg",
                }
         ],
         colour:[
             {
                 colour:"Red",
                 type:"colour",
                 value:"Red",
     
             },
             {
                 colour:"Yellow",
                 type:"colour",
                 value:"Yellow",
     
             },
             {
                 colour:"White",
                 type:"colour",
                 value:"White",
     
             },
             {
                 colour:"Black",
                 type:"colour",
                 value:"Black",
     
             },
         ],
         size:[
             {
                 size:"25 Diamonds",
                 price:35
             },
             {
                 size:"50 Diamonds",
                 price:60,
             },
             {
                 size:"115 Diamonds",
                 price:75,
             },
             {
                 size:"300 Diamonds",
                 price:100
             },
             {
                 size:"1200 Diamonds",
                 price:400,
             },
             {
                 size:"Lavel Up Pass",
                 price:750
             },
         ],
         input:[
             {
                 name:"Name",
                 type:"text",
                 placeholder:"Enter your name"
             },
             {
                 name:"Email",
                 type:"email",
                 placeholder:"Enter your email"
             }
         ],
         rules:[
             {
                 rule:"Maximum Login 1 Device",
             },
             {
                 rule:"Streaming from one device at a time",
             },
             {
                 rule:"If you want to change the device you have to logout from previous device then login new device",
             },
             {
                 rule:"Video Quality: Ultra-HD (up to 4k)",
             },
         ],
         rating:4,
         category:"Watch",
        },
        {
         id:1,
         discount:5,
         heading:"Pubg Top Up",
         price:500,
         stock:"In Stock",
         image:[
                {
                 image:"https://img.freepik.com/premium-photo/galaxy-background_728173-574.jpg",
                },
                {
                  image:"https://img.freepik.com/premium-photo/game-thrones-statue-man-with-sword-center-image_900321-52174.jpg",
                },
                {
                  image:"https://img.freepik.com/premium-photo/sniper-rifle-hidde-visual-compose_960020-21.jpg",
                },
                {
                  image:"https://img.freepik.com/premium-photo/future-robotic-army-warfare_592197-214.jpg",
                }
         ],
         colour:[
             {
                 colour:"Red",
                 type:"colour",
                 value:"Red",
     
             },
             {
                 colour:"Yellow",
                 type:"colour",
                 value:"Yellow",
     
             },
             {
                 colour:"White",
                 type:"colour",
                 value:"White",
     
             },
             {
                 colour:"Black",
                 type:"colour",
                 value:"Black",
     
             },
         ],
         size:[
             {
                 size:"25 Diamonds",
                 price:35
             },
             {
                 size:"50 Diamonds",
                 price:60,
             },
             {
                 size:"115 Diamonds",
                 price:75,
             },
             {
                 size:"300 Diamonds",
                 price:100
             },
             {
                 size:"1200 Diamonds",
                 price:400,
             },
             {
                 size:"Lavel Up Pass",
                 price:750
             },
         ],
         input:[
             {
                 name:"Name",
                 type:"text",
                 placeholder:"Enter your name"
             },
             {
                 name:"Email",
                 type:"email",
                 placeholder:"Enter your email"
             }
         ],
         rules:[
             {
                 rule:"Maximum Login 1 Device",
             },
             {
                 rule:"Streaming from one device at a time",
             },
             {
                 rule:"If you want to change the device you have to logout from previous device then login new device",
             },
             {
                 rule:"Video Quality: Ultra-HD (up to 4k)",
             },
         ],
         rating:4,
         category:"Game",
        },
        {
         id:78,
         discount:5,
         heading:"Pubg Top Up",
         price:550,
         stock:"In Stock",
         image:[
                {
                 image:"https://img.freepik.com/free-photo/colorful-knitted-bag-still-life_23-2150709519.jpg",
                },
                {
                  image:"https://img.freepik.com/free-photo/knitted-bag-bench-still-life_23-2150709487.jpg",
                },
                {
                  image:"https://img.freepik.com/free-photo/close-up-knitted-bag-still-life_23-2150709647.jpg",
                },
                {
                  image:"https://img.freepik.com/free-photo/close-up-knitted-bag-still-life_23-2150709523.jpg",
                }
         ],
         colour:[
             {
                 colour:"Red",
                 type:"colour",
                 value:"Red",
     
             },
             {
                 colour:"Yellow",
                 type:"colour",
                 value:"Yellow",
     
             },
             {
                 colour:"White",
                 type:"colour",
                 value:"White",
     
             },
             {
                 colour:"Black",
                 type:"colour",
                 value:"Black",
     
             },
         ],
         size:[
             {
                 size:"25 Diamonds",
                 price:35
             },
             {
                 size:"50 Diamonds",
                 price:60,
             },
             {
                 size:"115 Diamonds",
                 price:75,
             },
             {
                 size:"300 Diamonds",
                 price:100
             },
             {
                 size:"1200 Diamonds",
                 price:400,
             },
             {
                 size:"Lavel Up Pass",
                 price:750
             },
         ],
         input:[
             {
                 name:"Name",
                 type:"text",
                 placeholder:"Enter your name"
             },
             {
                 name:"Email",
                 type:"email",
                 placeholder:"Enter your email"
             }
         ],
         rules:[
             {
                 rule:"Maximum Login 1 Device",
             },
             {
                 rule:"Streaming from one device at a time",
             },
             {
                 rule:"If you want to change the device you have to logout from previous device then login new device",
             },
             {
                 rule:"Video Quality: Ultra-HD (up to 4k)",
             },
         ],
         rating:4,
         category:"Ladies",
        },
        {
         id:1,
         discount:5,
         heading:"Netflix Subscription",
         price:550,
         stock:"In Stock",
         image:[
                {
                 image:"https://img.freepik.com/free-photo/black-gold-wheel-with-hmm-it_1340-24275.jpg",
                },
                {
                  image:"https://cdn-images-1.medium.com/max/1200/1*A6kkoOVJVpXPWewg8axc5w.png",
                },
                {
                  image:"https://cdn-images-1.medium.com/max/1200/1*A6kkoOVJVpXPWewg8axc5w.png",
                },
                {
                  image:"https://img.freepik.com/free-photo/black-t-shirt-with-word-kiri-1-it_1340-37795.jpg",
                }
         ],
         colour:[
             {
                 colour:"Red",
                 type:"colour",
                 value:"Red",
     
             },
             {
                 colour:"Yellow",
                 type:"colour",
                 value:"Yellow",
     
             },
             {
                 colour:"White",
                 type:"colour",
                 value:"White",
     
             },
             {
                 colour:"Black",
                 type:"colour",
                 value:"Black",
     
             },
         ],
         size:[
             {
                 size:"1 Month",
                 price:120
             },
             {
                 size:"2 Month",
                 price:210,
             },
             {
                 size:"3 Month",
                 price:340,
             },
         ],
         input:[
             {
                 name:"Name",
                 type:"text",
                 placeholder:"Enter your name" 
             },
             {
                 name:"Email",
                 type:"email",
                 placeholder:"Enter your email"
             }
         ],
         rules:[
             {
                 rule:"Maximum Login 1 Device",
             },
             {
                 rule:"Streaming from one device at a time",
             },
             {
                 rule:"If you want to change the device you have to logout from previous device then login new device",
             },
             {
                 rule:"Video Quality: Ultra-HD (up to 4k)",
             },
         ],
         rating:4,
         category:"Subscription",
        }   
     ]
 
  return (
    <div className='bg-[#313CBF] rounded'>
        <h1 className='py-3 text-2xl font-bold text-white ml-[1%]'>Hot Sale</h1>
        <div className='px-2'>
        <Slider {...settings1}>
          {data.map(({id,discount,image,colour,input,size,heading,stock,price,rule,category}) => {
              return  <div key={uuidv4()}  className="scale-95 bg-white rounded">
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
