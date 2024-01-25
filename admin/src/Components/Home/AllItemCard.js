import { useDispatch} from 'react-redux'
import { addImage, sendColour, sendData, sendInput, sendSize,PracticeSize,sendrULES} from '../Redux/Actions';
import { NavLink, useNavigate } from 'react-router-dom';




const AllItemCart = ({id, heading, image, input, colour, size, price, rating, stock, category, discount,rules}) => {
  
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
         <div className='w-full grid grid-cols-12'>
                 <div className='overflow-hidden grid col-span-3'>
                    <img src={image[0].image} alt='image4' className='h-20  w-20 rounded-md hover:scale-125 transition-all duration-1000 cursor-pointer'/>
                 </div>

                 <div className="grid col-span-9 ml-3 lg:ml-5">
                    <div>
                    <NavLink to="/productdetails" onClick={handleDetails} className='font-semibold hover:text-red-500 mt-2 text-md text-gray-700'>{heading}</NavLink>
                   <p className='text-sm text-red-500 flex'>Price:<span className="text-red-500 text-sm lg:text-md pl-1">{price} $</span></p>
                    </div>
                 </div>
        </div>
  )
}

export default AllItemCart

