import { useState,useEffect, Children} from 'react'
import {useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';



const CartTotal = () => { 
   const [price, setPrice]=useState(0);
   const email = useSelector(state => state.email)

   const url=`http://localhost:5500/cart/total/${email}`;


  const fetchData=async(url)=>{
    const response = await fetch(url);
    const data = await response.json();
    setPrice(data);   
  }

  useEffect(()=>{
    fetchData(url);
  },[]);

  
  const handleBuy =()=>{
   // dispatch(buyNow({id, heading, picture, price, selectSize, selectColour, category, discount,count,picture}))
}


  return (
  
    <div className='grid border-2 mx-4 h-[400px] rounded'>
    <div className='bg-white rounded'>

      <h1 className='mx-5 text-3xl py-5 '>Cart Totals</h1>

         <div className="grid grid-cols-12 mx-5 border-y-2 py-2">
            <div className='grid col-span-4'><h1 className="text-black text-lg font-semibold">Subtotal</h1></div>
            <div className='grid col-span-8'><h1 className="float-right text-right pr-5">Tk {price} $</h1></div>
         </div>

          <div className="grid grid-cols-12 mx-5  py-1">
             <div className='grid col-span-7'><h1 className="text-black text-lg font-semibold">Delivery Charge:</h1></div>
             <div className='grid col-span-5'><h1 className="float-right text-right pr-5">tk 60 $</h1></div>
          </div>


          <div className="grid grid-cols-12 mx-5 py-1">
            <div className='grid col-span-4'><h1 className="text-black text-lg font-semibold">Shiping</h1></div>
            <div className='grid col-span-8'><h1 className="float-right text-right pr-5">Shipping to Dhaka</h1></div>
          </div>


          <div className="grid grid-cols-12 mx-5 py-1">
            <div className='grid col-span-4'></div>
            <div className='grid col-span-8'><h1  className="float-right cursor-pointer text-right font-semibold text-red-500 pr-5">Change Address</h1></div>
          </div>

          <div className="grid grid-cols-12 mx-5 border-t-2 py-2">
            <div className='grid col-span-4'><h1 className="text-black text-xl font-semibold">Total</h1></div>
            <div className='grid col-span-8'><h1 className="float-right text-xl text-red-500 font-bold text-right pr-5">Tk {price+60}$</h1></div>
          </div>

          <NavLink to="/hodaiPay" onClick={handleBuy} className='border block mx-auto rounded text-center py-2 bg-red-500 hover:bg-black font-semibold text-white w-[90%] my-6'>Proceed to Checkout</NavLink>
      </div> 
  </div>
  )
}

export default CartTotal


