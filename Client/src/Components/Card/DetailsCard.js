import React, { useState} from 'react'
import { Icon } from "@iconify/react";
import { NavLink} from "react-router-dom";
import ClientReview from '../ClientReview/ClientReview';

import {useSelector } from 'react-redux'
import { useDispatch} from 'react-redux'
// import { useNavigate } from 'react-router-dom';
import { addToCart, cartDelete, decrementCounter, incrimentCounter,} from '../Redux/Actions';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailsCard = () => {
  const [count, setCount]=useState(1);
  const [addCart, setAddCart]=useState(true)

  const dispatch = useDispatch();
  // const details = useNavigate();

  const id = useSelector(state => state.id)
  const heading = useSelector(state => state.heading)
  const image = useSelector(state => state.image)
  const price = useSelector(state => state.price)
  const stock = useSelector(state => state.stock)
  const rating = useSelector(state => state.rating)
  const category = useSelector(state => state.category)
  const discount = useSelector(state => state.discount)


  const handleCount =()=>{
    if(count>1){
      setCount(count-1)
    }
    else{
      setCount(1)
    }
  }

  const handleAddCart =()=>{
    dispatch(incrimentCounter())
    dispatch(addToCart({id, heading, image, price, rating, stock, category, discount,count}))
    setAddCart(false);
    toast("Added To Cart!");
  }

  const handleRemoveCart =()=>{
    dispatch(decrementCounter())
    dispatch(cartDelete(heading))
    setAddCart(true);
    toast("Remove From Cart!");
  }


const filterData=[
  {
    name:"Mehedi hasan",
    image:"https://img.freepik.com/free-photo/person-selecting-apple-shop_23-2150713414.jpg",
    message:"Employee are so humble"
  },
  {
    name:"Kobir mia",
    image:"https://img.freepik.com/free-photo/man-red-suit-with-blue-shirt-tie_1340-36720.jpg",
    message:"Employee are so humble"
  },
  {
    name:"Mehedi hasan",
    image:"https://img.freepik.com/free-photo/woman-with-yellow-circle-her_1340-40406.jpg",
    message:"Employee are so humble"
  },
  {
    name:"Mehedi hasan",
    image:"https://img.freepik.com/free-photo/person-selecting-apple-shop_23-2150713414.jpg",
    message:"Employee are so humble"
  },
  {
    name:"Mehedi hasan",
    image:"https://img.freepik.com/free-photo/woman-with-ponytail-stands-front-lit-background_1340-45333.jpg",
    message:"Employee are so humble"
  },
]

  
  return (
        
            <div className='mt-24'>
              <ToastContainer/>
            <div className='grid grid-cols-12 mx-auto gap-4 w-full md:w-[80%] lg:w-[65%]'>
    
                <div className='grid col-span-12 md:col-span-6 w-full mx-auto border overflow-hidden hover:shadow-xl shadow p-3 rounded-lg'>
                  <img src={image} alt='image2' className='w-full p-1 h-72 lg:h-96 rounded-lg hover:scale-125 object-cover transition-all duration-1000'/>
                  <div className=''>
                    
                  </div>
                </div>
    
                <div className='grid col-span-12 md:col-span-6 mx-auto w-full border hover:shadow-xl shadow p-3 rounded-lg'>
                   <h1 className='text-3xl font-bold text-red-500'>{heading}</h1>
                   <div className="flex">
                             <Icon icon="solar:star-bold" width="22px" className="mr-1 mt-1 text-[#FFA500]"/>
                             <Icon icon="solar:star-bold" width="22px" className="mt-1 text-[#FFA500]"/>
                             <Icon icon="solar:star-bold" width="22px" className="mx-1 mt-1 text-[#FFA500]"/>
                             <Icon icon="solar:star-bold" width="22px" className="mt-1 text-[#FFA500]"/>
                             <Icon icon="solar:star-bold" width="22px" className="mx-1 mt-1 text-[#FFA500]"/>
                     </div>
                     <h2 className='text-lg font-bold text-red-500 italic'>Price: {price*count}$</h2>
                    <div>
                        <form>
                            <input type='checkbox' name='' value='Green' className='ml-2'/><label className='font-semibold ml-1'>Green</label>
                            <input type='checkbox' name='Green' value='Green' className='ml-2'/><label className='font-semibold ml-1'>Black</label>
                            <input type='checkbox' name='' value='Green' className='ml-2'/><label className='font-semibold ml-1'>Red</label>
                        </form>
                    </div>
                    <div>
                         <button onClick={handleCount} className='border p-2 hover:bg-red-500'>-</button>
                         <button className='border p-2'>{count}</button>
                         <button onClick={()=>{setCount(count+1)}} className='border p-2 hover:bg-red-500'>+</button>
                         {
                          addCart ? <button onClick={handleAddCart} className='border px-3 lg:px-5 py-1 lg:py-2 ml-2 lg:ml-4 rounded-md text-white font-semibold bg-red-600'>Add to Card</button> :<button onClick={handleRemoveCart} className='border py-2 px-5 ml-4 rounded-md text-white font-semibold bg-red-600'>Remove From Card</button>
                         }
                         <NavLink to="/payment" className='border py-1 lg:py-2 ml-2 lg:ml-4 rounded-md bg-black text-white font-semibold px-3 lg:px-5'>Buy Now</NavLink>
                         <hr className='my-4'/>
                    </div>
                    <div className='float-right flex'>
                        <p>Share  : </p>
                        <Icon icon="logos:facebook" width="18px" className="mx-1 mt-1 text-[#FFA500]"/>
                        <Icon icon="logos:whatsapp-icon" width="18px" className="mx-1 mt-1 text-[#FFA500]"/>
                        <Icon icon="skill-icons:instagram" width="18px" className="mx-1 mt-1 text-[#FFA500]"/>
                        <Icon icon="logos:telegram" width="18px" className="mx-1 mt-1 text-[#FFA500]"/>
    
                    </div>
                  <div className='border p-4 rounded-lg'>
                    <h1 className='flex'><Icon icon="icon-park-outline:check-correct" width="18px" className="mx-1 mt-1 text-[#FFA500]"/>100% Guaranteed Service</h1>
                    <h1 className='flex'><Icon icon="ic:outline-lock" width="18px" className="mx-1 mt-1 text-[#FFA500]"/>Safe & Secured Payment</h1>
                  </div>
                  </div>
            </div>
    
            <div className='w-full md:w-[80%] lg:w-[65%] mx-auto  my-10'>
              <div className='p-4 rounded-lg shadow-lg border'>
                <h1 className='font-semibold text-xl'>Description</h1>
                <ul>
                  <li>New exclusive content every week</li>
                  <li>New original film every month</li>
                  <li>Internationally acclaimed dubbed content</li>
                  <li>High-end power-packed original series</li>
                  <li>Ad-Free Content</li>
                  <li>New exclusive content every week</li>
                </ul>
              </div>
    
    
              <div className='grid grid-cols-12 gap-4'>
              <div className='grid col-span-12 p-4 mt-4 h-96 rounded-lg shadow-lg border'>
                <h1 className='text-xl font-semibold'>Customer Reviews</h1>
                <h1 className='text-center text-5xl font-bold'>{5}</h1>
                <div className="flex mx-auto w-28">
                             <Icon icon="solar:star-bold" width="18px" className="mr-1 mt-1 text-[#FFA500]"/>
                             <Icon icon="solar:star-bold" width="18px" className="mt-1 text-[#FFA500]"/>
                             <Icon icon="solar:star-bold" width="18px" className="mx-1 mt-1 text-[#FFA500]"/>
                             <Icon icon="solar:star-bold" width="18px" className="mt-1 text-[#FFA500]"/>
                             <Icon icon="solar:star-bold" width="18px" className="mx-1 mt-1 text-[#FFA500]"/>
                     </div>
                     <p className='text-center'>{1}Review</p>
    
                     <div className="flex"><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]"/><Icon icon="solar:star-bold" width="16px" className="mt-1 text-[#FFA500]"/><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]"/><Icon icon="solar:star-bold" width="16px" className="mt-1 text-[#FFA500]"/>
                             <Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]"/>
                             <p className='border bg-red-600 w-full rounded-full ml-[6px] h-4 mt-1 px-4'></p>{0}
                     </div>
                     <div className="flex"><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]"/><Icon icon="solar:star-bold" width="16px" className="mt-1 text-[#FFA500]"/><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]"/><Icon icon="solar:star-bold" width="16px" className="mt-1 text-[#FFA500]"/>
                        <Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]"/>
                        <p className='border bg-red-500 w-full rounded-full h-4 mt-1 ml-[6px] px-4'></p>{0}
                     </div>
                     <div className="flex"><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]"/><Icon icon="solar:star-bold" width="16px" className="mt-1 text-[#FFA500]"/><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]"/><Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]"/><Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]"/>
                     <p className='border bg-red-400 w-full rounded-full h-4 ml-[6px] mt-1 px-4'></p>{0}
                     </div>
                     <div className="flex"><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]"/><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]"/><Icon icon="ph:star-bold" width="18px" className="mt-1 text-[#FFA500]"/><Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]"/><Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]"/>
                     <p className='border bg-red-300 w-full rounded-full h-4 ml-[6px] mt-1 px-4'></p>{0}
                     </div>
                     <div className="flex"><Icon icon="solar:star-bold" width="16px" className=" mt-1 text-[#FFA500]"/><Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]"/><Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]"/><Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]"/><Icon icon="ph:star-bold" width="16px" className="mt-1 text-[#FFA500]"/>
                            <p className='border bg-red-200 w-full rounded-full ml-[6px] h-4 mt-1 px-4'></p>{0}
                     </div>
                     <h1>{1} REVIEW FOR CHORKI SUBSCRIPTION BD</h1>
    
              </div>
    
              </div>
    
               
    
            </div>
     
            <h1 className="text-center py-4 text-3xl mb-10 text-black font-bold">Client Reviews</h1>
            <div className='grid grid-cols-12 mx-auto w-full md:w-[75%] gap-2 mt-3'>
            
    
              {
                  filterData.map(({name,message,image})=>{
                    return <div className='grid col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 hover:translate-y-2 duration-300 mx-auto border shadow-lg p-4 w-full px-4 rounded-lg'>
                          <ClientReview name={name} message={message} image={image}/>
                    </div>
                  })
                }
    
              
    
        </div>
          
        </div>
       
  )
}

export default DetailsCard
