// import React, { useState } from 'react'
import { Icon } from "@iconify/react";
import { useDispatch} from 'react-redux'
import { decrementCounter, incrimentCounter, sendData } from '../Redux/Actions';
import { NavLink, useNavigate } from 'react-router-dom';




const Card = ({id, heading, image, price, rating, stock, category, discount}) => {
  const dispatch = useDispatch();
  const details = useNavigate();

  // const [addCart, setAddCart]=useState(true)
 

  // const handleAddCart =()=>{
  //   dispatch(incrimentCounter())
  //   setAddCart(false);
  // }

  // const handleRemoveCart =()=>{
  //   dispatch(decrementCounter())
  //   setAddCart(true);
  // }

  const handleDetails =()=>{
    dispatch(sendData({id, heading, image, price, rating, stock, category, discount}))
    details("/details");
  }

  return (
         <div className='w-full '>
                 <div>{discount && <button className='px-2 rounded-full mb-1 bg-red-500 text-white'>{discount}%</button>}</div>
                 <div className='overflow-hidden'>
                 <img src={image} alt='image1' className='w-full h-48 lg:h-56 rounded-md hover:scale-125 object-cover transition-all duration-1000 cursor-pointer'/>
                 </div>
                 <h1 className='font-bold my-2 text-xl'>{heading}</h1>
                
                 <div className="flex text-right float-right mt-1">
                      <Icon icon="solar:star-bold" width="20px" className="text-[#FFA500]"/>
                      <Icon icon="solar:star-bold" width="20px" className="text-[#FFA500]"/>
                      <Icon icon="solar:star-bold" width="20px" className="text-[#FFA500]"/>
                      <Icon icon="solar:star-bold" width="20px" className="text-[#FFA500]"/>
                      <Icon icon="solar:star-bold" width="20px" className="text-[#FFA500]"/>
                 </div>
                 <h2 className='text-lg mb-1 hover:text-red-500 font-bold'>Price: {price}$</h2>
                 {
                  stock ? <h3 className='mt-1 font-semibold text-lg flex'><Icon icon="icon-park-solid:correct" className='mt-1 mr-1 text-red-500'/> In Stock</h3>:<h3 className='mt-1 font-semibold'>Out of Stock</h3>
                 }
                 
                  
             {/* <div className='grid grid-cols-2 gap-4'> */}
              {/* <div>
              {
                  addCart ? <button onClick={handleAddCart} className='border font-semibold px-2 py-2 text-white bg-[#ECBA20] rounded-lg block w-full mx-auto text-center'>Add To Cart</button> :<button onClick={handleRemoveCart} className='border font-semibold px-2 py-2 text-white bg-[#F15656] rounded-lg block text-sm w-full mx-auto text-center'>Remove From Cart</button>
                 }
              </div> */}
              <div>
                
                   <button onClick={handleDetails} className='border font-semibold px-2 py-2 text-white bg-[#ECBA20] rounded-lg block w-full mx-auto text-center'>Details</button> 
                
              </div>

             {/* </div> */}
        </div>
  )
}

export default Card

