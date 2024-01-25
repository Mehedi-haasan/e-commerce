import React, { useState } from "react";
import Cart from "../Cart/Cart";
import CartProducts from "../Cart/CartProducts";
import {NavLink, useNavigate} from 'react-router-dom';
import { Icon } from "@iconify/react";
// import axios   from "axios";
import { useDispatch} from 'react-redux'
import { loggedOut } from "../Redux/Actions";


const Profile = () => {
  const dispatch = useDispatch();
  const [joined, setJoined] = useState(false);
  const [image, setImage] = useState("https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.834674141.1685085168&semt=ais");
  const download = useNavigate();
  const editprofile = useNavigate();




  // const handleJoined = () => {
  //   setJoined(true);
  //   setWin(false);
  // };

  const handleLogOut = () =>{
    // axios.get('http://localhost:5000/logout')
    // .then(res=> {
    //   console.log(res.data)
    //   if(res.data === "Success"){
    //     // Location.reload(true);
    //     dispatch(loggedOut())
    //     // gotologin("/");
    //   }else{
    //     alert("Error")
    //   }  
    // }).catch(err => console.log(err))
    // setAuth(false);
    // setOpen1(!open1)
  }

  // const handleWin = () => {
  //   setJoined(false);
  //   setWin(true);
  // };


  return (
    <div className="bg-white">
      <div className="w-[90%] mx-auto py-10">
       
        <div className="grid grid-cols-12 gap-5">
  
          <div className="grid col-span-12 lg:col-span-4 bg-gray-100 rounded border-r-2 font-semibold">
              <h1 className="text-2xl px-5   font-bold py-5">My Account</h1>
              <hr className="w-[96%] mx-auto border "/>
             
                <NavLink to="/profile" className="hover:bg-gray-300 border ml-4 w-[50%] rounded py-1 px-6 my-1">Dashboard</NavLink>
                <NavLink onClick={()=>{setJoined(!joined)}} className="hover:bg-gray-200 border ml-4 w-[50%] rounded py-1 px-6 my-1">Orders</NavLink>
                <NavLink to="/adminpost" className="hover:bg-gray-200 border ml-4 w-[50%] rounded py-1 px-6 my-1">Downloads</NavLink>
                <NavLink to="/adminpost" className="hover:bg-gray-200 border ml-4 w-[50%] rounded py-1 px-6 my-1">Address</NavLink>
                <NavLink to="/edit/profile" className="hover:bg-gray-200 border ml-4 w-[50%] rounded py-1 px-6 my-1">Edit Profile</NavLink>
                <NavLink onClick={handleLogOut}  className="hover:bg-gray-200 border ml-4 w-[50%] rounded py-1 px-6 text-red-500 my-1">LogOut</NavLink>
         
         
          </div>

          
          <div className=" p-3 grid col-span-8 gap-5 bg-gray-100 rounded-md hidden lg:block">
             <div className="grid grid-cols-12 gap-6 my-6">

             <div onClick={()=>{editprofile("/edit/profile")}} className="grid col-span-4 cursor-pointer border-2 shadow bg-white h-36">
                {
                  image ? <img src={image} alt="" className='h-20 w-20 mt-3 mx-auto rounded-full' />  :  <Icon icon="codicon:account" width="70px" className="mx-auto my-auto"/>
                }
                 <button className="text-center border-2 py-1 px-3 rounded-lg  w-[130px] my-2 block mx-auto font-semibold">Edit Profile</button>
              </div>
              <div onClick={()=>{setJoined(true)}} className="grid col-span-4 border-2 shadow cursor-pointer bg-white">
                 <Icon icon="icon-park-outline:transaction-order" width="70px" className="mx-auto my-auto"/>
                 <h1 className="text-center font-semibold">Order</h1>
              </div>
              
              <div className="grid col-span-4 border-2 shadow bg-white cursor-pointer h-36">
                 <Icon icon="mingcute:download-line" width="70px" className="mx-auto my-auto"/>
                 <h1 className="text-center font-semibold">Downloads</h1>
              </div>
              <div className="grid col-span-4 border-2 shadow bg-white cursor-pointer h-36">
                 <Icon icon="entypo:location" width="70px" className="mx-auto my-auto"/>
                 <h1 className="text-center font-semibold">Location</h1>
              </div>
              <div onClick={handleLogOut} className="grid col-span-4 border-2 shadow bg-white cursor-pointer h-36">
                 <Icon icon="uiw:logout" width="65px" className="mx-auto my-auto"/>
                 <h1 className="text-center font-semibold">LogOut</h1>
              </div>
             
             </div>
          </div>
        </div>


        {/* toggle buttons */}
        <div className="flex justify-center space-x-5 mt-10">
         {
          joined &&  <div>
          <h1
            className={`${joined && "border-b-2 border-red-500"}
            uppercase text-2xl `}
            
          >
            Currently Order
          </h1>
        </div>
         }
          {/* <div>
            <button
              className={`uppercase text-2xl ${
                win && "border-b-2 border-red-500"
              }`}
              onClick={handleWin}
            >
              Won Contests
            </button>
          </div> */}
        </div>
      </div>


      <div className={`${joined ? "block" : "hidden"}`}>
        <Cart/>
        <CartProducts/>
      </div>

      {/* <div className={`${win ? "block" : "hidden"}`}>
        <Cart/>
        <CartProducts/>
      </div> */}
      
  
   
    </div>
  );
};

export default Profile;

