import React from "react";

const Cart = ({cart}) => {
const total = cart.reduce((acc,product) => acc+ product.price, 0)
    return(
        <div style={{marginTop:"20px", padding:"10px", border: "1px solid #000"}}>
<h2>Cart</h2>
{cart.length === 0 ? (
    <p>No items in the cart</p>
):(
    <ul>
        {cart.map((index,item)=>(
            <li key = {index}>{item.name}-${item.price}</li>
        ))}
    </ul>
)}
<h3>Total:{total}</h3>
        </div>
    )
}
export default Cart