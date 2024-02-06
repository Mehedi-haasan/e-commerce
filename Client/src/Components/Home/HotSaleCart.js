import { NavLink } from 'react-router-dom';

const HotSaleCart = ({ id, category_id, description, image_url, name, price, standerd_price }) => {
     return (
          <div className='w-full p-2 lg:p-4 rounded-md shadow mx-auto bg-white'>
               <div>{standerd_price && <button className='px-2 rounded-full mb-1 bg-red-500 text-white'>{standerd_price}%</button>}</div>
               <div className='overflow-hidden '>
                    <img src={image_url} alt='image4' className='w-full h-40 md:h-48 lg:h-56 rounded-md hover:scale-125 transition-all duration-1000 cursor-pointer' />
               </div>
               <h1 className='font-semibold py-1 lg:pt-5 text-sm lg:text-lg'>{name}</h1>

               <h2 className='text-sm lg:text-lg py-1 hover:text-red-500 font-semibold flex'>Price:<span className="text-red-500 text-md lg:text-lg pl-1">{price} $</span></h2>
               <div>
                    <NavLink to={`/product/details/${id}`} className='border font-semibold px-2 py-2 text-white bg-[#ECBA20] rounded-lg block w-full mx-auto text-center'>Details</NavLink>
               </div>


          </div>
     );
};
export default HotSaleCart;