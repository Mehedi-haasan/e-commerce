import React, { useState } from 'react';

const RenewSubscription = () => {

  
        const [selectedColor, setSelectedColor] = useState(''); 
      
        // Handle the color selection change
        const handleColorChange = (event) => {
          setSelectedColor(event.target.value);
        };
  return (
    <div className='bg-white'>
      <div className='grid grid-cols-12 w-[94%] mx-auto bg-white py-14 '>
        <div className='grid col-span-8 hidden lg:block'>
            <div className='grid grid-cols-12'>
                <div className='grid col-span-7'>
                  <img src='https://img.money.com/2023/05/News-Netflix-Password-Sharing.jpg' alt='ubvhaf' className='w-full'/>
                  <img src='https://www.weandour.com/content/images/2023/06/canva-yapay-zeka-1068x580-1.png' alt='ubvhaf' className='w-full'/>
                </div>
                <div className='grid col-span-5'>
                    <div className='p-4'>
                       <h1 className='font-bold text-xl'>How to Renew</h1>
                       <p className='py-1 font-semibold text-[#392DD0]'>Renew at 3 steps</p>
                       <p className='py-2 font-semibold'>1 Fill Up the form</p>
                       <p className='pt-2 font-semibold'>2 Complete payment</p>
                       <p className='ml-4 text-sm py-1'>Pay Exact Amount by bKash Payment</p>
                       <p className='ml-4 text-sm'>to 01886554755</p>
                       <p className='py-3 font-semibold'>3 Give Trxid and press <span className='font-semibold'>Renew</span></p>


                       <h1 className='pt-20 text-lg'>* <span className='text-lg font-bold underline text-red-500'>Bkash Payment</span></h1>
                       <h1 className='py-3'>* <span className='font-bold text-lg text-[#06D889]'>Live chat</span></h1>
                    </div>
                </div>
            </div>

        </div>
        <div className='grid col-span-12 lg:col-span-4 bg-[#F5F5F5] shadow-md rounded'>
            <div className=' ml-5'>
              <h1 className='text-2xl font-semibold pt-8 pb-4'>Renew your Subscription</h1>
              <div className='my-5'>
                 <h1 className='font-semibold'>Account token</h1>
                 <input type='text' placeholder='Account token' className='border focus:outline-none p-2 w-[90%] rounded'/>
              </div>

              <div className='my-5'>
                 <h1 className='py-1 font-semibold'>Subscription Item *</h1>
                 {/* <input type='text' placeholder='Account token' className='border focus:outline-none p-2 w-[70%] rounded'/> */}
                 <select value={selectedColor} onChange={handleColorChange} className='border focus:outline-none p-2 w-[90%] rounded'>
                    
                    <option value="red">Prime video (Personal) 30Days</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    {/* Add more color options as needed */}
                </select>
              </div>

              <h1 className='font-semibold'>Amount to pay</h1>
              <p className='py-1'>$ {120.50}</p>

              <div className='my-5'>
                <h1 className='font-semibold'>Trx Id</h1>
                <input type='' placeholder='Trx Id' className='border focus:outline-none p-2 w-[90%] rounded'/>
              </div>

              <button className='border font-semibold py-2 px-5 rounded mb-5'>Renew</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RenewSubscription
