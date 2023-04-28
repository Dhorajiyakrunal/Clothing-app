import React from 'react'

const Home = () => {
    return (
        <div>
            {/* ----------------PRODUCT-SECTION--------------------- */}
            <section>
                <div className="product-img d-flex">
                    <div className="product">
                        <img className="animate__animated wow animate__zoomIn animate__slow	2s" src="images/asset 4.jpg"  />
                        <h1>STAY RELAXED</h1>
                        <h2>CASUAL SHIRTS</h2>
                        <div className="btn1">
                            <a href="#">VIEW PRODUCTS</a>
                        </div>
                    </div>
                    <div className="product">
                        <img className="animate__animated wow animate__zoomIn animate__slow	2s" src="images/asset 5.jpg"  />
                        <h1>WEAR YOUR CLASS</h1>
                        <h2>Professionals SHIRTS</h2>
                        <div className="btn1">
                            <a href="#">VIEW PRODUCTS</a>
                        </div>
                    </div>
                    <div className="product">
                        <img className="animate__animated wow animate__zoomIn animate__slow	2s" src="images/asset 6.jpg"  />
                        <h1>THE CLASISC</h1>
                        <h2>KURTA SHIRTS</h2>
                        <div className="btn1">
                            <a href="#">VIEW PRODUCTS</a>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="product-info">
                    <div className="container">
                        <div className="product-con">
                            <div className="title">
                                <h1>TAKE IT FIRST</h1>
                                <h2>NEW ARRIVALS</h2>
                            </div>
                            <div className="product-inner d-flex justify-space">
                                <div className="product-content">
                                    <img src="images/asset 7.jpg"  />
                                    <h1>APELSIN - ORANGE WITH WHITE  MEN BUTTON DOWN OCCASION <br />CHECK SHIRT</h1>
                                    <h2>RS. 1,899</h2>
                                </div>
                                <div className="product-content">
                                    <img src="images/asset 8.jpg"  />
                                    <h1>PYTHON - NAVY RED SUPERIOR STYLE BUTTON DOWN COLLAR MEN SHIRT</h1>
                                    <h2>RS. 1,799</h2>
                                </div>
                                <div className="product-content">
                                    <img src="images/asset 9.jpg"  />
                                    <h1>STONE - BEIGE SUPER LINEN MEN SHIRT</h1>
                                    <h2>RS. 2,599</h2>
                                </div>
                                <div className="product-content">
                                    <img src="images/asset 10.jpg"  />
                                    <h1>LIONELL - BRUSHED COTTON BUTTON DOWN CHECKED SHIRT IN DUST WITHE AND BLUE</h1>
                                    <h2>RS. 2,100</h2>
                                </div>
                            </div>
                            <div className="btn1">
                                <a href="#">VIEW ALL PRODUCTS</a>
                            </div>
                        </div>
                    </div>
                </div><hr />
            </section>
            {/*----------------FEATURE-ITEM-SECTION---------------------*/}
            <section>
                <div className="featured">
                    <div className="container">
                        <div className="featured-title">
                            <h1>OUR MOST POPULAR</h1>
                            <h2>FEATURED PRODUCT</h2>
                        </div>
                        <div className="featured-in d-flex">
                            <div className="featured-img">
                                <img src="images/asset 11.jpg"  />
                            </div>
                            <div className="f-con">
                                <h1>95 STUDIO</h1>
                                <p>POISON - DARK GREEN WITH <br /> BLACK WEAVE ULTRA TWILL <br /> COTTON MEN SHIRT</p>
                                <h2>RS . 1,799</h2>
                                <span>★★★★★</span>
                                <h3>Ratings</h3>
                                <h4>Size:</h4>
                                <button>M</button>
                                <button className="btn2">L</button>
                                <button className="btn3">XL</button>
                                <h4>Quntitty :</h4>
                                <button className="btn4"><i className="fa-solid fa-plus" /> <span>1</span> <i className="fa-solid fa-minus" /></button>
                                <div className="btn1">
                                    <a href="#">ADD TO CART</a>
                                </div>
                                <div className="btn5">
                                    <a href="#">BUY IT NOW</a>
                                </div>
                                <a href="#"><h5>View products details</h5></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section><hr />
            <section>
                <div className="product-info">
                    <div className="container">
                        <div className="product-con">
                            <div className="title">
                                <h1>FEATURED COLLECTION</h1>
                                <h2>TOP SELLERS</h2>
                            </div>
                            <div className="product-inner d-flex justify-space">
                                <div className="product-content">
                                    <img src="images/asset 12.jpg"  />
                                    <h1>CAIRO - MULTI COLOR CHECK WITH FINE YARN TWILL REGULAR FIT MEN SHIRT</h1>
                                    <h2>RS. 1,549</h2>
                                </div>
                                <div className="product-content">
                                    <img src="images/asset 13.jpg"  />
                                    <h1>GENTLEMAN - DARK GREEN SOFT COTTON DOBBY PRINTED MEN SHIRT</h1>
                                    <h2>RS. 1,399</h2>
                                </div>
                                <div className="product-content">
                                    <img src="images/asset 14.jpg"  />
                                    <h1>RIO - MANDARIN COLLAR WHITE ROYAL LINEN MEN SHIRT</h1>
                                    <h2>RS. 2,999</h2>
                                </div>
                                <div className="product-content">
                                    <img src="images/asset 15.jpg"  />
                                    <h1>BELIEVE - MULTI COLORED CHECK OXFORD COTTON MEN SHIRT</h1>
                                    <h2>RS. 2,500</h2>
                                </div>
                            </div>
                            <div className="btn1">
                                <a href="#">VIEW ALL PRODUCTS</a>
                            </div>
                        </div>
                    </div>
                </div><hr />
            </section>
            {/* ----------------SERVICE-SECTION--------------------- */}
            <section>
                <div className="service-inner d-flex justify-space">
                    <div className="service">
                        <h2>OUR TRUSTED SERVICES</h2>
                    </div>
                    <div className="services">
                        <img className="animate__animated wow animate__fadeInRight animate__slow 2s" src="images/1_700x.webp"  />
                    </div>
                </div>
            </section>
            {/* ----------------PARRALEX-IMG--------------------- */}
            <section>
                <div className="parralex">
                    <div className="animate__animated wow animate__zoomIn animate__slow	2s parralex-img" />
                </div>
            </section>
            {/* ----------------BLOG-SECTION--------------------- */}
            <section>
                <div className="container d-flex">
                    <div className="blog d-flex">
                        <div className="first-img">
                            <img src="images/asset 17.jpg"  />
                        </div>
                        <div className="second-row">
                            <h1>IT'S A CRYSTAL CLEAR</h1>
                            <h2>95 STUDIO GUARANTEE</h2>
                            <p>Go on, explore risk-free convenience and luxury: every purchase is covered for free shipping all over India. And 15 days free returns and exchange, for any reason on non sale product(s). Because our guarantee is the north star to our moral compass.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Home
