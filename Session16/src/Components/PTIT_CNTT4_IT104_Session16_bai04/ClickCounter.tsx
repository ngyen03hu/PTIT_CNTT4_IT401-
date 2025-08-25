import React, { Component } from 'react'
type State = {
    count: number;
}

export default class ClickCounter extends Component {
    constructor(prop: {}) {
        super(prop);
        this.state = {
            count: 0
        }
    }
    handleclick = () => {
        this.setState(prev => { { count.prev.count + 1 } })
    }
    render() {
        return (
            <div>
                <h3>Mỗi lần nhấn vào nút </h3>
                <p>{this.state.count}</p>
                <button onClick={this.handleclick}></button>
            </div>
        )
    }
}
