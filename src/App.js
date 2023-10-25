import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Pages/ProductDetails";
import About from "./Pages/About";
import Contact from "./Pages/Contact";


function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:pid" element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
