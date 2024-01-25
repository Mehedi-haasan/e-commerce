// import React,{useEffect,useState} from 'react'
import { NavLink } from 'react-router-dom';
import {useSelector } from 'react-redux'
import { Icon } from '@iconify/react';
import ViewCart from './ViewCart';
import CartTotal from './CartTotal';
import {v4 as uuidv4} from "uuid";

const Cart = () => {

  const cart = useSelector(state => state.cart)


  // const email = useSelector(state => state.email);
  // const url=`http://localhost:5000/cart/${email}`;
  // const [data, setData]=useState([]);

  // const fetchData=async(url)=>{
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setData(data);    
  // }

  // useEffect(()=>{
  //   fetchData(url);
  // },[]);


  return (
    <div className='bg-gray-100'> 
      {
        cart.length > 0 ? <div className='hidden md:block'><ViewCart/></div> : <div className='bg-white pb-20'>
          <Icon icon="bi:cart-x" className=' block pt-10 mx-auto h-[120px] w-[120px] lg:h-[200px] lg:w-[200px]'/>
          <h1 className='text-5xl font-bold text-center py-10'>Your cart is empty</h1>
          <NavLink to="/" className="border rounded-md bg-black text-white hover:bg-red-500 block mx-auto py-2 px-5 font-semibold w-[153px]">Return to Shop</NavLink>
        </div>
      }

        <div className='bg-gray-100 w-full mx-auto bg-white md:hidden border rounded p-2'>
        <h1 className='text-center text-2xl font-semibold text-orange-400'>Booking Page</h1>
        <h1 className='text-center text-sm p-2'>Details about your Products</h1>
          {
            cart.map((cart)=>{
              return <div key={uuidv4()} className='grid grid-cols-12 py-2 border-y rounded mx-4'>
                        <div className='grid col-span-4'>
                          <img src={cart.image} alt='' className='h-18 w-18 mx-auto'/>
                        </div>
                        <div className='grid col-span-8 ml-3'>
                          <div>
                            <div className='grid grid-cols-2'>
                             <div><h1 className="text-black text-sm font-semibold">Heading</h1></div>
                             <div><h1 className="float-right text-sm text-right pr-5">{cart.heading}</h1></div>
                            </div>

                            <div className='grid grid-cols-2'>
                             <div><h1 className="text-black text-sm font-semibold">Price</h1></div>
                             <div><h1 className="float-right text-sm text-right pr-5">{cart.price} Tk</h1></div>
                            </div>

                            <div className='grid grid-cols-2'>
                             <div><h1 className="text-black text-sm font-semibold">Colour</h1></div>
                             <div><h1 className="float-right text-sm text-right pr-5">{cart.colour}</h1></div>
                            </div>

                            <div className='grid grid-cols-2'>
                              <div><h1 className="text-black text-sm font-semibold">Quantity</h1></div>
                              <div><h1 className="float-right text-sm text-right pr-5">{cart.count} pcs</h1></div>
                            </div>

                            <div className='grid grid-cols-2'>
                              <div><h1 className="text-black text-sm font-semibold">Total</h1></div>
                              <div><h1 className="float-right font-semibold text-sm text-right pr-5">{cart.count*cart.price} Tk</h1></div>
                            </div>
                          </div>
                        </div>
              </div>
        
            })
          }
          <div className='py-5'>
            <CartTotal/>
          </div>
        </div>
    </div>
  )
}

export default Cart



