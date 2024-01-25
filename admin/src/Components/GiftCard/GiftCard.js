import React, { useState,useEffect } from 'react'
import { Icon } from "@iconify/react";
import Card from '../Card/Card';


const GiftCard = () => {

  const url="http://localhost:5000/getitems";
  const [data, setData]=useState([]);
  const fetchData=async(url)=>{
    const response = await fetch(url);
    const data = await response.json();
    setData(data);    
  }

  useEffect(()=>{
    fetchData(url);
  },[]);
  
  return (
    <div className='bg-[#F6F6F6]'>
        
        <div className='w-full md:w-[90%] lg:w-[80%] xl:w-[68%] mx-auto'>
            <div className='flex'>
               <h1 className='text-2xl mx-auto font-semibold ml-4 md:ml-0 py-10'>GiftCard</h1>

               {/* <div className='float-right mt-10 z-40 mx-auto'>
                <button className='flex border rounded-md px-6 py-2 h-10  block float-right text-right'>{search} <Icon icon="ep:arrow-down" onClick={()=>{setOpen1(!open1)}} className={`transition-transform cursor-pointer duration-300 mt-2 ml-5 ${ open1 ? "rotate-180" : "rotate-0" }`}/></button>
                  {
                     open1 && <div className="absolute rounded-md mt-8 bg-white">
                         <div className="mt-1 border py-2 px-2 rounded">
                         <button onClick={()=>{setSearch("Default Sorting"); setOpen1(!open1)}} className="px-2 hover:translate-x-1 duration-300 hover:text-red-500 ">Default Sorting</button><br/>
                            <button onClick={()=>{setSearch("Sort by popularit"); setOpen1(!open1)}}  className="px-2 hover:translate-x-1 duration-300 hover:text-red-500">Sort by popularity</button><br/>
                            <button onClick={()=>{setSearch("Sort by average rating"); setOpen1(!open1)}}  className="px-2 hover:translate-x-1 duration-300 hover:text-red-500 ">Sort by average rating</button><br/>
                            <button onClick={()=>{setSearch("Sort by latest"); setOpen1(!open1)}}  className="px-2 hover:translate-x-1 duration-300 hover:text-red-500 ">Sort by latest</button><br/>
                            <button onClick={()=>{setSearch("Sort by price"); setOpen1(!open1)}}  className="px-2 hover:translate-x-1 duration-300 hover:text-red-500 ">Sort by price</button>
                         </div>
                       
                         
                      </div>
                   }
                </div> */}
          
            </div>
            

        </div>
        <div className='grid grid-cols-12 mx-auto w-full md:w-[85%] lg:w-[75%] xl:w-[70%] gap-2 mt-3'>
        {
        data.filter((item)=>item.category==="Game").map(({discount,image,heading,stock,price})=>{
          return <div className='grid col-span-12 md:col-span-6 lg:col-span-4 duration-300 xl:col-span-3 mx-auto border shadow-lg p-4 w-full px-4 rounded-lg'>
                <Card discount={discount} image={image} heading={heading} stock={stock} price={price}/>
          </div>
        })
      }
    </div>
    </div>
  )
}

export default GiftCard
