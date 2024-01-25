import React from 'react'
import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react';

const Upai = () => {
    const number =1223235456;
    const price = useSelector(state => state.totalPrice)
    const handleVerify =()=>{

    }
  return (
    <div className='bg-white'>
      <div className='py-10'>
      <div className='w-[350px] md:w-[400px] lg:w-[550px] mx-auto border rounded-lg shadow-lg my-20'>
        <img src='https://pay.payment-2brogamers.com/assets/template/images/upay.png' alt='hesaf' className='block p-1 border rounded-full shadow-lg mb-10 mt-5 mx-auto h-24 w-24'/>
        <div className='grid grid-cols-12 w-[300px] md:w-[380px] lg:w-[500px] my-5 mx-auto gap-6'>
            <div className='grid col-span-12 lg:col-span-8 rounded-lg border shadow-md'>
               <div className='flex'>
                    <div className=''>
                    <img src='https://pay.payment-2brogamers.com/assets/template/images/upay.png' alt='fudhv' className='rounded-full h-14 py-2 px-auto w-14 ml-3 my-5 border'/>
                    </div>
                    <div className='ml-3'>
                        <h1 className='text-md mt-4 font-semibold'>Name of Group</h1>
                        <h1 className='text-sm'>ইনভয়েস আইডিঃ</h1>
                        <h1 className='text-sm'>{number}</h1>
                    </div>
               </div>
            </div>

            <div className='grid col-span-12 lg:col-span-4 shadow-md rounded-lg border'>
                <h1 className='text-center my-auto py-5 font-bold'>Total {price}.00 Tk</h1>
            </div>
        </div>
        <div className='w-[300px] md:w-[380px] lg:w-[500px] border mx-auto bg-[#0054A6] shadow-lg rounded-lg'>
            <h1 className='text-center text-white font-semibold py-8'>ট্রান্সজেকশন আইডি দিন</h1>
            <input type='phone' placeholder='ট্রান্সজেকশন আইডি দিন' className='py-2 pl-2 w-[94%] rounded-lg border block mx-auto' />
            
            <h3 className='px-4 py-3 text-white text-sm'>*322# ডায়াল করে আপনার UPAI মোবাইল মেনুতে যান অথবা UPAI অ্যাপে যান।</h3>
            <hr/>
            <h3 className='px-4 py-3 text-white text-sm'><span className='text-[#FCD800] font-bold'>"Send Money"</span> -এ ক্লিক করুন।</h3>
            <hr/>
            <h3 className='px-4 py-3 text-white text-sm'>প্রাপক নম্বর হিসেবে এই নম্বরটি লিখুনঃ <span className='flex'><span className='text-[#FCD800] font-bold ml-1'># {number}</span><button onClick={()=>{navigator.clipboard.writeText(number);}} className='px-2 py-[1px] bg-[#003F7C] text-sm rounded-lg ml-2 flex'><Icon icon="lucide:clipboard-copy" className="h-[15px] my-auto w-[18px] text-white mx-auto" /> Copy</button></span></h3>
            <hr/>
            <h3 className='px-4 py-3 text-white text-sm'>টাকার পরিমাণঃ <span className='text-[#FCD800] font-bold'>{price}.00 Tk</span></h3>
            <hr/>
            <h3 className='px-4 py-3 text-white text-sm'>নিশ্চিত করতে এখন আপনার UPAI মোবাইল মেনু পিন লিখুন।</h3>
            <hr/>
            <h3 className='px-4 py-3 text-white text-sm'>সবকিছু ঠিক থাকলে, আপনি UPAI থেকে একটি নিশ্চিতকরণ বার্তা পাবেন।</h3>
            <hr/>
            <h3 className='px-4 py-3 text-white text-sm'>এখন উপরের বক্সে আপনার <span className='text-[#FCD800] font-bold'>Transaction ID</span> দিন এবং নিচের <span className='text-[#FCD800] font-bold'>VERIFY</span> বাটনে ক্লিক করুন।</h3>
        </div>
        <button onClick={handleVerify} className='block mx-auto font-bold text-white rounded-lg py-3 mb-16 mt-6 bg-[#0054A6] w-[300px] md:w-[380px] lg:w-[500px]'>VERIFY</button>
    </div>
      </div>
    </div>
  )
}

export default Upai
