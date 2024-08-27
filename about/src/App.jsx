import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Header from "../../home/src/Header";
import Footer from "../../home/src/Footer";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header/>
    <div class="text-center">
      <img src="C:\\Users\\lalit.singh\\OneDrive - Aspire Systems (India) Private Limited\\Pictures\\Camera Roll\\WIN_20240513_10_27_22_Pro.jpg" class="rounded-ful w-32 mb-4 mx-auto"
      alt="Avatar"/>

      <h5 class="text-xl font-medium leading-tight mb-2">Niklaus Mikaelson</h5>
      <p class="text-gray-500">Web Designer</p>
    </div>
    <Footer/>
{/*     
    <div>Name: about</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div> */}
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
