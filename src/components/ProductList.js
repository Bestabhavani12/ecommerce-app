import React from "react";
import Product from "./Product";

const ProductList = ({addToCart}) => {
   const products = [
    {id:1, name:"product 1",price:10},
    {id:2, name:"product 2",price:20},
    {id:3, name:"product 3",price:30},

   ] 
    return(
<div>
    <h2>Products</h2>
    {products.map((product)=>(
        <product key ={product.id}
        product = {product}
        addToCart = {addToCart}
        />
    ))}
</div>
    )
}
export default ProductList