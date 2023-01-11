import React, { useState } from "react";

import { GrFavorite } from "react-icons/gr";
import { FiStar } from "react-icons/fi";
import { metaverseHome } from "../data";


export default function Cards() {
    const [color, setColor] = useState("");

    return (
        <div className="cards">
            {metaverseHome.map((home, index) => {
                const { img } = home
                return <div className="card" key={index}>
                    <div className="img-container">
                        <img src={img} alt="metaverse homes" />
                        <div>
                            <GrFavorite className="favorite-icon" fill={color}
                                onClick={() => {
                                    setColor("red");
                                }} />
                        </div>

                    </div>
                    <div className="details top">
                        <p>Desert king</p>
                        <h4>1MBT per night</h4>
                    </div>
                    <div className="details bottom">
                        <p>2345km away</p>
                        <p>Available for 2weeks stay</p>
                    </div>
                    <div className="stars">
                        <FiStar />
                        <FiStar />
                        <FiStar />
                        <FiStar />
                        <FiStar />
                    </div>
                </div>
            })}
        </div>
    )
}

