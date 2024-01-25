import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const CategoryShow = () => {
    const [state, setState]=useState({
        accessories:false,
        watch:false,
        subscription:false,
        tshirt:false
    })
    const category = [
        {
            id: 1,
            name: "Accessrious",
        },
        {
            id: 2,
            name: "Watch",
        },
        {
            id: 3,
            name: "T-shirt",
        },
        {
            id: 4,
            name: "Subscription",
        },
    ];

    return (
        <div className="">
            <div className="grid grid-cols-12 absolute w-[90%] ml-[5%] shadow">
                <div className="grid col-span-4 bg-[#FF002E] rounded-l">
                    <div>
                    <NavLink onMouseEnter={(e)=>{setState({...state, accessories:true})}} onMouseLeave={(e)=>{setState({...state, accessories:false})}} className="text-white pl-5 py-1 hover:bg-white hover:text-black block font-semibold">Accessories</NavLink>
                    <NavLink onMouseEnter={(e)=>{setState({...state, watch:true})}} onMouseLeave={(e)=>{setState({...state, watch:false})}} className="text-white pl-5 py-1 hover:bg-white hover:text-black block font-semibold">Smart Watch</NavLink>
                    <NavLink onMouseEnter={(e)=>{setState({...state, subscription:true})}} onMouseLeave={(e)=>{setState({...state, subscription:false})}} className="text-white pl-5 py-1 hover:bg-white hover:text-black block font-semibold">Subscription</NavLink>
                    <NavLink onMouseEnter={(e)=>{setState({...state, tshirt:true})}} onMouseLeave={(e)=>{setState({...state, tshirt:false})}} className="text-white pl-5 py-1 hover:bg-white hover:text-black block font-semibold">T-shirt</NavLink>
                    </div>
                </div>

                <div className="grid col-span-8 bg-white rounded-r">

                    <div className={`grid grid-cols-2 ${state.watch ? "":"hidden"}`}>
                        {category.map((data) => {
                            return (
                                <div>
                                    <NavLink className="block font-semibold">{data.name}</NavLink>
                                </div>
                            );
                        })}
                    </div>


                    <div className={`grid grid-cols-2 ${state.subscription ? "":"hidden"}`}>
                        {category.map((data) => {
                            return (
                                <div>
                                    <NavLink className="block font-semibold">{data.name}</NavLink>
                                </div>
                            );
                        })}
                    </div>


                    <div className={`grid grid-cols-2 ${state.accessories ? "":"hidden"}`}>
                        {category.map((data) => {
                            return (
                                <div>
                                    <NavLink className="block font-semibold">{data.name}</NavLink>
                                </div>
                            );
                        })}
                    </div>



      
       
                </div>
            </div>
        </div>
    );
};

export default CategoryShow;
