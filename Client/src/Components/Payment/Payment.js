import React, { useState,useEffect } from 'react'

import {useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';


const Payment = () => {

  
   const email = useSelector(state => state.email);
   const cart = useSelector(state => state.cart);
   const total = useSelector(state => state.totalPrice);

  
   const url=`http://localhost:5000/cart/${email}`;
   const [data, setData]=useState([]);

   // const [price, setPrice]=useState(0);
   

   // const url2=`http://localhost:5000/cart/total/${email}`;


   // const fetchData2=async(url2)=>{
   //   const response = await fetch(url2);
   //   const data2 = await response.json();
   //   setPrice(data2);  

   // }

  const fetchData=async(url)=>{
    const response = await fetch(url);
    const data = await response.json();
    setData(data);    
  }

  useEffect(()=>{
    fetchData(url);
   //  fetchData2(url2);
  },[]);




  return (
    <div className='bg-white'>
      <div className='grid grid-cols-12 border rounded py-5 w-full md:w-[80%] lg:w-[60%] mx-auto'>
        <div className='grid col-span-12 lg:col-span-6 my-5'>
            

           <div className='w-[90%] mx-auto my-3'>
           <h1 className='text-2xl py-5 font-semibold'>Billing Details</h1>
              <h1>Full Name *</h1>
              <input type='text' placeholder='Full Name' className='focus:outline-none w-[80%] border rounded p-2' onChange={()=>{}}/>
           </div>

           <div className='w-[90%] mx-auto my-3'>
              <h1>Address *</h1>
              <input type='text' placeholder='Full Name' className='focus:outline-none w-[80%] border rounded p-2' onChange={()=>{}}/>
           </div>

           <div className='w-[90%] mx-auto my-3'>
              <h1>Town/City *</h1>
              <input type='text' placeholder='Full Name' className='focus:outline-none w-[80%] border rounded p-2' onChange={()=>{}}/>
           </div>

           <div className='w-[90%] mx-auto my-3'>
              <h1>Phone *</h1>
              <input type='text' placeholder='Full Name' className='focus:outline-none w-[80%] border rounded p-2' onChange={()=>{}}/>
           </div>

           <div className='w-[90%] mx-auto my-3'>
              <h1>Email Address *</h1>
              <input type='text' placeholder='Full Name' className='focus:outline-none w-[80%] border rounded p-2' onChange={()=>{}}/>
           </div>
        
        </div>

        <div className='grid col-span-12 lg:col-span-6 bg-gray-100'>
           
          <div  className=' w-[95%] mx-auto'>
          <h1 className='text-2xl font-bold text-center my-6'>Your Order</h1>
          <div className='grid grid-cols-12 px-4 rounded bg-white shadow'>
                <div className='grid col-span-6 border-b-2'><h1 className='font-semibold text-2xl py-3'>Product</h1></div>
                <div className='grid col-span-6 border-b-2'><h1 className='text-right font-semibold text-2xl py-3'>Subtotal</h1></div>

                <div className='grid col-span-12'>
                 {
                  cart.map((data)=>{
                     return <div className='grid grid-cols-12'>
                           <div className='grid col-span-6 border-b'><h1 className='font-semibold py-3'>{data.heading}</h1></div>
                           <div className='grid col-span-6 border-b'><h1 className='text-right font-semibold py-3'>{data.price*data.count} Tk</h1></div>
                     </div>
                  })
                } 
               </div>
                {/* <div className='grid col-span-6 border-b'><h1 className='font-semibold pt-3'>{model}</h1> <p className='text-sm pb-2'>Select Colour : black</p></div>
                <div className='grid col-span-6 border-b'><h1  className='text-right font-semibold py-3'>{54723}</h1></div> */}

                <div className='grid col-span-6 border-b'><h1 className='font-semibold py-3'>Subtotal</h1></div>
                <div className='grid col-span-6 border-b'><h1 className='text-right font-semibold text-red-500 py-3'>{total} Tk</h1></div>

              
                <div className='grid col-span-6 border-b'><h1 className='font-semibold py-3'>Shiping</h1></div>
                <div className='grid col-span-6 border-b'><h1 className='text-right font-semibold py-3'>Delivery charge: <span className='text-red-500'>{60} Tk</span></h1></div>
         
                <div className='grid col-span-6 border-b'><h1 className='font-bold py-3 text-xl '>Total</h1></div>
                <div className='grid col-span-6 border-b'><h1 className='text-right text-xl text-red-500 font-bold py-3'>{total+60} Tk</h1></div>
             </div>
             <p className='px-1 py-3 text-sm'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
             <NavLink to="/allpay" className='block mx-auto py-2 w-full border text-center rounded my-6 font-semibold text-white bg-black hover:bg-red-500'>Payment</NavLink>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Payment
