import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Navigation from "./components/NavigationComponent";
import Hero from "./components/HeroComponent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Hero />
      </div>
    );
  }
}

export default App;
