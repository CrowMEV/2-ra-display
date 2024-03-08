import React from "react";
import ReactDOM from "react-dom/client";
import products from "./products";
import Store from "./components/Store/Store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Store products={products} />
  </React.StrictMode>
);
