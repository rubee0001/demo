import React, { Component } from "react";
const footerMargin = {
    marginLeft: "90px",
    marginRight: "90px"
};

export default class Footer extends Component {
    render() {
        return (
            <div>
                <nav className="navbar  navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">
                        Copyright © 2018 DemoReact
                    </a>
                </nav>
            </div>
        );
    }
}
