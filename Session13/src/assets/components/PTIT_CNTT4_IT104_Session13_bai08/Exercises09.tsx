import React, { Component } from 'react'
type StateType = {
    company: string
}
export default class Exercise09 extends Component {
    state: StateType = {
        company: "Rikkei Academy"
    };
    handleChange = () => {
        this.setState({
            company: this.state.company === "Rikkei Academy" ? "Rikkei Soft" : "Rikkei Academy"
        });
    };
    render() {
        return (
            <div>
                <h2>{this.state.company}</h2>
                <button onClick={this.handleChange}>change</button>
            </div>
        )
    }
}