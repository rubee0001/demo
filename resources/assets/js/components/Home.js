import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            projects: [],
            alert_message: ""
        };
    }
    componentDidMount() {
        axios.get("http://localhost/demo/public/api/project").then(response => {
            this.setState({ projects: response.data });
        });
    }
    render() {
        return (
            <div>
                <h3 className="text-center">Projects</h3>
                {this.state.projects.map(project => {
                    return (
                        <div className="card" key={project.id}>
                            <div className="card-body">
                                <h5 className="card-title">{project.name}</h5>

                                <p className="card-text">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
