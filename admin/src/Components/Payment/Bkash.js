import React from 'react'
import { Icon } from "@iconify/react";
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Bkash = () => {
const number=1750634062;
const price = useSelector(state => state.totalPrice)
const goToUploadPage = useNavigate();

const handleVerify =()=>{
    fetch('http://localhost:8000/register', {
        method: 'POST',
        body: JSON.stringify({
          id:price,
          trx_id:number,
          mobile_number:"uuidv4()",
          date:"date",
          invoice_id:"uuidv4()",
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
        
    goToUploadPage("/uploadpicture")
}


  return (
   <div> 
    <div className='bg-white py-10'>
         <div className='w-[350px] md:w-[400px] lg:w-[550px] mx-auto border rounded-lg shadow-lg  bg-white'>
        <img src='data:image/png;base64,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' alt='hesaf' className='block border rounded-full shadow-lg mb-10 mt-5 mx-auto h-24 w-24'/>
        <div className='grid grid-cols-12 w-[300px] md:w-[380px] lg:w-[500px] my-5 mx-auto gap-6'>
            <div className='grid col-span-12 lg:col-span-8 rounded-lg border shadow-md'>
               <div className='flex'>
                    <div className=''>
                        <img src='data:image/png;base64,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' alt='fudhv' className='rounded-full h-14 py-2 px-auto w-14 ml-3 my-5 border'/>
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
        <div className='w-[300px] md:w-[380px] lg:w-[500px] border mx-auto bg-[#CF2771] shadow-lg rounded-lg'>
            <h1 className='text-center text-white font-semibold py-8'>ট্রান্সজেকশন আইডি দিন</h1>
            <input type='phone' placeholder='ট্রান্সজেকশন আইডি দিন' className='py-2 pl-2 w-[94%] rounded-lg border block mx-auto' />
            
            <h3 className='px-4 py-3 text-white text-sm'>*247# ডায়াল করে আপনার BKASH মোবাইল মেনুতে যান অথবা BKASH অ্যাপে যান।</h3>
            <hr/>
            <h3 className='px-4 py-3 text-white text-sm'><span className='text-[#FCD800] font-bold'>"Send Money"</span> -এ ক্লিক করুন।</h3>
            <hr/>
            <h3 className='px-4 py-3 text-white text-sm'>প্রাপক নম্বর হিসেবে এই নম্বরটি লিখুনঃ <span className='flex'><span className='text-[#FCD800] font-bold ml-1'># {number}</span><button onClick={()=>{navigator.clipboard.writeText(number);}} className='px-2 py-[1px] bg-[#9B1D55] text-sm rounded-lg ml-2 flex'><Icon icon="lucide:clipboard-copy" className="h-[15px] my-auto w-[18px] text-white mx-auto" /> Copy</button></span></h3>
            <hr/>
            <h3 className='px-4 py-3 text-white text-sm'>টাকার পরিমাণঃ <span className='text-[#FCD800] font-bold'>{price}.00 Tk</span></h3>
            <hr/>
            <h3 className='px-4 py-3 text-white text-sm'>নিশ্চিত করতে এখন আপনার BKASH মোবাইল মেনু পিন লিখুন।</h3>
            <hr/>
            <h3 className='px-4 py-3 text-white text-sm'>সবকিছু ঠিক থাকলে, আপনি BKASH থেকে একটি নিশ্চিতকরণ বার্তা পাবেন।</h3>
            <hr/>
            <h3 className='px-4 py-3 text-white text-sm'>এখন উপরের বক্সে আপনার <span className='text-[#FCD800] font-bold'>Transaction ID</span> দিন এবং নিচের <span className='text-[#FCD800] font-bold'>VERIFY</span> বাটনে ক্লিক করুন।</h3>
        </div>
        <button onClick={handleVerify} className='block mx-auto font-bold text-white rounded-lg py-3 mb-16 mt-6 bg-[#CF2771] w-[300px] md:w-[380px] lg:w-[500px]'>VERIFY</button>
      </div>
    </div>
   </div> 
  )
}

export default Bkash
