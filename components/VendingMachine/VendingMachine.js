import React from "react";
import { Link } from "react-router-dom";
import vmImage from "../../images/vmImage.jpg";
import "./vendingmachine.css";

const VendingMachine = () => {
  return(
    <div>
        <div className="item-links">
          <h1 style={{textAlign: "center"}}>Pick an Item</h1>
          <h1><Link to="/candy">Candy</Link></h1>
          <h1><Link to="/chips">Chips</Link></h1>
          <h1><Link to="/gum">Gum</Link></h1>
        </div>
        <img src={vmImage} className="vmImage"></img>
    </div>
  );
}

export default VendingMachine;
