import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'


const Checkout = () => {
    const [{ basket, user }, dispatch] = useStateValue()
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img src="images/ad2.jpg" alt="" className="checkout__ad" />

                <div>
                    <h3 className="checkout__subtitle">Hello, {user?.email}</h3>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>

                    {/* Checkout Product  */}

                    {basket.map(item => (
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
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
