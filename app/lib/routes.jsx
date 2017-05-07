import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import Home from "views/home";

export default (
    <BrowserRouter>
        <Route component={Home} name="home" path="/" />
    </BrowserRouter>
);
