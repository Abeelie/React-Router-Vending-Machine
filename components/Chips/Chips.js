import React, { useState } from "react";
import { Link } from "react-router-dom";
import chips from "../../images/chips.jpg";

const Chips = () => {
    const [buy, setBuy] = useState(0);

    return (
        <div align="center">
            <img src={chips} className="vmImage"></img>
            <p>Cart: {buy}</p>
            <button onClick={() => {setBuy(buy + 1)}}>Buy Now!!!</button>
            <p><Link to="/">Home page</Link></p>
        </div>
    )
}


export default Chips