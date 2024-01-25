import { useNavigate } from 'react-router-dom';
import Banner from './Banner';
import HotSale from './HotSale';
import TrendingProduct from './TrendingProduct';
import AllItems from './AllItems';





const Home = () => {

const goTo = useNavigate()
  

  return (
    <div className='mx-auto'>
     <div className='bg-white px-5'><Banner/></div>


    <div className='bg-white px-5'><HotSale/></div>

    <div className='bg-white '>
      <TrendingProduct/>
      </div>

       <div className='bg-white'>
       <div className='grid grid-cols-12 bg-white w-[97%] md:w-[95%] lg:w-[90%] mx-auto py-8 gap-6'>
       <div onClick={()=>{goTo("/offer")}} className='grid col-span-12 lg:col-span-6 overflow-hidden h-72' style={{
          backgroundImage:`url('https://img.freepik.com/premium-photo/man-enjoys-leisurely-walk-winter-day_731930-46330.jpg')`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover'
          }}>
          <button className='text-white bg-black px-3 py-2 block mx-auto h-10 my-auto rounded'>Shop Now</button>
        </div>

        <div onClick={()=>{goTo("/offer")}} className='grid col-span-12 lg:col-span-6 overflow-hidden h-72' style={{
          backgroundImage:`url('https://img.freepik.com/premium-photo/man-enjoys-leisurely-walk-winter-day_731930-46330.jpg')`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover'
          }}>
          <button className='text-white bg-black px-3 py-2 block mx-auto h-10 my-auto rounded'>Shop Now</button>
        </div>
      </div>
       </div>
         <AllItems/>
    </div>
  )
}

export default Home
