import React from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import { GlobalStyles } from '../styles/Global.styled'

const Homepage = () => {
    return (
        <>
            <GlobalStyles />
            <Header />

            <Hero />
        </>

    )
}

export default Homepage