import React,{useEffect,useState} from 'react'

const LiveChat = () => {

  const url="http://localhost:5000/getsub";
  const [data, setData]=useState([]);
  const fetchData=async(url)=>{
    const response = await fetch(url);
    const data = await response.json();
    setData(data);    
  }

  useEffect(()=>{
    fetchData(url);
  },[]);


  const la=data[5];
  // console.log(la.time)
  return (
    <div className='bg-white'>
  
     <div className='py-20'>
     <div className='w-full md:w-[60%] lg:w-[350px] mx-auto border-2 bg-gray-200 shadow-xl rounded-lg '>
        <h1 className='text-4xl text-center font-bold pt-8 pb-4'>Live Chat</h1>
        <button className='border rounded py-2 text-center text-white font-semibold bg-red-600 px-5 w-[80%] block mx-auto my-6'>Messenger</button>
        <button className='border rounded py-2 text-center text-white font-semibold bg-[#00AC04] px-5 w-[80%] block mx-auto my-6'>Whatsapp</button>
        <button className='border rounded py-2 text-center text-white font-semibold bg-[#0F3698] px-5 w-[80%] block mx-auto my-6'>Discord</button>
      </div>
      <h1 className='text-center text-md py-20'><span className='font-semibold'>Live chat</span> with our active Support Agent</h1>
     </div>
    </div>
  )
}

export default LiveChat
