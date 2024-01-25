import React, { useState } from 'react'
// import axios from 'axios'

const EditProfile = () => {
    const [message, setMessage]=useState("")

    const [values, setValues]=useState({
        fname:"",
        lname:"",
        displayName:"",
        email:"",
        password:"",
        npassword:"",
        cnpassword:"",
    })

    const handleSubmit =(e)=>{
        // e.preventDefault();
        // axios.patch('http://localhost:5000/changePassword/',values)
        // .then(res=> {
        //     if(res.data === "Update was successful"){
        //         setValues({displayName:"",email:"",password:"",npassword:"",cnpassword:"",})
        //     }
        //   setMessage(res.data)
        // })
        // .catch(err => setMessage(err))
    }


  return (
    <div className='bg-white'>
       <div className='py-10'>
          <h1 className='pb-10 text-xl md:text-2xl lg:text-4xl font-bold text-center'>Edit Profile</h1>
            <div className='bg-white py-10 w-[95%] lg:w-[60%] mx-auto rounded'>

                <div className='grid grid-cols-12 gap-4 bg-white w-[95%] lg:w-[92%] border-2 rounded py-8 mx-auto'>
                    <div className='grid col-span-12'>
                        <img src='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.834674141.1685085168&semt=ais' alt='' className='h-28 lg:h-36 w-28 lg:w-36 mx-auto rounded-full'/>
                    </div>
                        {/* <div className='grid col-span-12 lg:col-span-6 py-2 px-5'>
                        <h1>First Name</h1>
                        <input type='text' placeholder='First Name' value={values.fname} onChange={(e)=>setValues({...values, fname:e.target.value})} 
                            className='border rounded p-1 focus:outline-none '/>
                        </div> */}

                        {/* <div className='grid col-span-12 lg:col-span-6 py-2 px-5'>
                        <h1>Last Name</h1>
                        <input type='text' placeholder='Last Name' value={values.lname} onChange={(e)=>setValues({...values, lname:e.target.value})} 
                            className='border p-1 focus:outline-none '/>
                        </div> */}

                        <div className='grid col-span-12 py-2 px-5'>
                        <h1>Display Name</h1>
                        <input type='text' placeholder='Display Name' value={values.displayName} onChange={(e)=>setValues({...values, displayName:e.target.value})} 
                            className='border p-1 focus:outline-none '/>
                            <p className='text-sm italic'>This will be how your name will be displayed in the account section and in reviews</p>
                        </div>

                        <div className='grid col-span-12 py-2 px-5'>
                        <h1>Email Address</h1>
                        <input type='text' placeholder="Email *" required value={values.email} onChange={(e)=>setValues({...values, email:e.target.value})} 
                            className='border p-1 focus:outline-none '/>
                        </div>
                </div>

                
                <div className='grid grid-cols-12 mt-6 gap-4 bg-white w-[95%] lg:w-[92%] border-2 rounded py-8 mx-auto'>
                    

                        <div className='grid col-span-12 py-2 px-5'>
                        <h1 className='pb-10 font-bold text-3xl'>Password Change</h1>
                        <h1>Current password (leave blank to leave unchanged)</h1>
                        <input type='password' placeholder='Current password' value={values.password} onChange={(e)=>setValues({...values, password:e.target.value})} 
                            className='border p-1 focus:outline-none '/>
                        </div>

                        <div className='grid col-span-12 py-2 px-5'>
                        <h1>New password (leave blank to leave unchanged)</h1>
                        <input type='password' placeholder='New password' value={values.npassword} onChange={(e)=>setValues({...values, npassword:e.target.value})} 
                            className='border p-1 focus:outline-none '/>
                        </div>

                        <div className='grid col-span-12 py-2 px-5'>
                        <h1>Confirm new password</h1>
                        <input type='password' placeholder="Confirm new password" value={values.cnpassword} onChange={(e)=>setValues({...values, cnpassword:e.target.value})} 
                            className='border p-1 focus:outline-none '/>
                        </div>
                    </div>
                    {
                        message && <h1 className='text-center font-semibold py-4 '>{message}</h1>
                    }
                    <button onClick={handleSubmit} className='ml-[4%] border rounded bg-black hover:bg-red-500 text-white font-semibold py-2 px-6 my-5'>Save Change</button>
                </div>
      </div>
    </div>
  )
}

export default EditProfile
