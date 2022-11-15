import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header/Header'
import Market from '../Components/Market'
import { GlobalStyles } from '../styles/Global.styled'

const Placespage = () => {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Market />
            <Footer />
        </>
    )
}

export default Placespage