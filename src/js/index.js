//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
//import { Home } from "./component/home.js";
import { Home2 } from "./component/Home2.js";

//render your react application
ReactDOM.render(<Home2 />, document.querySelector("#app"));
