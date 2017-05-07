import React, {Component} from "react";

const styles = {
    container: {
        width: "100%",
        height: "100%"
    }
};

export default class Home extends Component {

    render () {
        return (
            <div className="home-container" style={styles.container}>
                <h1>{"This is a React App"}</h1>
            </div>
        );
    }

}
