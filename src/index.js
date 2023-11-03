import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsContextProvider } from "./context/productsContext";
import { FilterContextProvider } from "./context/filterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductsContextProvider>
    <FilterContextProvider>
      <Router>
        <App />
      </Router>
    </FilterContextProvider>
  </ProductsContextProvider>
);

reportWebVitals();
