import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            {/*------------------------------TOP-HEADER----------------------------------*/}
            <header>
                <div className="top-header">
                    <div className="th-info">
                        <h1>BUY 2 AND GET 10% OFF</h1>
                    </div>
                </div>
            </header>
            {/*--------------------------BOTTOM-HEADER AND BANNER---------------------------*/}
            <section>
                <div className="animate__animated wow animate__fadeIn animate__slow	2s banner-img">
                    <div className="bottom-header d-flex justify-space ">
                        <div className="bh-info">
                            <a href="#"><h1>SHIRTS</h1></a>
                        </div>
                        <div className="logo">
                            <Link to='/'>
                                <img src="images/asset 1.png"  />
                            </Link>
                        </div>
                        <nav>
                            <ul className="d-flex">
                                <li><Link to='/login'>ACCOUNT</Link></li>
                                <li><a href="#">SEARCH</a></li>
                                <li><Link to='/cart'>ADD PRODUCT</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="container">
                        <div className="animate__animated wow animate__fadeInUp banner-con">
                            <h1>WELCOME TO THE 95 STUDIO  WORLD</h1>
                            <h2>LET'S FIND YOUR PERFECT SHIRT</h2>
                            <div className="btn1">
                                <a href="#">EXPLORE THE WARDROBE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Header
