import React from 'react'
import img1 from '../assets/spin 1.png'
import img2 from '../assets/spin 2.png'

import img3 from '../assets/spin 3.png'

const Discover = () => {
    return (
        <div className="disco-div">

            <div className="disco-left-div">
                <h2>Metabnb NFTs</h2>
                <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <button>Learn more</button>
            </div>
            <div className="disco-right-div">
                <div>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />

                    <img src={img3} alt="" />

                </div>
            </div>

        </div>
    )
}

export default Discover