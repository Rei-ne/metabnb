import React from 'react'
import { GrFavorite } from "react-icons/gr";
import { FiStar } from "react-icons/fi";
import { metaverseHome } from "../data";


export default function Cards() {

    return (
        <div className="cards">
            {metaverseHome.map((home, index) => {
                const { img } = home
                return <div className="card" key={index}>
                    <div className="img-container">
                        <img src={img} alt="metaverse homes" />
                        <GrFavorite className="favorite-icon" />
                    </div>
                    <div className="details">
                        <p>Desert king</p>
                        <h4>1MBT per night</h4>
                    </div>
                    <div className="details">
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

