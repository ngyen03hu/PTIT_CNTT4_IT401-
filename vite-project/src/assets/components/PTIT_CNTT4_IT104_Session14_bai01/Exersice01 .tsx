import React, { Component } from 'react'
type StateType = {
    userName: string
}
export default class Exersice01 extends Component {
    state: StateType = {
        userName: ""
    }
    componentDidMount(): void {
        this.setState({ userName: "Nguyen Mih Vuong" })
    }
    render() {
        return (
            <div>
                <h2>xin chao {this.state.userName}</h2>
            </div>
        )
    }
}