import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from './StateProvider'


const OrderComplete = () => {
    const history = useHistory()

    const [{ user },] = useStateValue()
    return (
        <div className="order_complete">
            <Link to="/">
                <img className="login__logo" src="images/amazon1.png" alt="" />
            </Link>
            <div className="info">
                <h2>Hello, {user ? user?.email : 'Guest'}</h2>
                <p>Thank you for ordering. We recieved your order and will begin processing it soon.</p>
                <img className="ok" src="images/ok.png" alt="" />
            </div>

            <button onClick={() => history.push('/')}>Back to home</button>
        </div>
    )
}

export default OrderComplete
