import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { FiStar } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { marketplace } from "../data";



const Market = () => {
    return (
        <section className="marketplace">
            <div className="filter">
                <h3>restaurant</h3>
                <h3>cottage</h3>
                <h3>castle</h3>
                <h3>fantast city</h3>
                <h3>beach</h3>
                <h3>cabins</h3>
                <h3>off-grid</h3>
                <h3>farm</h3>
                <h3 className="filter-location">
                    location
                    <AiOutlineBars />
                </h3>
            </div>
            <article className="cards-section">
                <div className="cards">
                    {marketplace.map((items, index) => {
                        const { img } = items;
                        return <div className="card" key={index}>
                            <div className="img-container">
                                <img src={img} alt="" />
                                <GrFavorite className="favorite-icon" />
                            </div>
                            <div className="details">
                                <p>desert king</p>
                                <h4>1MBT per night</h4>
                            </div>
                            <div className="details">
                                <p>2345km away</p>
                                <p>available for 2weeks stay</p>
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
            </article>
        </section>
    );
};

export default Market;
