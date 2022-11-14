import React from 'react'
import { GlobalStyles } from '../../styles/Global.styled'
import { StyledHero } from './Hero.styled'
import group from '../../assets/Group 4028.png'

import { ReactComponent as Mbtoken } from '../../assets/mbtoken.svg'
import { ReactComponent as Metamask } from '../../assets/metamask.svg'
import { ReactComponent as Opensea } from '../../assets/opensea.svg'



const Hero = () => {
    return (
        <>
            <GlobalStyles />
            <StyledHero>

                <div className="left-div">
                    <div className="heading1">
                        <h2>Rent a <span>place</span> away from <span>home</span> in the <span>metaverse</span></h2>

                    </div>
                    <div className="p-tag">
                        <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                    </div>
                    <div className="search-div">
                        <input type="search" placeholder="Search for location">

                        </input>
                        <button className="search-btn">Search</button>
                    </div>

                </div>
                <div className="right-div">
                    <img className="hero-img" src={group} alt="images of metabnbs" />
                </div>

            </StyledHero>
            <div className="bottom-div">
                <Mbtoken className="svg" />
                <Metamask className="svg" />
                <Opensea className="svg" />
            </div>


        </>
    )
}

export default Hero