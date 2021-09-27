import React, { useState } from "react";
import { Link } from "react-router-dom";
import gum from "../../images/gum.jpg";

const Gum = () => {
    const [buy, setBuy] = useState(0);

    return (
        <div align="center">
            <img src={gum} className="vmImage"></img>
            <p>Cart: {buy}</p>
            <button onClick={() => {setBuy(buy + 1)}}>Buy Now!!!</button>
            <p><Link to="/">Home page</Link></p>
        </div>
    )
}


export default Gum