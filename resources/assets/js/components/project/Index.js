import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Add from "./Add";
import Listing from "./Listing";
import Edit from "./Edit";

export default class Index extends Component {
    render() {
        return (
            <div>
                <div>
                    <hr />
                    <Link to="/project" className="btn btn-primary">
                        List
                    </Link>{" "}
                    &nbsp;
                    <Link to="/project/add" className="btn btn-primary">
                        Add
                    </Link>
                    <Route exact path="/project" component={Listing} />
                    <Route exact path="/project/add" component={Add} />
                    <Route exact path="/project/edit/:id" component={Edit} />
                </div>
            </div>
        );
    }
}
