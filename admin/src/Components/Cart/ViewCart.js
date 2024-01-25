import React, { useState,useEffect } from 'react'
import CartProducts from './CartProducts';
import CartTotal from './CartTotal';
import {useSelector } from 'react-redux'



const ViewCart = () => {
  const cart = useSelector(state => state.cart)
  const email = useSelector(state => state.email)
  const url=`http://localhost:5000/cart/${email}`;
  const [data, setData]=useState([]);



 const fetchData=async(url)=>{
   const response = await fetch(url);
   const data = await response.json();
   setData(data);    
 }

 useEffect(()=>{
   fetchData(url);
 });




  return (
    <div className='bg-gray-100'>
      <div className='py-5'>
        <div className='w-full lg:w-[94%] xl:w-[85%] mx-auto'>
        <h1 className='text-center text-4xl font-semibold text-orange-400'>Booking Page</h1>
        <h1 className='text-center text-lg p-2'>Details about your Products</h1>




          <div className='grid grid-cols-12 py-5'>


            <div className='grid col-span-8 bg-white py-2'>
              <div className=''>
                <div className='grid grid-cols-12 py-3 border-b'>
                   <div className='grid col-span-5'>
                     <h1 className='font-bold ml-6'>Product</h1>
                   </div>
                   <div className='grid col-span-7'>
                    <div>
                     <div className='grid grid-cols-12 font-bold'>
                        <div className='grid col-span-3'><h1>Price</h1></div>
                        <div className='grid col-span-3'><h1>Quantity</h1></div>
                        <div className='grid col-span-3'><h1>Total</h1></div>
                        <div className='grid col-span-3'><h1>Delete</h1></div>
                     </div>
                    </div>
                   </div>
                </div>

                {
                    cart.map(({id,image,category,heading,colour,size,price,name,email,password,count,total})=>{
                        return <div key={id}>
                            
                                <CartProducts id={id} image={image} heading={heading} category={category} size={size} name={name} email={email} password={password} colour={colour} price={price} count={count} total={total}/>
                            </div>
                    })
                }
      

              </div>
            </div>


            <div className='grid col-span-4 h-[400px] rounded'>
            <CartTotal/>
            </div>

          </div>
        </div>
      </div>  
    </div>
  )
}

export default ViewCart
