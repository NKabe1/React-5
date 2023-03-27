import axios from "axios";
import { useState, useEffect } from "react";
import "./Cart.css"

export function Cart ({user_id}) {
    const [userCart, setUserCart] = useState([]);
    const get_user_cart = async (user_id) => {
        const resp = await axios.get(`https://dummyjson.com/carts/${user_id}`);
        setUserCart(resp.data?.products);
    }
    useEffect(() => {
        get_user_cart(user_id);
    }, [user_id]);
    return (
    <div>
        <h1>User Cart</h1>
        <ul>
            {userCart.map((product) => {
                return (
                <div key={product.id} className="cart-list">
                    <div>Product: {product.title};</div>
                    <div>Price: ${product.price};</div>
                    <div>Quantity: {product.quantity}.</div>
                </div>
                
                )
            })}
        </ul>
    </div>
    )
}