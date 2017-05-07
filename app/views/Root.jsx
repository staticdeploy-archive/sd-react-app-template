import React, {Component} from "react";
import {Route} from "react-router-dom";

import Home from "./Home";

const styles = {
    container: {
        height: "100%",
        width: "100%"
    }
};

export default class Root extends Component {

    render () {
        return (
            <div className="root" style={styles.container}>
                <Route
                    component={Home}
                    exact={true}
                    path="/"
                    strict={true}
                />
            </div>
        );
    }

}
