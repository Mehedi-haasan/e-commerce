import axios from 'axios';
import React, { useState } from 'react'


const TShirt = () => {
    const [values, setValues]=useState({
        productName:"",
        ProductTemplateName:'',
        ProductTemplateDesc:'',
        ProductTemplateCategoryId:'',
        ProductAttributeTemplateId:"",
        ProductAttributeName:"",
        ProductAttributeDatatype:"",
        ProductAttributeValuesAttributeId:'',
        ProductAttributeValuesValue:"",
        discount:"",
    })

    const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(values)
      // axios.post('http://localhost:5500/createpicture/',values)
      // .then(res=> {
      //   if(res.data === "Data Post Successfull"){
      //     // setMessage(res.data)
      //   }else{
          
      //   }
      // })
      // .catch(err => console.log(err))
      

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



const [ProductTemplates, setProductTemplates]=useState(false);
const [ProductAttribute, setProductAttribute]=useState(false);
const [ProductAttributeValues, setProductAttributeValues]=useState(false);
const [ProductVariant, setProductVariant]=useState(false);
const [product_variant_attribute_values, setproduct_variant_attribute_values]=useState(false);
const [account, setAccount]=useState(false);



// const handleDelete =(e)=>{
      
// }

  return (
    <div className='w-full bg-white mx-auto'>

        <h1 className='text-center text-3xl font-bold py-5'>Post Item</h1>
       <div className='w-[80%] mx-auto py-3'>
         <h1 className='text-xl font-bold py-2'>Product Name</h1>
         <input placeholder='Enter your product name' name='product' onChange={(e)=>{setValues({...values,productName:e.target.value})}} className='focus:outline-none w-[400px] border p-1 rounded'/>
       </div>
       <div className='w-[80%] mx-auto py-3'>
         <button onClick={()=>{setProductTemplates(true);setProductAttribute(false);setProductAttributeValues(false);setProductVariant(false);setproduct_variant_attribute_values(false);setAccount(false)}} className='border-y-2 border px-4 py-1 focus:border-t-red-500 focus:border-b-0'>Product Templates</button>
         <button onClick={()=>{setProductTemplates(false);setProductAttribute(true);setProductAttributeValues(false);setProductVariant(false);setproduct_variant_attribute_values(false);setAccount(false)}} className='border-y-2 border px-4 py-1 focus:border-t-red-500 focus:border-b-0'>Product Attribute</button>
         <button onClick={()=>{setProductTemplates(false);setProductAttribute(false);setProductAttributeValues(true);setProductVariant(false);setproduct_variant_attribute_values(false);setAccount(false)}} className='border-y-2 border px-4 py-1 focus:border-t-red-500 focus:border-b-0'>Product Attribute Values</button>
         <button onClick={()=>{setProductTemplates(false);setProductAttribute(false);setProductAttributeValues(false);setProductVariant(true);setproduct_variant_attribute_values(false);setAccount(false)}} className='border-y-2 border px-4 py-1 focus:border-t-red-500 focus:border-b-0'>Product Variant</button>
         <button onClick={()=>{setProductTemplates(false);setProductAttribute(false);setProductAttributeValues(false);setProductVariant(false);setproduct_variant_attribute_values(true);setAccount(false)}} className='border-y-2 border px-4 py-1 focus:border-t-red-500 focus:border-b-0'>product_variant_attribute_values</button>
         <button onClick={()=>{setProductTemplates(false);setProductAttribute(false);setProductAttributeValues(false);setProductVariant(false);setproduct_variant_attribute_values(false);setAccount(true)}} className='border-y-2 border px-4 py-1 focus:border-t-red-500 focus:border-b-0'>Accounting</button>
       </div>

      
  {
    ProductTemplates && <div className='grid grid-cols-12 w-[80%] mx-auto py-6'>
      <div className='grid col-span-4'>
        <h1 className='font-semibold py-1'>Name</h1> 
        <input type='text' placeholder='Name' onChange={(e)=>{setValues({...values, ProductTemplateName:e.target.value})}} className='focus:outline-none border rounded p-1 w-[350px]'/>
      </div>
      
      <div className='grid col-span-4'>
        <h1 className='font-semibold py-1'>Description</h1>
        <input type='text' placeholder='Description' onChange={(e)=>{setValues({...values, ProductTemplateDesc:e.target.value})}} className='focus:outline-none border rounded p-1 w-[350px]'/>
      </div>

      <div className='grid col-span-4'>
        <h1 className='font-semibold py-1'>Category Id</h1>
        <input type='text' placeholder='Category Id' onChange={(e)=>{setValues({...values, ProductTemplateCategoryId:e.target.value})}} className='focus:outline-none border rounded p-1 w-[350px]'/>
      </div>
    </div>
  }




    {
      ProductAttribute && <div className='grid grid-cols-12 w-[80%] mx-auto py-6'>
      <div className='grid col-span-4'>
        <h1 className='font-semibold py-1'>Template Id</h1> 
        <input type='text' placeholder='Template Id' onChange={(e)=>{setValues({...values,ProductAttributeTemplateId:e.target.value})}} className='focus:outline-none border rounded p-1 w-[350px]'/>
      </div>
      
      <div className='grid col-span-4'>
        <h1 className='font-semibold py-1'>Name</h1>
        <input type='text' placeholder='Name' onChange={(e)=>{setValues({...values,ProductAttributeName:e.target.value})}} className='focus:outline-none border rounded p-1 w-[350px]'/>
      </div>

      <div className='grid col-span-4'>
        <h1 className='font-semibold py-1'>Datatype</h1>
        <input type='text' placeholder='Datatype' onChange={(e)=>{setValues({...values,ProductAttributeDatatype:e.target.value})}} className='focus:outline-none border rounded p-1 w-[350px]'/>
      </div>
  </div>
    }


{
      ProductAttributeValues && <div className='grid grid-cols-12 w-[80%] mx-auto py-6'>
      <div className='grid col-span-6'>
        <h1 className='font-semibold py-1'>Attribute Id</h1> 
        <input type='text' placeholder='Attribute Id' onChange={(e)=>{setValues({...values, ProductAttributeValuesAttributeId:e.target.value})}} className='focus:outline-none border rounded p-1 w-[350px]'/>
      </div>
      
      <div className='grid col-span-6'>
        <h1 className='font-semibold py-1'>Value</h1>
        <input type='text' placeholder='Description' onChange={(e)=>{setValues({...values, ProductAttributeValuesValue:e.target.value})}} className='focus:outline-none border rounded p-1 w-[350px]'/>
      </div>

      {/* <div className='grid col-span-4'>
        <h1 className='font-semibold py-1'>Category Id</h1>
        <input type='text' placeholder='Category Id' className='focus:outline-none border rounded p-1 w-[350px]'/>
      </div> */}
  </div>
    }


{
      ProductVariant && <div className='grid grid-cols-12 w-[80%] mx-auto py-6'>
      <div className='grid col-span-4'>
        <h1 className='font-semibold py-1'>Template Id</h1> 
        <input type='text' placeholder='Template Id' className='focus:outline-none border rounded p-1 w-[350px]'/>
      </div>
      
      <div className='grid col-span-4'>
        <h1 className='font-semibold py-1'>Name</h1>
        <input type='text' placeholder='Name' className='focus:outline-none border rounded p-1 w-[350px]'/>
      </div>

      <div className='grid col-span-4'>
        <h1 className='font-semibold py-1'>Description</h1>
        <input type='text' placeholder='Description' className='focus:outline-none border rounded p-1 w-[350px]'/>
      </div>
  </div>
    }


{
      product_variant_attribute_values && <div className='grid grid-cols-12 w-[80%] mx-auto py-6'>
      <div className='grid col-span-4'>
        <h1 className='font-semibold py-1'>Varient Id</h1> 
        <input type='text' placeholder='Varient Id' className='focus:outline-none border rounded p-1 w-[350px]'/>
      </div>
      
      <div className='grid col-span-4'>
        <h1 className='font-semibold py-1'>Attribute Id</h1>
        <input type='text' placeholder='Attribute Id' className='focus:outline-none border rounded p-1 w-[350px]'/>
      </div>

      <div className='grid col-span-4'>
        <h1 className='font-semibold py-1'>Value Id</h1>
        <input type='text' placeholder='Value Id' className='focus:outline-none border rounded p-1 w-[350px]'/>
      </div>
  </div>
    }


{
      account && <div className='grid grid-cols-12 w-[80%] mx-auto py-6'>
      <div className='grid col-span-4'>
        <h1 className='font-semibold py-1'>Attribute</h1> 
        <input type='text' placeholder='Name' className='focus:outline-none border rounded p-1 w-[350px]'/>
      </div>
      
      <div className='grid col-span-4'>
        <h1 className='font-semibold py-1'>Description</h1>
        <input type='text' placeholder='Description' className='focus:outline-none border rounded p-1 w-[350px]'/>
      </div>

      <div className='grid col-span-4'>
        <h1 className='font-semibold py-1'>Category Id</h1>
        <input type='text' placeholder='Category Id' className='focus:outline-none border rounded p-1 w-[350px]'/>
      </div>
  </div>
    }



      <div className='py-20'><button onClick={handleSubmit} className='block mx-auto border rounded px-5 py-2 font-semibold'>Submit</button></div>
    </div>
  )
}

export default TShirt
