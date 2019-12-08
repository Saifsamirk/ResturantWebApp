import React, { Component } from "react";
import logo from "./logo.svg";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import Menu from "./components/menuComponent";
import { DISHES } from "./shared/dishes";
import DishDetail from "./components/dishDetailsComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div>
        <Navbar dark color="dark">
          <div className="container">
            <NavbarBrand href="/">Elite Restaurant</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}
export default App;
