import React from 'react'
import Discover from '../Components/Discover'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import { GlobalStyles } from '../styles/Global.styled'

const Homepage = () => {
    return (
        <>
            <GlobalStyles />
            <Header />

            <Hero />
            <Discover />

        </>

    )
}

export default Homepage