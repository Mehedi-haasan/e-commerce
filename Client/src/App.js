import { BrowserRouter, Routes, Route} from "react-router-dom";


import DetailsCard from "./Components/Card/DetailsCard";
import Footer from "./Share/Footer";
import Header from "./Share/Header";
import Registration from "./Components/Login/Registration";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Watch from "./Components/Watches/Watch";
import LadiesCorner from "./Components/Ladies-Corner/LadiesCorner";
import Game from "./Components/Game/Game";
import Subscripyion from "./Components/Subscription/Subscription";
import GiftCard from "./Components/GiftCard/GiftCard";
import ForgetPassword from "./Components/Login/ForgetPassword";
import Profile from "./Components/Profile/Profile";
import ProductDetails from './Components/Products/ProductDetails'

import GameDetails from "./Components/Game/GameDetails"
import Cart from "./Components/Cart/Cart";
import Product from "./Components/Products/Products";
import Contact from "./Components/Contact/Contact";
import Payment2 from "./Components/Payment/Payment2";
import SubscDetailsCard from "./Components/Subscription/SubscDetailsCard";
import WatchDetails from "./Components/Watches/WatchDetails";

import About from "./Components/About/About";
import RenewSubscription from "./Components/Subscription/RenewSubscription";
import Offer from "./Components/Offer/Offer";
import LiveChat from "./Components/LiveChat/LiveChat";
import PrivacyPolicy from "./Components/Privacy/PrivacyPolicy";
import EditProfile from "./Components/Profile/EditProfile";

import PracriceDetailsCard from "./Components/Practice/PracticeDetailsCard";
import Payment from "./Components/Payment/Payment";
import Trail from './Components/Practice/Trail'
import TrailDetails from "./Components/Practice/TrailDetails";
import LadiesCardDetails from "./Components/Ladies-Corner/LadiesCardDetails";
import AllPay from "./Components/Payment/AllPay";
import Bkash from "./Components/Payment/Bkash";
import Nagad from "./Components/Payment/Nagad";
import Rocket from "./Components/Payment/Rocket";
import Upai from "./Components/Payment/Upai";
import ProductReq from "./Components/Products/ProductReq";
import AllProduct from "./Components/Products/AllProduct";



function App() {
  return (
 
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/contact" element={ <Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/payments" element={<Payment2/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/registration" element={<Registration/> }/>
          <Route path="/profile" element={ <Profile/>} />
          <Route path="/details" element={ <DetailsCard/>} /> 
          <Route path="/ladiscornar" element={ <LadiesCorner/> }/>
          <Route path="/game" element={<Game/>}/>
          <Route path="/edit/profile" element={<EditProfile/>}/>
          <Route path="/subscdetailscard" element={<SubscDetailsCard/>}/>
          <Route path="/renewSubscription" element={<RenewSubscription/>}/>
          <Route path="/subscription" element={<Subscripyion/> }/>
          <Route path="/giftcard" element={<GiftCard/>}/>
          <Route path="/forgetpassword" element={<ForgetPassword/> }/>
          <Route path="/gamedetails" element={ <GameDetails/>}/>
          <Route path="/product/details/:id" element={ <ProductDetails/>}/>
          <Route path="/watch" element={ <Watch/> }/>
          <Route path="/watchdetails" element={ <WatchDetails/>}/>
          <Route path="/offer" element={<Offer/> }/>
          <Route path="/PracriceDetailsCard" element={ <PracriceDetailsCard/> }/>
          <Route path="/liveChat" element={ <LiveChat/> }/>
          <Route path="/hodaiPay" element={ <Payment/> }/>
          <Route path="/allpay" element={ <AllPay/> }/>
          <Route path="/bkash" element={ <Bkash/> }/>
          <Route path="/nagad" element={ <Nagad/> }/>
          <Route path="/rocket" element={ <Rocket/> }/>
          <Route path="/upai" element={ <Upai/> }/>
          <Route path="/allproduct" element={ <AllProduct/> }/>
          <Route path="/productrequest" element={ <ProductReq/> }/>
          <Route path="/ladiesdetails" element={<LadiesCardDetails/>}/>
          <Route path="/privacypolicy" element={ <PrivacyPolicy/> }/>
          <Route path="/trail" element={ <Trail/> }/>
          <Route path="/TrailDetails" element={ <TrailDetails/> }/>
        </Routes>
      <Footer/>   
    </BrowserRouter>

  );
}

export default App;
