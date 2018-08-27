import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Project from "./project/Index";
// import Error404 from "./Error404";

const brandText = {
    marginLeft: "40%"
};
const navAlign = {
    marginLeft: "410px"
};
export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary text-center">
                    <span className="navbar-brand mb-0 h1" style={brandText}>
                        Demo React Application
                    </span>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                        style={navAlign}
                    >
                        <ul className="navbar-nav mr-auto text-center">
                            <li className="nav-item">
                                <Link className="nav-link" to="/project">
                                    CRUD Operations
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/home">
                                    My Projects{" "}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />

                    <Route exact path="/project" component={Project} />
                    <Route exact path="/project/add" component={Project} />
                    <Route exact path="/project/edit/:id" component={Project} />
                    {/* <Route exact path="/*" component={Error404} /> */}
                </Switch>
            </div>
        );
    }
}
