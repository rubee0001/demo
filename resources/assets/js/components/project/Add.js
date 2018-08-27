import React, { Component } from "react";
import axios from "axios";
import SuccessAlert from "./SuccessAlert";
import ErrorAlert from "./ErrorAlert";

export default class Add extends Component {
    constructor() {
        super();
        this.onChangeProjectName = this.onChangeProjectName.bind(this);
        this.onChangeProjectDesc = this.onChangeProjectName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            project_name: "",
            project_desc: "",
            alert_message: ""
        };
    }

    onChangeProjectName(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const project = {
            project_name: this.state.project_name,
            project_desc: this.state.project_desc
        };
        axios
            .post("http://localhost/demo/public/api/project/store", project)
            .then(res => {
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
                    <SuccessAlert message="Project successfully added" />
                ) : null}
                {this.state.alert_message == "error" ? (
                    <ErrorAlert message="Failed to add project" />
                ) : null}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="project_name">Project Name</label>
                        <input
                            type="text"
                            className="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Enter Project Name"
                            value={this.state.project_name}
                            name="project_name"
                            onChange={this.onChangeProjectName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="project_desc">
                            Project Description
                        </label>

                        <textarea
                            className="form-control"
                            rows="4"
                            cols="50"
                            name="project_desc"
                            onChange={this.onChangeProjectName}
                            value={this.state.project_desc}
                        >
                            {this.state.project_desc}
                        </textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}
