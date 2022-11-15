import React from 'react'
import { FaTimes } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import metamaskIcon from '../assets/metamask-icon.png'
import walletConnect from '../assets/wallet-connect.png'

// Connect Wallet Modal
const Connect = ({ setShowModal }) => {
    return (
        <section className="wallet-modal">
            <div className="wallets">
                <div className="border-btm">
                    <h2>Connect Wallet</h2>
                    <button className="times" onClick={() => setShowModal(false)}>
                        <FaTimes />
                    </button>
                </div>
                <div className="pad">
                    <p>Choose your preferred wallet</p>
                    <button className="crypto-wallet">
                        <img src={metamaskIcon} alt="metamask" />
                        Metamask
                        <BsChevronRight />
                    </button>
                    <button className="crypto-wallet">
                        <img src={walletConnect} alt="wallet connect" />
                        Wallet Connect
                        <BsChevronRight />
                    </button>
                </div>
            </div>
        </section>)
}

export default Connect