import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loggedIn } from '../Redux/Actions';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


const Registration = () => {
  const dispatch = useDispatch()
const goToHome=useNavigate();
const [errorMessage, setErrorMessage]=useState("")

const [values, setValues]=useState({
    name:"",
    email:"",
    phone:"",
    password:"",
})



      axios.defaults.withCredentials = true
      const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/user/register',values)
        .then(res=> {
          if(res.data === "Registration Successfull"){
            toast(res.data)
            dispatch(loggedIn())
            goToHome("/")
          }
          else if(res.data === "Email already exist"){
            setErrorMessage(res.data)
          }else{
            setErrorMessage(res.data);
          }
        })
        .catch(err => setErrorMessage(err))
      }



  return (
    <div className='bg-[#CECECE]'>
      <ToastContainer/>

      <h1 className='py-5'>{}</h1>
        <div className='grid grid-cols-12 mx-auto w-[96%] md:w-[80%] lg:w-[60%] mx-auto shadow-2xl bg-white rounded-xl'>
            

            <div className='grid col-span-12 md:col-span-6 lg:border-r-2 my-5 pr-5 w-[90%] mx-auto '>
             <div className='ml-5 md:ml-0'>
                <h1 className='text-center text-xl font-semibold py-6 '>Create your account</h1>
              
                    
               <form>
               <div className='mt-5'>
                    <label className='text-xl font-semibold pt-4'>Name</label>
                    <input type='text' placeholder='Enter your name'
                    required  name='name' id='name' onChange={e=>setValues({...values, name:e.target.value})}
                     className='py-2 px-2 rounded border w-full focus:outline-none'/>
                      {/* {
                          formik.errors.name && <span className='text-red-400 py-1'>{formik.errors.name}</span>
                        } */}
                  </div>

                    <div className='mt-5'>
                        <label className='mt-2 text-xl font-semibold pt-4'>E-mail Address</label>
                        <input type='text' placeholder='Enter your email'
                        required name='email' id='email' onChange={e=>setValues({...values, email:e.target.value})} className='py-2 px-2 rounded border w-full focus:outline-none'/>
                       {
                          errorMessage && <span className='text-red-400 py-1'>{errorMessage}</span>
                         }
                    </div>

                    <div className='mt-5'>
                        <label className='mt-2 text-xl font-semibold pt-4'>Phone</label>
                        <input type='phone' placeholder='Phone'
                        required name='phone' id='phone' onChange={e=>setValues({...values, phone:e.target.value})} className='py-2 px-2 rounded border w-full focus:outline-none'/>
                        {/* {
                          formik.errors.email && <span className='text-red-400 py-1'>{formik.errors.email}</span>
                        } */}
                    </div>

                   <div className='mt-5'>
                    <label className='text-xl font-semibold pt-4'>Password</label>
                      <input type='password' placeholder='Enter your password' required
                           name='password' id='password' onChange={e=>setValues({...values, password:e.target.value})}
                          className='py-2 px-2 rounded border w-full focus:outline-none'/>
                         
                   </div>

                   <p className='pt-3 text-sm'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>

                     
                    <div className='flex my-6 lg:pb-10'>
                        <button type='submit' onClick={handleSubmit} className='border block font-semibold bg-[#1B80E0] text-white  mx-auto px-6 h-10 rounded w-full'>Register</button>
                    </div>
               </form>

           </div>
           </div>
           <div className='grid col-span-12 md:col-span-6 rounded-xl'>
           <div className='my-5 md:mt-20'>
                  <h1 className='text-center font-bold text-xl'>Login</h1>
                   <p className='text-center py-3 lg:py-5'>Login now as a customer</p>
                  <NavLink to="/login" className='block mx-auto py-2 px-6 w-[120px] border bg-red-500 text-center rounded text-white font-semibold'>Login</NavLink>  
               </div>
            </div>
         </div>

 
         <h1 className='py-5'>{}</h1>
    </div>
  )
}

export default Registration
