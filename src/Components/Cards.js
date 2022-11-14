import React from 'react'
import data from "../data"


export default function Cards() {

    const cardData = data.map(item => {
        return (

            <img
                key={item.id}
                {...item}
                src={item.img}
            />



        )
    })
    return (
        <div >

            {cardData}

            {/* <img src={img} alt="logo" className="card-img" /> */}



        </div>
    )
}

