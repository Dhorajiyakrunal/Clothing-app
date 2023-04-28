import React from 'react'

const Footer = () => {
    return (
        <div>
            {/* ----------------FOOTER--------------------- */}
            <footer>
                <div className="f-bg">
                    <div className="container">
                        <div className="f-top d-flex justify-space">
                            <div className="policy">
                                <h1>TERMS AND CONDITIONS</h1>
                                <a href="#"><h2>Privacy Policy</h2></a>
                                <a href="#"><h2>Refund Policy</h2></a>
                                <a href="#"><h2>Terms of Service</h2></a>
                                <a href="#"><h2>Shipping Policy</h2></a>
                            </div>
                            <div className="shop">
                                <h1>SHOP</h1>
                                <a href="#"><h2>All Shirts</h2></a>
                                <a href="#"><h2>Professional Shirts</h2></a>
                                <a href="#"><h2>Casual Shirts</h2></a>
                                <a href="#"><h2>Kurta Shirts</h2></a>
                            </div>
                            <div className="store">
                                <h1>Store</h1>
                                <a href="#"><h2>Contect Us</h2></a>
                                <a href="#"><h2>About us</h2></a>
                            </div>
                            <div className="newsletter">
                                <h1>Newsletter</h1>
                                <a href="#"><h2>Subscribe to receive updates, access to <br /> exclusive deals, and more. NO SPAM</h2></a>
                                <input type="email" placeholder=" Enter Your Email Address" />
                                <div className="btn6">
                                    <a href="#">SUBSCRIBE</a>
                                </div>
                            </div>
                        </div>
                        <div className="f-bottam d-flex justify-space">
                            <h1> © 95 STUDIO</h1>
                            <div className="f-b-icon">
                                <a href="#"><i className="fa-brands fa-facebook-f" /></a>
                                <a href="#"><i className="fa-brands fa-twitter" /></a>
                                <a href="#"><i className="fa-brands fa-dribbble" /></a>
                                <a href="#"><i className="fa-brands fa-behance" /></a>
                                <a href="#"><i className="fa-brands fa-paypal" /></a>
                                <a href="#"><i className="fa-brands fa-google-pay" /></a>
                                <a href="#"><i className="fa-brands fa-cc-mastercard" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer
