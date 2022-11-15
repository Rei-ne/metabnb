import React from 'react'
import Discover from '../Components/Discover'
import Footer from '../Components/Footer'
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
            <Footer />
        </>

    )
}

export default Homepage