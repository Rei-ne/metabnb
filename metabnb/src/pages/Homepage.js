import React from 'react'
import Header from '../Components/Header/Header'
import { GlobalStyles } from '../styles/Global.styled'

const Homepage = () => {
    return (
        <>
            <GlobalStyles />
            <Header />
            <div>This is the homepage</div>
        </>

    )
}

export default Homepage