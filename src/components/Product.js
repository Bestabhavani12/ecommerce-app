import React from "react";

const Product = ({product, addTocart}) => {
    return(
        <div style={{border: '1px solid #ccc', padding:'10px', margin:'10px'}}>
            <h3>{Product.name}</h3>
            <p>Price: ${Product.price}</p>
            <button onClick = {() => addTocart(product) }>Add to Cart</button>
        </div>
    )
}

export default Product