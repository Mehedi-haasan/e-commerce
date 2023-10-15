// import React, { useState,useEffect } from 'react'
// import Card from '../Card/Card';
// import SubscCard from '../Card/SubscCard'
import Game from '../Game/Game';
import LadiesCorner from '../Ladies-Corner/LadiesCorner';
// import ProductCard from '../Products/ProductCard';
import Product from '../Products/Products';
import Subscripyion from '../Subscription/Subscription';
import Watch from '../Watches/Watch';
import Banner from './Banner';
import HotSale from './HotSale';
import TrendingProduct from './TrendingProduct';





const Home = () => {


  

  return (
    <div className='mx-auto'>
     <div className='bg-white px-5'><Banner/></div>
     
      <div className='grid grid-cols-12 mx-auto bg-white w-full  h-full gap border p-4'>
        <div className='grid col-span-12 lg:col-span-6'>
          <img src='https://img.freepik.com/premium-photo/mega-sale-sticker-with-percent-price-off-announcement-limited-time-mega-sale-discount-web-banner-bri_419341-2186.jpg' alt='image2' className='h-full w-full p-2 rounded-2xl'/>
        </div>

        <div className='grid col-span-12 lg:col-span-6'>
            <div className='rounded-lg w-full'>
              <img src='https://img.freepik.com/free-photo/young-woman-holding-phone-shopping-with-satisfaction-generated-by-ai_188544-27154.jpg' alt='image2' className='h-[280px] w-full p-2 rounded-2xl'/>
            </div>

            <div>
              <div className='grid grid-cols-12 gap'>
                  <div className='grid col-span-12 lg:col-span-6 rounded-lg'>
                  <img src='https://img.freepik.com/premium-photo/man-enjoys-leisurely-walk-winter-day_731930-46330.jpg' alt='image3' className='w-full h-[220px]   rounded-xl p-2'/> 
                  </div>
                  <div className='grid col-span-12 lg:col-span-6 rounded-lg overflow-hidden'>
                    <img src='https://img.freepik.com/free-photo/person-holding-cup-coffee_23-2150698709.jpg' alt='image3' className='w-full h-[220px] hover:scale-125 object-cover transition-all duration-1000 cursor-pointer rounded-xl p-2'/> 
                  </div>
              </div>
            </div>
        </div>
    </div>

    <div className='bg-white px-5'><HotSale/></div>

    <div className='bg-white px-5'>
      <TrendingProduct/>
       {/* <Trending_Product/> */}
      </div>

         <Subscripyion/>
         <Watch/>
         <div className='bg-white'>
         <div className='flex bg-white mx-auto w-full md:w-[95%] lg:w-[90%]'>
               <h1 className='text-3xl mx-auto font-semibold ml-4 md:ml-0 py-5'>T-Shirts</h1>
          </div>
         </div>
         <Product/>
         <LadiesCorner/>
         <Game/>
    </div>
  )
}

export default Home
