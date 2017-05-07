import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import Root from "./views/Root";

const App = (
    <BrowserRouter>
        <Root />
    </BrowserRouter>
);

ReactDOM.render(App, document.getElementById("root"));
