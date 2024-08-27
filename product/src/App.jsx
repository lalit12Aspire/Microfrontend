import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { BrowserRoute, Route, Routes } from "react-router-dom";

import ProductLists from "./Components/ProductLists";
import ProductPage from "./Components/ProductPage";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<ProductLists />} />
      <Route path="/:productId" element={<ProductPage />} />
    </Routes>
  </>);


// ReactDOM.render(<App />, document.getElementById("app"));


export default App;