import { Icon } from "@iconify/react";
import { useDispatch} from 'react-redux'
import React, { useState,useEffect } from 'react'
import { addImage, sendColour, sendData, sendInput, sendSize,} from '../Redux/Actions';
import { useNavigate } from 'react-router-dom';




const ProductCard = ({id, heading, image, input,name,products, colour, size, price, rating, stock, category, discount}) => {
  
  const dispatch = useDispatch();
  const details = useNavigate();

  const url=`http://localhost:5500/getCategory/${id}`;
  const [data, setData]=useState([]);

  
  const fetchData=async(url)=>{
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data)
    setData(data);    
  }

  // useEffect(()=>{
  //   fetchData(url);
  // },[]);

  

 // const handleDetails =()=>{
   // fetchData(url)
    // dispatch(sendData({id, heading, price, rating, stock, category, discount}));
    // dispatch(addImage({image}))
    // dispatch(sendColour({colour}))
    // dispatch(sendSize({size}))
    // dispatch(sendInput({input}))
    // details("/productdetails");
  // }

  const handleDetails = ()=>{
    // dispatch()
    details("/productdetails");
  }
  return (
         <div className='w-full '>
                 <div>{discount && <button className='px-2 rounded-full mb-1 bg-red-500 text-white'>{discount}%</button>}</div>
                 <div className='overflow-hidden'>
                    <img src={image} alt='image4' className='w-full h-48 lg:h-56 rounded-md hover:scale-125 transition-all duration-1000 cursor-pointer'/>
                 </div>
                 <h1 className='font-bold my-2 text-xl'>{name}</h1>
                
                 <div className="flex text-right float-right mt-1">
                      <Icon icon="solar:star-bold" width="20px" className="text-[#FFA500]"/>
                      <Icon icon="solar:star-bold" width="20px" className="text-[#FFA500]"/>
                      <Icon icon="solar:star-bold" width="20px" className="text-[#FFA500]"/>
                      <Icon icon="solar:star-bold" width="20px" className="text-[#FFA500]"/>
                      <Icon icon="solar:star-bold" width="20px" className="text-[#FFA500]"/>
                 </div>
                 <h2 className='text-lg mb-1 hover:text-red-500 font-bold'>Price: {550}$</h2>
                 {
                  stock ? <h3 className='mt-1 font-semibold text-lg flex'><Icon icon="icon-park-solid:correct" className='mt-1 mr-1 text-red-500'/> In Stock</h3>:<h3 className='mt-1 font-semibold'>Out of Stock</h3>
                 }
                 
           
              <div>
                
                   <button onClick={handleDetails} className='border font-semibold px-2 py-2 text-white bg-[#ECBA20] rounded-lg block w-full mx-auto text-center'>Details</button> 
                
              </div>

           
        </div>
  )
}

export default ProductCard

