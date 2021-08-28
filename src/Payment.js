import { Link, useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'
import CurrencyFormat from 'react-currency-format'
import { CardElement } from '@stripe/react-stripe-js'



const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue()
    const history = useHistory()
    const [error, setError] = useState(null)

    const handleSubmit = () => {
        dispatch({
            type: 'EMPTY_BASKET'
        })
        history.push('/order_complete')
    }
    const handleChange = (event) => {


        setError(event.error ? event.error.message : "")

    }



    return (
        <div className="payment">
            <div className="payment__container">

                <h1>
                    Checkout {
                        <Link to="/checkout">({basket?.length} items)</Link>}
                </h1>

                {/* Delivery Section  */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>East Ambag, Konabari</p>
                        <p>Gaziput, Dhaka</p>
                    </div>
                </div>

                {/* Review Items  */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket?.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment Method  */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe magic will go  */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat renderText={(value) => (
                                    <>
                                        <h3>Order Total : {value}</h3>
                                    </>
                                )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}

                                />

                                <button onClick={handleSubmit}>
                                    Buy Now
                                </button>


                            </div>
                            {/* Error  */}
                            {error && <div>{error}</div>}
                        </form>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment
