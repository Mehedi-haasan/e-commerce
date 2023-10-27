import React from 'react'
import Product from '../Products/Products'
import { NavLink } from 'react-router-dom'

const Trending_Product = () => {
  return (
    <div className='bg-gray-100 pb-3 lg:pb-5'>
      <div className='grid grid-cols-12 py-8'>
          <div className='grid col-span-7 pl-5'>
            <div><NavLink className='font-bold text-lg  lg:text-2xl border-b-2 border-red-500 py-1'>TRENDING PRODUCTS</NavLink></div>
          </div>
          <div className='grid col-span-5 hidden md:block'>
            <div className='pr-2 lg:pr-4'><NavLink to="/allproduct" className='float-right border-b-2  border-red-500 lg:text-lg font-semibold'>View All Products</NavLink></div>
          </div>
      </div>
      <Product/>

      <button className='block border font-semibold rounded-lg py-2 px-5 mx-auto my-5 bg-white'>Load More Product</button>
    </div>
  )
}

export default Trending_Product
