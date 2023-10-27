import axios from 'axios';
import React, { useState } from 'react'


const TShirt = () => {

 const [finput, setFInput]=useState("");
 const [fsize, setFSize]=useState("")
 const [fcolour, setFColour]=useState("")
 const [fimage, setFImage]=useState("")
 const [message, setMessage]=useState();
 
    const [values, setValues]=useState({
        heading:"",
        image:[],
        input:[],
        size:[],
        price:"",
        rating:"",
        stock:"",
        colour:[],
        category:"Watch",
        discount:"",
    })


    const handleInput =(e)=>{
      setValues({
        ...values,
        input:[...values.input, finput],
      })
      setFInput("");
    }

    const handlecolour =(e)=>{
      setValues({
        ...values,
        colour:[...values.colour, fcolour],
      })
      setFColour("");
    }

    const handleImage =(e)=>{
      setValues({
        ...values,
       image:[...values.image, fimage],
      })
      setFImage("");
    }


    const handletime =(e)=>{
      setValues({
        ...values,
        size:[...values.size, fsize],
      })
      setFSize("");
    }

    



    const handleSubmit = (e)=>{
      e.preventDefault();
      axios.post('http://localhost:5500/createpicture/',values)
      .then(res=> {
        if(res.data === "Data Post Successfull"){
          setMessage(res.data)
        }else{
          
        }
      })
      .catch(err => console.log(err))
      

      // var formData = new FormData();
      // formData.append("image",  values.image);
      // formData.append("size",  values.size);
      // formData.append("input",  values.input);
      // formData.append("colour",  values.colour);
      // formData.append("heading",  values.heading);
      // formData.append("category",  values.category);
      // formData.append("stock",  values.stock);
      // formData.append("price",  values.price);
      // formData.append("discount",  values.discount);
      // formData.append("rating",  values.rating);
      // const config = {
      //     headers: {
      //                'Content-type': 'multipart/form-data'
      //              },
      // }
     
      // const res = await axios.post("http://localhost:5500/createpicture", formData,config);
      // console.log(res.data); 
    }



const [ginfo, setGinfo]=useState(false);
const [att_varient, setAttVarient]=useState(false);
const [salse, setSalse]=useState(false);
const [purchase, setPurchase]=useState(false);
const [inventory, setInventory]=useState(false);
const [account, setAccount]=useState(false);



const handleDelete =(e)=>{
      
}

  return (
    <div className='w-full bg-white mx-auto'>

        <h1 className='text-center text-3xl font-bold py-5'>Post Item</h1>
       <div className='w-[80%] mx-auto py-3'>
         <h1 className='text-xl font-bold py-2'>Product Name</h1>
         <input placeholder='Enter your product name' name='product' onChange={(e)=>{}} className='focus:outline-none w-[400px] border p-1 rounded'/>
       </div>
       <div className='w-[80%] mx-auto py-3'>
         <button onClick={()=>{setGinfo(true);setAttVarient(false);setSalse(false);setPurchase(false);setInventory(false);setAccount(false)}} className='border-y-2 border px-4 py-1 focus:border-t-red-500 focus:border-b-0'>General Information</button>
         <button onClick={()=>{setGinfo(false);setAttVarient(true);setSalse(false);setPurchase(false);setInventory(false);setAccount(false)}} className='border-y-2 border px-4 py-1 focus:border-t-red-500 focus:border-b-0'>Attribute & Varient</button>
         <button onClick={()=>{setGinfo(false);setAttVarient(false);setSalse(true);setPurchase(false);setInventory(false);setAccount(false)}} className='border-y-2 border px-4 py-1 focus:border-t-red-500 focus:border-b-0'>Sales</button>
         <button onClick={()=>{setGinfo(false);setAttVarient(false);setSalse(false);setPurchase(true);setInventory(false);setAccount(false)}} className='border-y-2 border px-4 py-1 focus:border-t-red-500 focus:border-b-0'>Purchase</button>
         <button onClick={()=>{setGinfo(false);setAttVarient(false);setSalse(false);setPurchase(false);setInventory(true);setAccount(false)}} className='border-y-2 border px-4 py-1 focus:border-t-red-500 focus:border-b-0'>Inventory</button>
         <button onClick={()=>{setGinfo(false);setAttVarient(false);setSalse(false);setPurchase(false);setInventory(false);setAccount(true)}} className='border-y-2 border px-4 py-1 focus:border-t-red-500 focus:border-b-0'>Accounting</button>
       </div>
  {
    ginfo && <div className='grid grid-cols-12 w-[80%] mx-auto py-6'>
      <div className='grid col-span-4'>
       <h1 className='font-semibold py-1'>Attribute</h1>
      </div>
      
      <div className='grid col-span-4'>
       <h1 className='font-semibold py-1'>Value</h1>
      </div>

      <div className='grid col-span-4'>
       <h1 className='text-right font-semibold py-1'>Configure</h1>
      </div>
    </div>
  }




    {
      att_varient && <div className='grid grid-cols-12 w-[80%] mx-auto py-6'>
      <div className='grid col-span-4'>
       <h1 className='font-semibold py-1'>Attribute</h1>
      </div>
      
      <div className='grid col-span-4'>
       <h1 className='font-semibold py-1'>Value</h1>
      </div>

      <div className='grid col-span-4'>
       <h1 className='text-right font-semibold py-1'>Configure</h1>
      </div>
  </div>
    }


{
      salse && <div className='grid grid-cols-12 w-[80%] mx-auto py-6'>
      <div className='grid col-span-4'>
       <h1 className='font-semibold py-1'>Attribute</h1>
      </div>
      
      <div className='grid col-span-4'>
       <h1 className='font-semibold py-1'>Value</h1>
      </div>

      <div className='grid col-span-4'>
       <h1 className='text-right font-semibold py-1'>Configure</h1>
      </div>
  </div>
    }


{
      purchase && <div className='grid grid-cols-12 w-[80%] mx-auto py-6'>
      <div className='grid col-span-4'>
       <h1 className='font-semibold py-1'>Attribute</h1>
      </div>
      
      <div className='grid col-span-4'>
       <h1 className='font-semibold py-1'>Value</h1>
      </div>

      <div className='grid col-span-4'>
       <h1 className='text-right font-semibold py-1'>Configure</h1>
      </div>
  </div>
    }


{
      inventory && <div className='grid grid-cols-12 w-[80%] mx-auto py-6'>
      <div className='grid col-span-4'>
       <h1 className='font-semibold py-1'>Attribute</h1>
      </div>
      
      <div className='grid col-span-4'>
       <h1 className='font-semibold py-1'>Value</h1>
      </div>

      <div className='grid col-span-4'>
       <h1 className='text-right font-semibold py-1'>Configure</h1>
      </div>
  </div>
    }


{
      account && <div className='grid grid-cols-12 w-[80%] mx-auto py-6'>
      <div className='grid col-span-4'>
       <h1 className='font-semibold py-1'>Attribute</h1>
      </div>
      
      <div className='grid col-span-4'>
       <h1 className='font-semibold py-1'>Value</h1>
      </div>

      <div className='grid col-span-4'>
       <h1 className='text-right font-semibold py-1'>Configure</h1>
      </div>
  </div>
    }


    </div>
  )
}

export default TShirt
