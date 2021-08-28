import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="images/banner4.jpg" alt="banner1" />
                <div className="home__row">

                    <Product
                        id="18307101"
                        title="Maybe You Should Talk to Someone: A Therapist, HER Therapist, and Our Lives Revealed"
                        price={29.99}
                        image="images/prod1.jpg"
                        rating={5}
                    />
                    <Product
                        id="18307127"
                        title="Samsung Galaxy A21 Factory Unlocked Android Cell Phone, US Version Smartphone, 32GB Storage, Long-Lasting Battery, 6.5” Infinity Display, Quad Camera, Black"
                        price={36.92}
                        image="images/prod2.jpg"
                        rating={4}
                    />


                </div>
                <div className="home__row">

                    <Product
                        id="18307110"
                        title="realme rma183 smart fitness band"
                        price={32.85}
                        image="images/prod3.jpg"
                        rating={5}
                    />

                    <Product
                        id="18307116"
                        title="All-new Amazon Echo (3rd Gen) - Improved Sound, Powered by Dolby, Black"
                        price={12.69}
                        image="images/prod4.jpg"
                        rating={3}
                    />
                    <Product
                        id="18307122"
                        title="Amazon Web Services Half Sleeve T-Shirt"
                        price={5.99}
                        image="images/prod5.png"
                        rating={5}
                    />

                </div>
                <div className="home__row">

                    <Product
                        id="18307144"
                        title='Samsung LC49RG90SSUXEN 49" Curved LED Gaming Monitor - Dual WQHD 5120 x 1440, 120Hz, HDMI, Displayport, USB'
                        price={1034.00}
                        image="images/prod6.jpg"
                        rating={5}
                    />

                </div>
            </div>
        </div>
    )
}

export default Home
