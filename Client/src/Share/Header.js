import { NavLink, useNavigate, } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux'
import { loggedOut, loggedIn, nameEmail } from "../Components/Redux/Actions";


const Header = () => {
  const dispatch = useDispatch();
  const goTo = useNavigate()
  const [auth, setAuth] = useState(false)
  const [login, setLogin]=useState(true);
  const [open, setOpen] = useState(false)
  const [contuct, setContuct] = useState(false)
  const [open1, setOpen1] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [select, setSelect] = useState("")
  const [watch, setWatch] = useState(false)
  const [game, setGame] = useState(false)
  const [ladies, setLadies]=useState(false);
  const [sub, setSub]=useState(false)


  const [errorMessage, setErrorMessage] = useState("")

  const isLoggedIn = useSelector(state => state.loggedIn)
  const length = useSelector(state => state.cart)





  const [values, setValues] = useState({
    email: "",
    password: "",
    rname:"",
    remail:"",
    rpassword:"",
    rphone:"",
  })




  // axios.defaults.withCredentials = true
  // useEffect(() => {

  //   axios.get('http://localhost:5000')
  //     .then(res => {
  //       if (res.data.Status === "Success") {
  //         dispatch(loggedIn())
  //         setAuth(true)
  //         let name = res.data.name;
  //         let email = res.data.email;
  //         dispatch(nameEmail({ name, email }))
  //       } else {
  //         dispatch(loggedOut())
  //       }
  //     })

  //   const data = localStorage.getItem('data')
  //   console.log(data[0])
  // }, [isLoggedIn])



  axios.defaults.withCredentials = true
  const handleSubmit = (e) => {
    // e.preventDefault();
    // axios.post('http://localhost:5000/login/', values)
    //   .then(res => {
    //     if (res.data === "Success") {
    //       goTo("/")
    //       setAuth(true)
    //       setToggle(false)
    //       dispatch(loggedIn())

    //     } else {
    //       setErrorMessage(res.data);
    //     }
    //   })
    //   .catch(err => setErrorMessage(err))

    const data = localStorage.getItem('data')
    if(data === '1'){
          goTo("/")
          setAuth(true)
          setToggle(false)
          dispatch(loggedIn())
    }

  }


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


  axios.defaults.withCredentials = true
  const handleRegister =(e)=>{
    localStorage.setItem('data',JSON.stringify(1))
    // e.preventDefault();
    // axios.post('http://localhost:5000/user/register',values)
    // .then(res=> {
    //   console.log(res.data)
    //   if(res.data === "Registration Successfull"){
    //     setAuth(true)
    //     setToggle(false)
    //     goTo("/")
    //   }
    //   else if(res.data === "Email already exist"){
    //     setErrorMessage(res.data)
    //   }else{
    //     setErrorMessage(res.data);
    //   }
    // })
    // .catch(err => setErrorMessage(err))
  }



  return (
    <div className="sticky top-0 z-50 shadow">

      <div className="sticky bg-white top-0 z-50">

        <div className="grid grid-cols-12 mx-auto sticky top-0 z-50 w-full lg:w-[96%] bg-white">

          {/* first div */}
          <div className="grid col-span-6 lg:col-span-3 ml-4  lg:my-3 lg:ml-0">
            <NavLink to="/" className="px-1 lg:px-6 py-2 my-auto text-lg lg:text-3xl font-bold"><span className="text-red-500">MahlunShop</span></NavLink>
          </div>




          {/* 2nd div */}
          <div className="grid col-span-4 hidden my-auto w-full mx-auto lg:block">
            <ul className="flex mx-auto gap-2 xl:gap-4 text-sm lg:text-md font-bold">
              <li>
                <div className="mx-auto">
                  <div className="flex"><NavLink onMouseEnter={() => { setOpen(true) }} onMouseLeave={() => { setOpen(false) }} onClick={(e) => { setSelect("Product") }} className={``}>Categories</NavLink><Icon onClick={() => { setOpen(!open) }} icon="ep:arrow-down" className={`transition-transform mt-1 cursor-pointer duration-300 ${open ? "rotate-180" : "rotate-0"}`} /></div>
                  <div onMouseEnter={() => { setOpen(true) }} onMouseLeave={() => { setOpen(false) }} className={`absolute bg-white shadow-xl text-black pt-4 w-[500px] rounded ${open ? "block" : "hidden"}`}>
                    <ul className="bg-[#FF002E] w-[150px] text-white">


                      <li onMouseEnter={() => { setWatch(true) }} onMouseLeave={() => { setWatch(false) }} className="hover:bg-white hover:text-black pl-3 py-1 flex">
                        <NavLink to="/watch" onClick={() => { setOpen(!open) }} className="flex py-1 text-sm rounded-lg">Watch</NavLink>

                        <ul onMouseEnter={() => { setWatch(true) }} onMouseLeave={() => { setWatch(false) }} className={`ml-[138px] shadow-xl bg-white absolute w-[350px] pt-2 text-sm ${watch ? "block" : "hidden"}`}>
                          <li className="pb-1 border-b px-3"><NavLink to="/watch" className="text-black font-semibold">Smart watch</NavLink></li>
                          <li className="py-1 border-b px-3"><NavLink to="/watch" className="text-black font-semibold">Men's Watch</NavLink></li>
                          <li className="py-1 border-b px-3"><NavLink to="/watch" className="text-black font-semibold">Women's Watch</NavLink></li>
                        </ul>
                      </li>


                      <li onMouseEnter={() => { setGame(true) }} onMouseLeave={() => { setGame(false) }} className="hover:bg-white hover:text-black px-3 py-1 flex">
                        <NavLink to="/game" onClick={() => { setOpen(!open) }} className="flex py-1 text-md rounded-lg">Game</NavLink>
                        <ul onMouseEnter={() => { setGame(true) }} onMouseLeave={() => { setGame(false) }} className={`ml-[138px] shadow-xl bg-white absolute w-[350px] pt-2 text-sm ${game ? "block" : "hidden"}`}>
                          <li className="pb-1 border-b px-3"><NavLink to="/game" className="py-1 font-semibold">Pubg</NavLink></li>
                          <li className="py-1 border-b px-3"><NavLink to="/game" className="py-1 font-semibold">Free Fire</NavLink></li>
                        </ul>
                      </li>


                      <li onMouseEnter={() => { setLadies(true) }} onMouseLeave={() => { setLadies(false) }} className="hover:bg-white hover:text-black px-3 py-1 flex">
                        <NavLink to="/ladiscornar" onClick={() => { setOpen(!open) }} className="flex text-sm py-1 rounded-lg">Ladies Corner</NavLink>
                        <ul onMouseEnter={() => { setLadies(true) }} onMouseLeave={() => { setLadies(false) }} className={`ml-[138px] shadow-xl bg-white absolute w-[350px] pt-2 text-sm ${ladies ? "block" : "hidden"}`}>
                          <li className="pb-1 border-b px-3"><NavLink className="py-1 font-semibold text-black">Cosmetices</NavLink></li>
                          <li className="py-1 border-b px-3"><NavLink to="/watch" className="py-1 font-semibold text-black">Watch</NavLink></li>
                        </ul>
                      </li>
                      <li onMouseEnter={() => { setSub(true) }} onMouseLeave={() => { setSub(false) }} className="hover:bg-white hover:text-black px-3 py-1 flex">
                        <NavLink to="/subscription" onClick={() => { setOpen(!open) }} className="flex text-sm py-1 rounded-lg">Subscriptions</NavLink>
                        <ul onMouseEnter={() => { setSub(true) }} onMouseLeave={() => { setSub(false) }} className={`ml-[138px] shadow-xl bg-white absolute w-[350px] text-sm ${sub ? "block" : "hidden"}`}>
                          <li className="pb-1 border-b px-3"><NavLink to="/subscription" className="py-1 font-semibold text-black">Netflix</NavLink></li>
                          <li className="py-1 border-b px-3"><NavLink to="/subscription" className="py-1 font-semibold text-black">Hoichoi</NavLink></li>
                        </ul>
                      </li>
                      <li className="hover:bg-white hover:text-black px-3 py-1"><NavLink to="/trail" onClick={() => { setOpen(!open) }} className="flex py-1 text-sm rounded-lg">Accessories</NavLink></li>
                    </ul>

                  </div>
                </div>
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




          {/* Small size */}
          <div className={`lg:flex absolute lg:static transition-all font-bold ease-in duration-700 top-[43px] text-white bg-[#06BACC] lg:hidden w-[50%] h-[100vh] py-3 pr-3 left-0 space-x-2 space-y-2 ${open1 ? "left-0" : "left-[-750px]"}`}>

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
            <div className="mt-2">
              <NavLink to="/cart" className='font-bold text-md float-right px-1 text-black'><span className=" mr-3 float-right text-right">({length.length})</span><Icon icon="bytesize:cart" width="25px" className="float-right px-1 my-auto" /></NavLink>
              {
                auth ? <NavLink to='/profile' className='font-bold text-sm xl:text-md float-right mr-2 rounded'>My Account</NavLink> : <NavLink onClick={() => { setToggle(!toggle) }} className='font-semibold float-right text-sm lg:text-md mr-2 hidden lg:block rounded'>LOGIN/REGISTER</NavLink>
              }
            </div>
          </div>
        </div>




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
            auth ? <Icon onClick={() => {goTo("/profile")}} icon="line-md:account" width="25px" className="lg:hidden cursor-pointer mt-1 mx-auto" /> : <Icon onClick={() => {setToggle(!toggle) }} icon="line-md:account" width="25px" className="lg:hidden cursor-pointer mt-1 mx-auto" />
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
        { login ? <div className="bg-white">
          <div className="pt-3 grid grid-cols-2 border-b border-black pb-4">
            <div><h1 className="text-black text-lg lg:text-xl pl-5">Sing In</h1></div>
            <div><button onClick={() => { setToggle(!toggle) }} className="text-right text-sm pt-1 float-right flex"><Icon icon="maki:cross" className="pl-1 pr-1 h-6 w-6" />Cross</button></div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className='mx-auto'>
              <div className='mt-5 mx-auto w-[90%]'>
                <h1 className='mt-2 text-sm pt-4'>E-mail Address</h1><br />
                <input type='text' placeholder='Enter your email'
                  required name='email' id='email' onChange={e => setValues({ ...values, email: e.target.value })} className='border py-2 px-1 text-sm rounded w-full focus:outline-none' />
              </div>

              <div className='mt-5 mx-auto w-[90%] '>
                <h1 className='text-sm pt-4'>Password</h1><br />
                <input type='password' placeholder='Enter your password' required
                  name='password' id='password' onChange={e => setValues({ ...values, password: e.target.value })}
                  className='py-2 px-1 text-sm rounded border w-full focus:outline-none' />
                <div>
                  {
                    errorMessage && <span className='text-red-400  pt-1'>{errorMessage}</span>
                  }
                </div>
              </div>
              <div></div>
              <div className='flex pt-6 pb-3'>
                <button type='submit'  className='border block font-semibold bg-[#1B80E0] w-[90%] mx-auto text-white px-8 h-10 rounded'>Log in</button>
              </div>
              <div className="grid grid-cols-2 w-[90%] mx-auto">
                <div><h1 className='text-xs'><input type='checkbox' className='text-xs h-[10px] w-[10px]'/> Remember me</h1></div>
                <div><button to="/forgetpassword" className='text-red-500 text-right text-xs  float-right'>Forget password</button></div>
              </div>

              {/* Social media login */}
              <div className="py-2 grid grid-cols-3 w-[90%] mx-auto">
                <div className="border-t-2 mt-3 border-black"></div>
                <div className=""><h1 className="text-center">Or Login With</h1></div>
                <div className="border-t-2 mt-3 border-black"></div>
              </div>
              <div>
                
              </div>
            </form>

            <div className='border-b border-black pb-4 pt-2'>
              <Icon icon="line-md:account" width="70px" className="mx-auto text-gray-100" />
              <p className='text-center text-sm py-2'>No account Yet?</p>
              <button onClick={()=>{setLogin(false)}} className='block mx-auto border-b text-lg border-red-500'>Create an Account</button>
            </div>
          </div>
        </div> 
        :

        // Registration
        <div className="mx-auto w-[90%]">
            <form>
               <div className='mt-5'>
                    <h1 className='text-sm font-semibold pt-4'>Name</h1>
                    <input type='text' placeholder='Enter your name'
                    required  name='name' id='name' onChange={e=>setValues({...values, rname:e.target.value})}
                     className='py-2 px-2 text-sm rounded border w-full focus:outline-none'/>
                  </div>

                    <div className='mt-5'>
                        <h1 className='mt-2 text-sm font-semibold pt-4'>E-mail Address</h1>
                        <input type='text' placeholder='Enter your email'
                        required name='email' id='email' onChange={e=>setValues({...values, remail:e.target.value})} className='py-2 px-2 rounded border text-sm w-full focus:outline-none'/>
                       {
                          errorMessage && <span className='text-red-400 py-1'>{errorMessage}</span>
                         }
                    </div>

                    <div className='mt-5'>
                        <h1 className='mt-2 text-xl font-semibold pt-4'>Phone</h1>
                        <input type='phone' placeholder='Phone'
                        required name='phone' id='phone' onChange={e=>setValues({...values, rphone:e.target.value})} className='py-2 px-2 rounded border w-full focus:outline-none'/>
                    </div>

                   <div className='mt-5'>
                    <h1 className='text-xl font-semibold pt-4'>Password</h1>
                      <input type='password' placeholder='Enter your password' required
                           name='password' id='password' onChange={e=>setValues({...values, rpassword:e.target.value})}
                          className='py-2 px-2 rounded border w-full focus:outline-none'/>
                         
                   </div>

                   <p className='pt-3 text-sm'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>

                     
                    <div className='flex my-6 lg:pb-10'>
                        <button type='submit' onClick={handleRegister} className='border block font-semibold bg-[#1B80E0] text-white  mx-auto px-6 h-10 rounded w-full'>Register</button>
                    </div>

                    <button onClick={()=>{setLogin(true)}} className='block mx-auto border-b text-lg border-red-500'>Login</button>
               </form>
        </div>
        }
      </div>

    </div>
  )
};

export default Header;











// <div className="grid float-right">
//          <button onClick={()=>{setCart(!cart)}} className='font-bold flex text-xl float-right my-1 px-1 text-black'><Icon icon="bytesize:cart" width="35px" className="float-right p-1 my-auto" /><span className="mt-[5px] mr-3">({count})</span></button>
//         </div>