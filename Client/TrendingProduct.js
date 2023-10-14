import React from 'react'
import Product from '../Products/Products'

const Trending_Product = () => {
  return (
    <div className=''>
      <div className='grid grid-cols-12 py-8'>
          <div className='grid col-span-6'>
            <div><h1 className='font-bold text-2xl border-b-2 border-red-500 w-[258px] text-upercase py-1'>TRENDING PRODUCTS</h1></div>
          </div>
          <div className='grid col-span-6'>
            <div><button className='float-right border-b-2 border-red-500 text-lg font-semibold'>View All Products</button></div>
          </div>
      </div>
      <Product/>
    </div>
  )
}

export default Trending_Product
