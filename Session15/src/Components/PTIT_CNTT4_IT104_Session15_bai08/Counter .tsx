import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.intervalId = null;
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count < 9 ? prevState.count + 1 : 0
            }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
            </div>
        );
    }
}

export default Counter;
