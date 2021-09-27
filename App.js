import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./components/VendingMachine/VendingMachine";
import Candy from "./components/Candy/Candy";
import Chips from "./components/Chips/Chips";
import Gum from "./components/Gum/Gum";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/candy">
          <Candy />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/gum">
          <Gum />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
