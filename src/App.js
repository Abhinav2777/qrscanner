import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBarHeader from "./components/NavigationBarHeader";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import "./App.css";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <div>
        <NavigationBarHeader />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/about" component={Company} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
