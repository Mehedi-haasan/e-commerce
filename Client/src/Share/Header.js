import { NavLink, useNavigate, } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { loggedOut, loggedIn, nameEmail } from "../Components/Redux/Actions";
import logo from "../Logo/Mahlun.PNG"
import CategoryShow from "./CategoryShow";
import Login from "../Components/Login/Login";
import Registration from "../Components/Login/Registration";


const Header = () => {
  const dispatch = useDispatch();
  const goTo = useNavigate()
  const [auth, setAuth] = useState(false)
  const [login, setLogin] = useState(true);
  const [open, setOpen] = useState(false)
  const [contuct, setContuct] = useState(false)
  const [open1, setOpen1] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [select, setSelect] = useState("")

  const [accessories, setAccessories] = useState(false)


  const isLoggedIn = useSelector(state => state.loggedIn)
  const length = useSelector(state => state.cart)





  const [values, setValues] = useState({
    email: "",
    password: "",
    rname: "",
    remail: "",
    rpassword: "",
    rphone: "",
  })






  const handleSubmit = (e) => {


    const data = localStorage.getItem('data')
    if (data === '1') {
      goTo("/")
      setAuth(true)
      setToggle(false)
      dispatch(loggedIn())
    }

  }





  const handleRegister = (e) => {
    localStorage.setItem('data', JSON.stringify(1))

  }



  return (
    <div className="sticky top-0 z-50 shadow">

      <div className="sticky bg-white top-0 z-50">

        <div className="grid grid-cols-12 relative mx-auto sticky top-0 z-50 w-full lg:w-[96%] bg-white">

          {/* first div */}
          <div className="grid col-span-6 lg:col-span-3  lg:my-3 lg:ml-0">
            <NavLink to="/"><img alt="" className="h-12" src={logo} /></NavLink>
          </div>




          {/* 2nd div */}
          <div className="grid col-span-4 hidden my-auto w-full mx-auto lg:block">
            <ul className="flex mx-auto  gap-2 xl:gap-4 text-sm lg:text-md font-bold mt-7">

              <li className="">
                <div className="flex relative"><NavLink onMouseEnter={() => { setAccessories(true) }} onMouseLeave={() => { setAccessories(false) }} to="/Contact" className={` pb-8`}>Accessories</NavLink><Icon onClick={() => { setAccessories(!accessories) }} icon="ep:arrow-down" className={`transition-transform mt-1 cursor-pointer ml-1 duration-300 ${accessories ? "rotate-180" : "rotate-0"}`} /></div>
              </li>

              <li>
                <div className="mx-auto"><NavLink to="/offer" onClick={(e) => { setSelect("Home") }} className={``}>Offer</NavLink></div>
              </li>


              <li>
                <div className="mx-auto">
                  <div className="flex"><NavLink onMouseEnter={() => { setContuct(true) }} onMouseLeave={() => { setContuct(false) }} to="/Contact" className={``}>Support</NavLink><Icon onClick={() => { setContuct(!contuct) }} icon="ep:arrow-down" className={`transition-transform mt-1 cursor-pointer ml-1 duration-300 ${contuct ? "rotate-180" : "rotate-0"}`} /></div>
                  <div onMouseEnter={() => { setContuct(true) }} onMouseLeave={() => { setContuct(false) }} className={`absolute shadow-xl bg-white text-black p-4 rounded ${contuct ? "block" : "hidden"}`}>
                    <ul>
                      <li><NavLink to="/help" onClick={() => { setOpen(!contuct) }} className="flex py-1 text-sm rounded-lg">Help Center</NavLink></li>
                      <li><NavLink to="/liveChat" onClick={() => { setOpen(!contuct) }} className="flex py-1 text-sm rounded-lg">Chat With Us</NavLink></li>
                      <li> <NavLink to="/renewSubscription" className="flex text-sm py-1 rounded-lg">Renew Subscription</NavLink></li>
                      <li> <NavLink to="/productrequest" onClick={() => { setOpen(!contuct) }} className="flex text-sm py-1 rounded-lg">Product Request</NavLink> </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <div className="mx-auto"><NavLink to="/about" onClick={(e) => { setSelect("Profile") }} className={`${select === "Profile" && "border-b-2 border-red-500"}`}>About Us</NavLink></div>
              </li>
            </ul>

          </div>


          {/* 3rd div */}
          <div className="hidden lg:block w-full col-span-3 my-auto ">
            <div className="flex ml-[10%] w-[90%]">
              <input type="text" placeholder="Search for Products" onChange={() => { }} className="my-2 rounded border-2 p-1 w-full focus:outline-none" />
              <button className="my-2 rounded-r bg-[#06D889] text-white"><Icon icon="iconamoon:search" width="22px" className="mx-4" /></button>
            </div>
          </div>




          {/* 4th div */}
          <div className="grid col-span-6 lg:col-span-2 mr-3 my-auto float-right">
            <div className="">
              <NavLink to="/cart" className='font-bold text-md  float-right px-1 text-black'><span className=" mr-3 float-right text-right">({length.length})</span><Icon icon="bytesize:cart" width="25px" className="float-right px-1 my-auto" /></NavLink>
              {
                auth ? <NavLink to='/profile' className='font-bold mt-1 text-sm xl:text-md float-right mr-2 rounded'>My Account</NavLink> : <NavLink onClick={() => { setToggle(!toggle) }} className='font-semibold mt-1 float-right text-sm lg:text-md mr-2 hidden lg:block rounded'>LOGIN/REGISTER</NavLink>
              }
            </div>
          </div>
        </div>


        {/* CategoryShow */}
        <div onMouseEnter={() => { setAccessories(true) }} onMouseLeave={() => { setAccessories(false) }} className={`absolute w-full shadow-xl text-white rounded ${accessories ? "block" : "hidden"}`}>
          <CategoryShow />
        </div>





        {/* Small size */}
        {/* <div className={`lg:flex absolute lg:static transition-all font-bold ease-in duration-700 top-[43px] text-white bg-[#06BACC] lg:hidden w-[50%] h-[100vh] py-3 pr-3 left-0 space-x-2 space-y-2 ${open1 ? "left-0" : "left-[-750px]"}`}>

            <ul className="">
              <li className="pt-2 pb-1 border-b">
                <div className="flex ">
                  <NavLink to="/" onClick={() => { setOpen1(!open1) }} className="py-1 ml-4 w-[100px] px-1 rounded">Home</NavLink>
                </div>
              </li>

              <li className="py-1 border-b">
                <div>
                  <div className="flex"><NavLink to="/product" onMouseEnter={() => { setOpen(true) }} onMouseLeave={() => { setOpen(false) }} onClick={(e) => { setSelect("Product"); setOpen1(!open1) }} className={`w-[100px]  rounded px-1 ml-4 py-1 ${select === "Product" && "border-b"}`}>Categories</NavLink><Icon onClick={() => { setOpen(!open) }} icon="ep:arrow-down" width="24px" className={`transition-transform mt-2 cursor-pointer h-3 ml- duration-300 ${open ? "rotate-180" : "rotate-0"}`} /></div>
                  <div onMouseEnter={() => { setOpen(true) }} onMouseLeave={() => { setOpen(false) }} className={`absolute shadow ml-24 bg-white text-sm text-black p-2 rounded ${open ? "block" : "hidden"}`}>
                    <NavLink to="/watch" onClick={() => { setOpen(!open); setOpen1(!open1) }} className="flex py-1 rounded-lg">Watch</NavLink>
                    <NavLink to="/game" onClick={() => { setOpen(!open); setOpen1(!open1) }} className="flex py-1 rounded-lg">Game</NavLink>
                    <NavLink to="/ladiscornar" onClick={() => { setOpen(!open); setOpen1(!open1) }} className="flex py-1 rounded-lg">Ladies Corner</NavLink>
                    <NavLink to="/subscription" onClick={() => { setOpen(!open); setOpen1(!open1) }} className="flex py-1 rounded-lg">Subscriptions</NavLink>
                    <NavLink to="/subscription" onClick={() => { setOpen(!open); setOpen1(!open1) }} className="flex py-1 rounded-lg">Health & Beauty</NavLink>
                  </div>
                </div>
              </li>

              <li className="py-1 border-b">
                <div>
                  <div className="flex"><NavLink to="/Contact" onClick={(e) => { setSelect("Contact"); setOpen1(!open1) }} className={`w-[100px] rounded px-1 ml-4 py-1 ${select === "Contact" && "border-"}`}>Support</NavLink><Icon onClick={() => { setContuct(!contuct) }} icon="ep:arrow-down" className={`transition-transform mt-2 cursor-pointer ml-1 duration-300 ${contuct ? "rotate-180" : "rotate-0"}`} /></div>
                  <div className={`absolute ml-24 w-[150px] bg-white text-black p-4 rounded ${contuct ? "block" : "hidden"}`}>
                    <NavLink to="/watch" onClick={() => { setOpen(!contuct) }} className="flex py-1 text-sm rounded-lg">Help Center</NavLink>
                    <NavLink to="/livechat" onClick={() => { setOpen(!contuct) }} className="flex py-1 text-sm rounded-lg">Chat With Us</NavLink>

                  </div>
                </div>
              </li>
              <li className="py-1 border-b">
                <div className="flex">
                  <NavLink to="/profile" onClick={() => { setOpen1(!open1) }} className="ml-4 py-1 w-[100px] px-1 rounded">Profile</NavLink>
                </div>
              </li>
              <li className="py-1 flex border-b">
                {
                  auth ? <NavLink to='/profile' className='ml-4 py-1 text-sm w-[100px] px-1 rounded'>My Account</NavLink> : <NavLink to="/login" onClick={() => { setSelect(!toggle) }} className='ml-4 py-1 w-[100px] text-sm px-1 rounded'>LOGIN/REGISTER</NavLink>
                }
              </li>
            </ul>
          </div> */}








      </div>

      <div className="bg-gray-300">
        <div className="flex mx-auto w-[90%] lg:hidden">
          <input type="text" placeholder="Search for Products" onChange={() => { }} className="my-2 rounded w-full py-1 px-2 focus:outline-none" />
          <button className="my-2 border bg-[#06D889] text-white"><Icon icon="iconamoon:search" width="22px" className="mx-4" /></button>
        </div>
      </div>

      <div className="grid grid-cols-12 bg-white shadow-xl fixed bottom-0 lg:hidden justify-center w-full">
        <div className="mx-auto col-span-3">
          <Icon onClick={() => { goTo("/") }} icon="bi:shop" width="25px" className="lg:hidden cursor-pointer mx-auto mt-1" />
          <p className="text-xs ">Shop</p>
        </div>
        <div className="mx-auto col-span-3">
          {
            auth ? <Icon onClick={() => { goTo("/profile") }} icon="line-md:account" width="25px" className="lg:hidden cursor-pointer mt-1 mx-auto" /> : <Icon onClick={() => { setToggle(!toggle) }} icon="line-md:account" width="25px" className="lg:hidden cursor-pointer mt-1 mx-auto" />
          }
          <p className="text-xs ">Account</p>
        </div>

        <div className="mx-auto col-span-3">

          <h1 className="flex text-center"><Icon onClick={() => { goTo("/cart") }} icon="bytesize:cart" width="28px" className="lg:hidden mx-auto cursor-pointer mt-1" />({length.length})</h1>
          <p className="text-xs ml-1">Cart</p>
        </div>

        <div className="mx-auto col-span-3">
          <Icon onClick={() => { setOpen1(!open1) }} icon="ep:menu" width="25px" className="lg:hidden cursor-pointer mx-auto mt-1" />
          <p className="text-xs ">Menu</p>
        </div>
      </div>










      {/* Small size login */}
      <div className={`static absolute bg-white transition-all font-bold ease-in duration-700 top-[43px] lg:top-[75px] z-50 shadow-xl float-right  w-[60%] lg:w-[400px] h-[100vh] py-3 pr-3 right-0 space-x-2 space-y-2 ${toggle ? "block" : "hidden"}`}>
        {login ? <Login isLoggedIn={()=>{setLogin(!login)}}/>
          :

          // Registration
          <Registration isLoggedIn={()=>{setLogin(!login)}}/>
        }
      </div>

    </div>
  )
};

export default Header;











// <div className="grid float-right">
//          <button onClick={()=>{setCart(!cart)}} className='font-bold flex text-xl float-right my-1 px-1 text-black'><Icon icon="bytesize:cart" width="35px" className="float-right p-1 my-auto" /><span className="mt-[5px] mr-3">({count})</span></button>
//         </div>