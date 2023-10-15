import axios from 'axios';
import React, { useState } from 'react'
import { Icon } from "@iconify/react";

const PostItem = () => {

 const [finput, setFInput]=useState("");
 const [ftime, setFtime]=useState("")
 const [frule, setFRule]=useState("")
 const [file, setFile]=useState();
 
    const [values, setValues]=useState({
        heading:"",
        time:[],
        input:[],
        price:"",
        rating:"",
        stock:"",
        rules:[],
        category:"Subscription",
        discount:"",
    })


    const handleInput =(e)=>{
      setValues({
        ...values,
        input:[...values.input, finput],
      })
      setFInput("");
    }

    const handleRules =(e)=>{
      setValues({
        ...values,
        rules:[...values.rules, frule],
      })
      setFRule("");
    }



    const handletime =(e)=>{
      setValues({
        ...values,
        time:[...values.time, ftime],
      })
      setFtime("");
    }

    



    const handleSubmit = async(e)=>{
      e.preventDefault();
      var formData = new FormData();
      formData.append("image",  file);
      formData.append("time",  values.time);
      formData.append("input",  values.input);
      formData.append("rules",  values.rules);
      formData.append("heading",  values.heading);
      formData.append("category",  values.category);
      formData.append("stock",  values.stock);
      formData.append("price",  values.price);
      formData.append("discount",  values.discount);
      formData.append("rating",  values.rating);
      const config = {
          headers: {
                     'Content-type': 'multipart/form-data'
                   },
      }
     
      const res = await axios.post("http://localhost:5500/post", formData,config);
      console.log(res.data); 
    }






    const handleFile =(e)=>{
        setFile(e.target.files[0]);
        
    }



const handleDelete =(e)=>{
      
}

  return (
    <div className='w-full bg-white mx-auto'>

        <h1 className='text-center text-3xl font-bold py-5'>Post Item</h1>
      <div className='grid grid-cols-12 w-full md:w-[90%] lg:w-[80%] gap-2 mx-auto border rounded'>
        <div className='grid col-span-12 lg:col-span-6 my-5 border ml-5 rounded'>
        
            <h1 className='ml-[2%] p-1'>Heading of Product</h1>
            <input  type='text' onChange={(e)=>setValues({...values, heading:e.target.value})} placeholder='Heading of Product' className='block mx-auto w-[96%] focus:outline-none border rounded my-1 p-1'/>
            <input type='numeric' onChange={(e)=>setValues({...values, price:e.target.value})} placeholder='Price of product' className='block mx-auto w-[96%] focus:outline-none border rounded my-1 p-1'/>
            <input type='numeric' onChange={(e)=>setValues({...values, rating:e.target.value})} placeholder='rating' className='block mx-auto w-[96%] focus:outline-none border rounded my-1 p-1'/>
            <input type='text' onChange={(e)=>setValues({...values, stock:e.target.value})} placeholder='stock' className='block mx-auto w-[96%] focus:outline-none border my-1 rounded p-1'/>
            <input type='numeric' onChange={(e)=>setValues({...values, discount:e.target.value})} placeholder='Discount' name='discount' id='discount' className='block mx-auto rounded w-[96%] focus:outline-none border my-1 p-1'/>
            
      
        </div>


          <div className='grid col-span-12 lg:col-span-6 my-5 mr-5 border rounded'>
            <h1 className='text-2xl text-center'>Product Varient</h1>

            <div className='ml-[2%] my-2'>
             <h1 className=' font-semibold'>Image of product</h1>
              
              <div className='flex mt-1'>
               <input type='file' multiple onChange={handleFile} name="image" className='p-2 border focus:outline-none rounded-l'/>
             </div>
            </div>



            <div className='ml-[2%] my-2'>
             <h1 className=' font-semibold'>Rules of product</h1>
             <div className=''>
              {
                values.rules.map((rule)=>{
                  return <div key={rule} className=''>
                    
                    <h1 className='mr-1 font-semibold my-2 flex'><span className='border rounded-md px-2'>{rule}</span><Icon icon="icomoon-free:cross" onClick={handleDelete} width="8px"  className='cursor-pointer'/></h1>
                  </div>
                })
              }
             </div>
              
              <div className='flex mt-1'>
               <input type='text' placeholder='Rules here' value={frule} onChange={(e)=>{setFRule(e.target.value)}} className='p-2 border focus:outline-none rounded-l'/>
               <button onClick={handleRules} className='px-6 py-1 border rounded-r bg-[#06D889]'><Icon icon="mingcute:arrow-right-fill" width="22px" className='text-white'/></button>
             </div>
            </div>




            <div className='ml-[2%] my-2'>
             <h1 className=' font-semibold'>Time of product</h1>
             <div className='flex'>
              {
                values.time.map((time)=>{
                  return <div key={time} className='flex'>
                    
                    <h1 className='mr-1 font-semibold my-2 flex'><span className='border rounded-md px-2'>{time}</span><Icon icon="icomoon-free:cross" onClick={handleDelete} width="8px"  className='cursor-pointer'/></h1>
                  </div>
                })
              }
             </div>
              
              <div className='flex mt-1'>
               <input type='text' placeholder='time here' value={ftime} onChange={(e)=>{setFtime(e.target.value)}} className='p-2 border focus:outline-none rounded-l'/>
               <button onClick={handletime} className='px-6 py-1 border rounded-r bg-[#06D889]'><Icon icon="mingcute:arrow-right-fill" width="22px" className='text-white'/></button>
             </div>
            </div>

            <div className='ml-[2%] my-2'>
              <h1 className=' font-semibold'>Input of product</h1>
              <div className='flex'>
              {
                values.input.map((input)=>{
                  return <div key={input} className='flex'>
                    <h1 className='mr-1 font-semibold my-2 flex'><span className='border rounded-md px-1'>{input}</span><Icon icon="icomoon-free:cross" width="8px" className='cursor-pointer'/></h1>
                  </div>
                })
              }
             </div>
              <div className='flex mt-1'>
               <input type='text' placeholder='Input here' value={finput} onChange={(e)=>{setFInput(e.target.value)}} className='p-2 border focus:outline-none rounded-l'/>
               <button onClick={handleInput} className='px-6 py-1 border rounded-r bg-[#06D889]'><Icon icon="mingcute:arrow-right-fill" width="22px" className='text-white'/></button>
             </div>
            </div>
           
          
        </div>
       
      </div>
      <button type='submit' onClick={handleSubmit} className='block mx-auto border rounded-lg px-5 py-2 my-6'>Upload</button>

      
    </div>
  )
}

export default PostItem
