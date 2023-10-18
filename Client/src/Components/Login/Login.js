import { NavLink,useNavigate } from 'react-router-dom';
import React, { useState} from 'react'
import axios from 'axios'
import { useDispatch} from 'react-redux'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loggedIn } from '../Redux/Actions';


const Login = () => {
  const dispatch = useDispatch();
  const goToHome=useNavigate();
  
  const [values, setValues]=useState({
         email:"",
         password:"",
  })

const [errorMessage, setErrorMessage]=useState("")

    axios.defaults.withCredentials =true
      const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5500/login/',values)
        .then(res=> {
          console.log(res)
          if(res.data.Status === "Success"){
            goToHome("/")
            dispatch(loggedIn())
            toast("Login Successfull")
          }else{
            setErrorMessage(res.data.Message);
          }
        })
        .catch(err => setErrorMessage(err))
        
      }



  return (
    <div className='bg-white'>
      <ToastContainer/>
      <div className='bg-'>
        <h1 className='py-5'>{}</h1>
        <div className='grid grid-cols-12 mx-auto w-[96%] md:w-[80%] lg:w-[75%] mx-auto bg-white rounded-xl'>
          
            <div className='grid col-span-12 md:col-span-6 w-[90%] mx-auto pr-5 lg:border-r-2 my-5'>
           <div className='ml-5 md:ml-0'>
                <h1 className='text-center text-2xl font-bold  lg:py-6 '>Login your account</h1>
                    
                 

                      <form onSubmit={handleSubmit} className='mx-auto'>
                        <div className='mt-5'>
                        <label className='mt-2 text-xl font-semibold pt-4'>E-mail Address</label><br/>
                        <input type='text' placeholder='Enter your email'
                        required name='email' id='email' onChange={e=>setValues({...values, email:e.target.value})} className='border py-2 px-2 rounded w-[80%] focus:outline-none'/>
                        {/* {
                          formik.errors.email && <span className='text-red-400 py-1'>{formik.errors.email}</span>
                        } */}
                        </div>

                        <div className='mt-5'>
                        <label className='text-xl font-semibold pt-4'>Password</label><br/>
                          <input type='password' placeholder='Enter your password' required
                           name='password' id='password' onChange={e=>setValues({...values, password:e.target.value})} 
                          className='py-2 px-2 rounded border w-[80%] focus:outline-none'/>
                        <div>
                        {
                          errorMessage && <span className='text-red-400  pt-1'>{errorMessage}</span>
                         }
                        </div>
                        </div>
                        <div></div>
                        <div className='flex py-6'>
                            <button type='submit' className='border block font-semibold bg-[#1B80E0] w-[80%] text-white px-8 h-10 rounded'>Log in</button>
                        </div>
                      </form>
                     <div className='grid grid-cols-12'>
                       <div className='grid col-span-5'>
                       <h1 className=''><input type='checkbox' className='mt-2'/> Remember me</h1>
                       </div>

                       <div className='grid col-span-7'><NavLink to="/forgetpassword" className='text-red-500 text-right mr-[35%] float-right'>Forget password</NavLink></div>

                     </div>
                     {/* <div className='my-5'>
                      <hr className='text-xl'/><h2 className='font-semibold text-center'>OR LOGIN WITH</h2><hr/>
                     </div> */}
                     {/* <div className='grid grid-cols-12 pb-10'>
                      <div className='grid col-span-12 md:col-span-6'>
                      <button className='mx-auto border flex bg-[#3A74D5] text-white font-semibold rounded py-2 px-5'><Icon icon='flat-color-icons:google' width="24px" className='mr-2 bg-white'/>Login with Google</button>
                      </div>
                      <div className='grid col-span-12 md:col-span-6'>
                        <button className='mx-auto flex border rounded bg-[#334E85] font-semibold text-white py-2 px-5'><Icon icon='icon-park:facebook' width="24px" className='mr-2 bg-white'/>Login with Facebook</button>
                      </div>
                     </div> */}
           </div>
            

           </div>

           <div className='grid col-span-12 md:col-span-6 rounded-xl'>
               <div className='mt-20'>
                  <h1 className='text-center font-bold text-xl'>Register</h1>
                   <p className='text-center py-5'>Register now as a customer</p>
                  <NavLink to="/registration" className='block mx-auto py-2 px-6 w-[120px] border bg-red-500 rounded text-white font-semibold'>Register</NavLink>  
               </div>
            </div>

         </div>
         <h1 className='py-5'>{}</h1>
       </div>
    </div>
  )
}

export default Login
