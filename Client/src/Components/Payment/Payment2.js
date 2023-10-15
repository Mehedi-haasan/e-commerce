import React, { useState } from 'react'
import {useSelector } from 'react-redux'
// import { useDispatch} from 'react-redux'

const Payment2 = () => {

   const [values, setValues]=useState({
      fname:"",
      address:"",
      city:"",
      phone:"",
      email:"",

   })

   const product = useSelector(state => state.Product)


console.log(product[0].image)
   const handleSubmit =(e)=>{
         e.preventDefault();
         console.log(values)

   }



  return (
    <div className='bg-white'>
      <div className='py-10'>

         
      <div className='grid grid-cols-12 border rounded py-5 w-full md:w-[80%] lg:w-[60%] mx-auto'>

         <div className='grid col-span-12 py-5'>
            <img src={product[0].image} alt='' className='h-48 w-48 lg:h-56 lg:w-56 mx-auto rounded'/>
         </div>

        <div className='grid col-span-12 lg:col-span-6 my-5 bg-gray-100'>
            

         <div className=' w-[95%] mx-auto'>
            <div className='w-[90%] mx-auto py-3 bg-gray-100'>
           <h1 className='text-2xl py-5 font-semibold'>Billing Details</h1>
              <h1>Full Name *</h1>
              <input type='text' placeholder='Full Name' name='fname' id='fname' className='focus:outline-none w-[80%] border rounded p-2' onChange={(e)=>{setValues({...values, fname:e.target.value})}}/>
           </div>

          <div className='w-[90%] mx-auto my-3'>
              <h1>Address *</h1>
              <input type='text' placeholder='Address' name='address' id='address' className='focus:outline-none w-[80%] border rounded p-2' onChange={(e)=>{setValues({...values, address:e.target.value})}}/>
           </div> 

           <div className='w-[90%] mx-auto my-3'>
              <h1>Town/City *</h1>
              <input type='text' placeholder='Town/City' name='city' id='city' className='focus:outline-none w-[80%] border rounded p-2' onChange={(e)=>{setValues({...values, city:e.target.value})}}/>
           </div>

           <div className='w-[90%] mx-auto my-3'>
              <h1>Phone *</h1>
              <input type='text' placeholder='Phone' name='phone' id='phone' className='focus:outline-none w-[80%] border rounded p-2' onChange={(e)=>{setValues({...values, phone:e.target.value})}}/>
           </div>

           <div className='w-[90%] mx-auto my-3'>
              <h1>Email Address *</h1>
              <input type='text' placeholder='Email' name='email' id='email' className='focus:outline-none w-[80%] border rounded p-2' onChange={(e)=>{setValues({...values, email:e.target.value})}}/>
           </div>
         </div>
        
        </div>

        <div className='grid col-span-12 lg:col-span-6 bg-gray-100 my-5'>
           
          <div  className=' w-[95%] mx-auto'>
          <h1 className='text-2xl font-bold text-center my-6'>Your Order</h1>
          <div className='grid grid-cols-12 px-4 rounded bg-white shadow'>
                <div className='grid col-span-6 border-b-2'><h1 className='font-semibold text-2xl py-3'>Product</h1></div>
                <div className='grid col-span-6 border-b-2'><h1 className='text-right font-semibold text-2xl py-3'>Subtotal</h1></div>

                <div className='grid col-span-6 border-b'><h1 className='font-semibold py-3'>{product[0].heading}</h1></div>
                <div className='grid col-span-6 border-b'><h1 className='text-right font-semibold py-3'>Tk : {product[0].price}</h1></div>

               {
                  product[0].colour && <>
                   <div className='grid col-span-6 border-b'><h1 className='font-semibold pt-3'>Colour</h1></div>
                 <div className='grid col-span-6 border-b'><h1  className='text-right font-semibold py-3'>{product[0].colour}</h1></div>
                  </>
               }
                              {
                  product[0].size && <>
                   <div className='grid col-span-6 border-b'><h1 className='font-semibold pt-3'>Size</h1></div>
                             <div className='grid col-span-6 border-b'><h1  className='text-right font-semibold py-3'>{product[0].size}</h1></div>
                  </>
               }

                <div className='grid col-span-6 border-b'><h1 className='font-semibold py-3'>Subtotal</h1></div>
                <div className='grid col-span-6 border-b'><h1 className='text-right font-semibold text-red-500 py-3'>Tk : {product[0].price}</h1></div>
               
                <div className='grid col-span-6 border-b'><h1 className='font-bold py-3 text-xl '>Total</h1></div>
                <div className='grid col-span-6 border-b'><h1 className='text-right text-xl text-red-500 font-bold py-3'>Tk : {product[0].count*product[0].price}</h1></div>
             </div>
             <p className='px-1 py-3 text-sm'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
             <button onClick={handleSubmit} className='block mx-auto py-2 w-full border rounded my-6 font-semibold text-white bg-black hover:bg-red-500'>Payment</button>
          </div>

        </div>
      </div>
      </div>
    </div>
  )
}

export default Payment2
