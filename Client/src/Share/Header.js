import { NavLink,} from "react-router-dom";
import { Icon } from "@iconify/react";
import {useSelector } from 'react-redux'
import { useEffect, useState} from "react";
import axios from "axios";
import { useDispatch} from 'react-redux'
import { loggedOut,loggedIn, nameEmail} from "../Components/Redux/Actions";

const Header = () => {
  const dispatch = useDispatch();
  const [auth, setAuth]=useState(false)
  const [open, setOpen]=useState(false)
  const [contuct, setContuct]=useState(false)
  const [open1, setOpen1]=useState(false)
  const [select, setSelect]=useState("")

  
  const isLoggedIn = useSelector(state => state.loggedIn)
  const length = useSelector(state => state.cartLength)
 

  axios.defaults.withCredentials =true
  useEffect(()=>{
     axios.get('http://localhost:5500')
     .then(res =>{
      if(res.data.Status === "Success"){
        dispatch(loggedIn())
        setAuth(true)
        let name=res.data.name;
        let email = res.data.email;
        dispatch(nameEmail({name,email}))
      }else{
        dispatch(loggedOut())
      }
     })
  },[isLoggedIn])



// const handleLogOut=()=>{
//   axios.get('http://localhost:5500/logout')
//   .then(res=> {
//     if(res.data.Status === "Success"){
//       Location.reload(true);
//       gotologin("/");
//     }else{
//       alert("Error")
//     }  
//   }).catch(err => console.log(err))
//   setAuth(false);
//   setOpen1(!open1)
// }

  const email = useSelector(state => state.email);
  const url=`http://localhost:5500/cart/${email}`;
  const [len, setLen]=useState(0);

  const fetchData=async(url)=>{
    const response = await fetch(url);
    const data = await response.json();
    const len = data.length;
    setLen(len);    
  }

  useEffect(()=>{
    fetchData(url);
  },[]);


  
  return (
<div className="sticky top-0 z-50 shadow">
  
<div className="sticky bg-white top-0 z-50">

<div className="grid grid-cols-12 mx-auto sticky top-0 z-50 w-full lg:w-[96%] bg-white">

  {/* first div */}
  <div className="grid col-span-6 lg:col-span-3 ml-4  lg:my-3 lg:ml-0">
    <Icon onClick={()=>{setOpen1(!open1)}} icon="ep:menu" width="35px" className="lg:hidden cursor-pointer mt-2"/>
    <NavLink to="/" className="px-6 py-2 my-auto text-3xl font-bold hidden lg:block">E-<span className="text-red-500">Commerce</span></NavLink>
  </div>




  {/* 2nd div */}
  <div className="grid col-span-4 hidden my-auto w-full mx-auto lg:block">
    <ul className="flex mx-auto gap-2 xl:gap-4 text-md lg:text-md font-bold">
      <li> 
      <div className="mx-auto">
        <div className="flex"><NavLink onMouseEnter={()=>{setOpen(true)}} onMouseLeave={()=>{setOpen(false)}} onClick={(e)=>{setSelect("Product")}} className={``}>Categories</NavLink><Icon onClick={()=>{setOpen(!open)}} icon="ep:arrow-down" className={`transition-transform mt-1 cursor-pointer duration-300 ${ open ? "rotate-180" : "rotate-0" }`}/></div>
          <div onMouseEnter={()=>{setOpen(true)}} onMouseLeave={()=>{setOpen(false)}} className={`absolute bg-white shadow-xl text-black pt-4 w-[500px] rounded ${open ? "block" : "hidden"}`}>
            <ul className="bg-red-500 w-[150px] text-white px-3">
              <li><NavLink to="/watch" onClick={()=>{setOpen(!open)}} className="flex py-1 text-sm rounded-lg">Smart Watch</NavLink></li>
              <li><NavLink to="/game" onClick={()=>{setOpen(!open)}} className="flex py-1 text-sm rounded-lg">Game</NavLink></li>
              <li><NavLink to="/ladiscornar" onClick={()=>{setOpen(!open)}} className="flex text-sm py-1 rounded-lg">Ladies Corner</NavLink></li>
              <li><NavLink to="/subscription" onClick={()=>{setOpen(!open)}} className="flex text-sm py-1 rounded-lg">Subscriptions</NavLink></li>
              <li><NavLink to="/subscription" onClick={()=>{setOpen(!open)}} className="flex py-1 text-sm rounded-lg">Health & Beauty</NavLink></li>
            </ul>

        </div>
      </div>
      </li>

      <li>
         <div className="mx-auto"><NavLink to="/offer" onClick={(e)=>{setSelect("Home")}} className={``}>Offer</NavLink></div>
      </li>


      <li>
      <div className="mx-auto">
     <div className="flex"><NavLink onMouseEnter={()=>{setContuct(true)}} onMouseLeave={()=>{setContuct(false)}} to="/Contact" className={``}>Support</NavLink><Icon onClick={()=>{setContuct(!contuct)}} icon="ep:arrow-down" className={`transition-transform mt-1 cursor-pointer ml-1 duration-300 ${ contuct ? "rotate-180" : "rotate-0" }`}/></div>
       <div onMouseEnter={()=>{setContuct(true)}} onMouseLeave={()=>{setContuct(false)}}  className={`absolute shadow-xl bg-white text-black p-4 rounded ${contuct ? "block" : "hidden"}`}>
        <ul>
          <li><NavLink to="/help" onClick={()=>{setOpen(!contuct)}} className="flex py-1 text-sm rounded-lg">Help Center</NavLink></li>
          <li><NavLink to="/liveChat" onClick={()=>{setOpen(!contuct)}} className="flex py-1 text-sm rounded-lg">Chat With Us</NavLink></li>
          <li> <NavLink to="/renewSubscription" className="flex text-sm py-1 rounded-lg">Renew Subscription</NavLink></li>
          <li> <NavLink to="/productRequest" onClick={()=>{setOpen(!contuct)}} className="flex text-sm py-1 rounded-lg">Product Request</NavLink> </li>
        </ul>
        </div>
     </div>
      </li>

      <li>
      <div className="mx-auto"><NavLink to="/about" onClick={(e)=>{setSelect("Profile")}} className={`${select === "Profile" && "border-b-2 border-red-500"}`}>About Us</NavLink></div>
      </li>
    </ul>

  </div>




{/* Small size */}
  <div className={`lg:flex absolute lg:static transition-all font-bold ease-in duration-700 top-[43px] text-white bg-[#06BACC] lg:hidden w-[50%] h-[100vh] py-3 pr-3 left-0 space-x-2 space-y-2 ${open1 ? "left-0" : "left-[-750px]"}`}>

    <ul className="ml-4">
      <li className="pt-2 pb-1">
        <div className="flex">
          <NavLink to="/"  onClick={()=>{setOpen1(!open1)}} className="border py-1 w-[100px] px-1 rounded">Home</NavLink>
        </div>
      </li>
      <li className="py-1">
       <div>
        <div className="flex"><NavLink to="/product" onMouseEnter={()=>{setOpen(true)}} onMouseLeave={()=>{setOpen(false)}} onClick={(e)=>{setSelect("Product");setOpen1(!open1)}} className={`border w-[100px]  rounded px-1 py-1 ${select === "Product" && "border-b-2"}`}>Categories</NavLink><Icon onClick={()=>{setOpen(!open)}} icon="ep:arrow-down" width="24px" className={`transition-transform mt-2 cursor-pointer h-3 ml- duration-300 ${ open ? "rotate-180" : "rotate-0" }`}/></div>
          <div onMouseEnter={()=>{setOpen(true)}} onMouseLeave={()=>{setOpen(false)}} className={`absolute shadow ml-24 bg-white text-sm text-black p-2 rounded ${open ? "block" : "hidden"}`}>
              <NavLink to="/watch" onClick={()=>{setOpen(!open);setOpen1(!open1)}} className="flex py-1 rounded-lg">Watch</NavLink>
              <NavLink to="/game" onClick={()=>{setOpen(!open);setOpen1(!open1)}} className="flex py-1 rounded-lg">Game</NavLink>
              <NavLink to="/ladiscornar" onClick={()=>{setOpen(!open);setOpen1(!open1)}} className="flex py-1 rounded-lg">Ladies Corner</NavLink>
              <NavLink to="/subscription" onClick={()=>{setOpen(!open);setOpen1(!open1)}} className="flex py-1 rounded-lg">Subscriptions</NavLink>
              <NavLink to="/subscription" onClick={()=>{setOpen(!open);setOpen1(!open1)}} className="flex py-1 rounded-lg">Health & Beauty</NavLink>
          </div>
       </div>
      </li>
      <li className="py-1">
       <div>
         <div className="flex"><NavLink to="/Contact" onClick={(e)=>{setSelect("Contact");setOpen1(!open1)}} className={`border w-[100px] rounded px-1 py-1 ${select === "Contact" && "border-b-2"}`}>Support</NavLink><Icon onClick={()=>{setContuct(!contuct)}} icon="ep:arrow-down" className={`transition-transform mt-2 cursor-pointer ml-1 duration-300 ${ contuct ? "rotate-180" : "rotate-0" }`}/></div>
           <div className={`absolute ml-24 w-[150px] bg-white text-black p-4 rounded ${contuct ? "block" : "hidden"}`}>
              <NavLink to="/watch" onClick={()=>{setOpen(!contuct)}} className="flex py-1 text-sm rounded-lg">Help Center</NavLink>
              <NavLink to="/livechat" onClick={()=>{setOpen(!contuct)}} className="flex py-1 text-sm rounded-lg">Chat With Us</NavLink>
              
         </div>
        </div>
      </li>
      <li className="py-1">
        <div className="flex">
         <NavLink to="/profile" onClick={()=>{setOpen1(!open1)}} className="border py-1 w-[100px] px-1 rounded">Profile</NavLink>
        </div>
      </li>
      <li className="py-1 flex">
        {
         auth ? <NavLink to='/profile' className='border py-1 text-sm w-[100px] px-1 rounded'>My Account</NavLink>  :<NavLink to="/login" className='border py-1 w-[100px] text-sm px-1 rounded'>LOGIN/REGISTER</NavLink>  
        }
      </li>
    </ul>
  </div>



 {/* 3rd div */}
  <div className="hidden lg:block w-full col-span-3 my-auto ">
    <div className="flex ml-[10%] w-[90%]">
      <input type="text" placeholder="Search for Products" onChange={()=>{}} className="my-2 rounded border-2 p-1 w-full focus:outline-none"/>
      <button className="my-2 rounded-r bg-[#06D889] text-white"><Icon icon="iconamoon:search" width="22px" className="mx-4"/></button>
    </div>
  </div>




    {/* 4th div */}
    <div className="grid col-span-6 lg:col-span-2 mr-3 my-auto float-right">   
       <div className="mt-2">           
       <NavLink to="/cart" className='font-bold text-md float-right px-1 text-black'><span className=" mr-3 float-right text-right">({len})</span><Icon icon="bytesize:cart" width="30px" className="float-right px-1 my-auto" /></NavLink>
       {
        isLoggedIn ? <NavLink to='/profile' className='font-bold text-md xl:text-md float-right mr-2 rounded'>My Account</NavLink>:<NavLink to="/login" className='font-semibold float-right text-md mr-2 my- rounded'>LOGIN/REGISTER</NavLink>  
       }
       </div>
    </div>
</div>


    

</div>

<div className="bg-gray-300">
<div className="flex mx-auto w-[90%] lg:hidden">
      <input type="text" placeholder="Search for Products" onChange={()=>{}} className="my-2 rounded w-full py-1 px-2 focus:outline-none"/>
      <button className="my-2 border bg-[#06D889] text-white"><Icon icon="iconamoon:search" width="22px" className="mx-4"/></button>
</div>
</div>
</div>
   

  )
};

export default Header;


 








// <div className="grid float-right">
//          <button onClick={()=>{setCart(!cart)}} className='font-bold flex text-xl float-right my-1 px-1 text-black'><Icon icon="bytesize:cart" width="35px" className="float-right p-1 my-auto" /><span className="mt-[5px] mr-3">({count})</span></button>
//         </div>