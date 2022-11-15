import React from "react";
import metasvg from "../assets/meta-svg.svg";
import { ImFacebook } from "react-icons/im";
import { FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <footer>
            <article className="footer">
                <div>
                    <a href="/">
                        <img src={metasvg} alt="meta logo" />
                    </a>
                    <div className="socials">
                        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"> <ImFacebook /></a>
                        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"> <FaInstagram /></a>
                        <a href="http://twitter.com" target="_blank" rel="noopener noreferrer"> <FaTwitter /> </a>



                    </div>
                </div>
                <ul>
                    <h3>Community</h3>
                    <li>NFT</li>
                    <li>Token</li>
                    <li>Landlord</li>
                    <li>Discord</li>
                </ul>
                <ul>
                    <h3>Places</h3>
                    <li>Castle</li>
                    <li>Farms</li>
                    <li>Beach</li>
                    <li>Learn more</li>
                </ul>
                <ul>
                    <h3>About Us</h3>
                    <li>Road map</li>
                    <li>Creators</li>
                    <li>Career</li>
                    <li>Contact us</li>
                </ul>
            </article>
            <p className="copyright">&copy; 2022 Metabnb</p>
        </footer>
    );
};

export default Footer;
