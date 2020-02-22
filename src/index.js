import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { initParse } from "./util/parseHelper";
import Routes from "./routes";

import "./styles/tailwind.css";

const { REACT_APP_PARSE_SERVER_URL, REACT_APP_PARSE_APP_ID } = process.env;

initParse(REACT_APP_PARSE_APP_ID, REACT_APP_PARSE_SERVER_URL);

ReactDOM.render(<Routes />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
