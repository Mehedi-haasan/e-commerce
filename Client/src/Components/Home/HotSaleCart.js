import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from "@iconify/react";

import { useDispatch} from 'react-redux'
import { addImage, sendColour, sendData, sendInput, sendSize,PracticeSize,sendrULES} from '../Redux/Actions';
import { useNavigate } from 'react-router-dom';

const HotSaleCart = ({id, heading, image, input, colour, size, price, rating, stock, category, discount,rules}) => {

  const dispatch = useDispatch();
  const details = useNavigate();

    const handleDetails =()=>{
          dispatch(sendData({id, heading, price, rating, stock, category, discount}));
          dispatch(addImage({image}))
          dispatch(sendColour({colour}))
          dispatch(sendSize({size}))
          dispatch(sendrULES({rules}))
          dispatch(sendInput({input}))
          dispatch(PracticeSize({size}));

          if(category === "T-Shirt"){
               details("/productdetails");
          }else if(category === "Watch"){
               details("/watchdetails"); 
          }
          else if(category === "Ladies"){
               details("/ladiesdetails"); 
          }
          else if(category === "Game"){
               details("/gamedetails"); 
          }
          else if(category === "Subscription"){
               details("/subscdetailscard"); 
          }
          
     }


    return (
        <div className='w-full p-2 lg:p-4 rounded-md shadow mx-auto bg-white'>
        <div>{discount && <button className='px-2 rounded-full mb-1 bg-red-500 text-white'>{discount}%</button>}</div>
        <div className='overflow-hidden '>
           <img src={image[0].image} alt='image4' className='w-full h-40 md:h-48 lg:h-56 rounded-md hover:scale-125 transition-all duration-1000 cursor-pointer'/>
        </div>
        <h1 className='font-semibold py-2 lg:pt-5 text-sm lg:text-lg'>{heading}</h1>
        
        <div className="gird grid-cols-12">
           <div className="grid col-span-12 md:col-span-6 pb-2">
               <div className="flex text-right float-right mt-1">
               <Icon icon="solar:star-bold" className="text-[#FFA500] h-[17px] w-[17px] lg:h-5 lg:w-5"/>
               <Icon icon="solar:star-bold" className="text-[#FFA500] h-[17px] w-[17px] lg:h-5 lg:w-5"/>
               <Icon icon="solar:star-bold" className="text-[#FFA500] h-[17px] w-[17px] lg:h-5 lg:w-5"/>
               <Icon icon="solar:star-bold" className="text-[#FFA500] h-[17px] w-[17px] lg:h-5 lg:w-5"/>
               <Icon icon="solar:star-bold" className="text-[#FFA500] h-[17px] w-[17px] lg:h-5 lg:w-5"/>
              </div>
           </div>
           <div className="grid col-span-12 lg:col-span-6">
           <h2 className='text-sm lg:text-lg hover:text-red-500 font-semibold flex'>Price:<span className="text-red-500 text-md lg:text-lg pl-1">{price} $</span></h2>
           </div>
        </div>


        
        {
         stock ? <h3 className='my-1 font-semibold text-sm lg:text-lg flex'><Icon icon="icon-park-solid:correct" className='mt-1 mr-1 text-red-500'/> In Stock</h3>:<h3 className='pb-2 pt-1 font-semibold'>Out of Stock</h3>
        }
        
  
     <div>
       
          <button onClick={handleDetails} className='border font-semibold px-2 py-2 text-white bg-[#ECBA20] rounded-lg block w-full mx-auto text-center'>Details</button> 
       
     </div>

  
</div>
    );
  };
  export default HotSaleCart;