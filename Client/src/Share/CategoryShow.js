import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const CategoryShow = () => {

    const [watch, setWatch] = useState(false)
    const [game, setGame] = useState(false)
    const [ladies, setLadies] = useState(false)

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
    const Game = [
        {
            id: 1,
            name: "Pubg",
        },
        {
            id: 2,
            name: "Free Fire",
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
        <div className="grid grid-cols-12 z-50 w-[90%] mx-auto">

            {/* CategoryShow */}
            <div className="grid col-span-3 bg-[#FF0000] rounded-l">
                <ul className="w-full font-bold">
                    <li className="hover:bg-white hover:text-black pl-5 py-1"><NavLink to="/help" className="flex py-1 text-sm rounded-lg">Accessories</NavLink></li>
                    <li onMouseEnter={() => { setWatch(true) }} onMouseLeave={() => { setWatch(false) }} className="hover:bg-white hover:text-black pl-5 py-1"><NavLink to="/liveChat" className="flex py-1 text-sm rounded-lg">Watch</NavLink></li>
                    <li className="hover:bg-white hover:text-black pl-5 py-1"><NavLink to="/renewSubscription" className="flex text-sm py-1 rounded-lg">Subscription</NavLink></li>
                    <li onMouseEnter={() => { setGame(true) }} onMouseLeave={() => { setGame(false) }} className="hover:bg-white hover:text-black pl-5 py-1"><NavLink to="/productrequest" className="flex text-sm py-1 rounded-lg">Game</NavLink> </li>
                    <li className="hover:bg-white hover:text-black pl-5 py-1"><NavLink to="/productrequest" className="flex text-sm py-1 rounded-lg">Gift Card</NavLink> </li>
                </ul>
            </div>

            <div className="grid col-span-9 rounded-r bg-white text-sm">

                {/* Watch */}
                <div onMouseEnter={() => { setWatch(true) }} onMouseLeave={() => { setWatch(false) }} className={`h-full ${watch ? "":"hidden"}`}>
                    <div className={`grid grid-cols-2`}>
                        {category.map((data) => (
                            <div><NavLink className={`text-black pl-4 py-1 font-semibold`}>{data.name}</NavLink></div>
                        ))}
                    </div>
                </div>


                 {/* Watch */}
                 <div onMouseEnter={() => { setGame(true) }} onMouseLeave={() => { setGame(false) }} className={`h-full ${game ? "":"hidden"}`}>
                    <div className={`grid grid-cols-2`}>
                        {Game.map((data) => (
                            <div><NavLink className={`text-black pl-4 py-1 font-semibold`}>{data.name}</NavLink></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryShow;
