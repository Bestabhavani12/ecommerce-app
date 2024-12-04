import React from "react";

const Navbar = ({cartCount}) => {
    return(
        <nav style={{padding: "10px", backgroundColor: "#333", color: "white"}}>
            <h1>E-commerce</h1>
            <p>Cart:{cartCount}item</p>
        </nav>
    )
}

export default Navbar