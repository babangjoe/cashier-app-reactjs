import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Sukses } from "./pages";
import { NavbarComponent } from "./components";
import "./index.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sukses" element={<Sukses />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
