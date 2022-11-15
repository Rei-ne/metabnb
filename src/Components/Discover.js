import React from 'react'
import image1 from '../assets/group.png'

const Discover = () => {
    return (
        <>
            <section className='meta-nfts'>
                <div className="meta-text">
                    <h2>Metabnb NFTs</h2>
                    <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                    <button>Learn more</button>
                </div>
                <div className="images-container">
                    <img className="group-img" src={image1} alt="" />
                </div>
            </section>
        </>

    )
}

export default Discover