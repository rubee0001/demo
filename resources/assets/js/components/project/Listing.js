import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SuccessAlert from "./SuccessAlert";
import ErrorAlert from "./ErrorAlert";

export default class Listing extends Component {
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
    onDelete(project_id) {
        axios
            .delete(
                "http://localhost/demo/public/api/project/delete/" + project_id
            )
            .then(response => {
                var projects = this.state.projects;
                for (var i = 0; i < projects.length; i++) {
                    if (projects[i].id == project_id) {
                        projects.splice(i, 1);
                        this.setState({ projects: projects });
                    }
                }

                this.setState({
                    alert_message: "success"
                }).catch(error => {
                    this.setState({ alert_message: "error" });
                });
            });
    }
    render() {
        return (
            <div>
                <hr />
                {this.state.alert_message == "success" ? (
                    <SuccessAlert message="Project successfully deleted" />
                ) : null}
                {this.state.alert_message == "error" ? (
                    <ErrorAlert message="Failed to delete project" />
                ) : null}
                <table className="table">
                    <thead>
                        <tr>
                            {/* <th scope="col">#</th> */}
                            <th scope="col">Project Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Updated At</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.projects.map(project => {
                            return (
                                <tr key={project.id}>
                                    {/* <th scope="row">1</th> */}
                                    <td>{project.name}</td>
                                    <td>{project.description}</td>
                                    <td>{project.created_at}</td>
                                    <td>{project.updated_at}</td>
                                    <td>
                                        <Link
                                            className="btn btn-primary btn-sm"
                                            to={`/project/edit/${project.id}`}
                                        >
                                            Edit
                                        </Link>
                                        <a
                                            className="btn btn-primary btn-sm"
                                            href="#"
                                            onClick={this.onDelete.bind(
                                                this,
                                                project.id
                                            )}
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
