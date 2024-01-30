import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import {
  addImage,
  sendColour,
  sendData,
  sendInput,
  sendSize,
  PracticeSize,
  sendrULES,
} from "../Redux/Actions";
import { NavLink, useNavigate } from "react-router-dom";

const PracticeCard = ({
  id,
  heading,
  image,
  input,
  colour,
  size,
  price,
  rating,
  stock,
  category,
  discount,
  rules,
}) => {
  const dispatch = useDispatch();
  const details = useNavigate();

  const handleDetails = () => {
    dispatch(
      sendData({ id, heading, price, rating, stock, category, discount })
    );
    dispatch(addImage({ image }));
    dispatch(sendColour({ colour }));
    dispatch(sendSize({ size }));
    dispatch(sendrULES({ rules }));
    dispatch(sendInput({ input }));
    dispatch(PracticeSize({ size }));
    if (category === "T-Shirt") {
      details("/productdetails");
    } else if (category === "Watch") {
      details("/watchdetails");
    } else if (category === "Ladies") {
      details("/ladiesdetails");
    } else if (category === "Game") {
      details("/gamedetails");
    } else if (category === "Subscription") {
      details("/subscdetailscard");
    }
  };

  return (
    <div className="w-full">
      <div>
        {discount && (
          <button className="px-2 rounded-full mb-1 bg-red-500 text-white">
            {discount}%
          </button>
        )}
      </div>
      <div className="overflow-hidden">
        <img
          src={image[0].image}
          alt="image4"
          className="w-full h-40 md:h-48 lg:h-56 rounded-md hover:scale-125 transition-all duration-1000 cursor-pointer"
        />
      </div>
      <h1 className="font-bold mt-2  text-sm">{heading}</h1>
      <h2 className="text-sm py-1 hover:text-red-500 font-semibold flex">Price: {price} $</h2>

      <div>
        <NavLink to={`/productdetails`} className="border font-semibold px-2 py-1.5 text-white bg-[#ECBA20] rounded-lg block w-full mx-auto text-center">Details</NavLink>
      </div>
    </div>
  );
};

export default PracticeCard;
