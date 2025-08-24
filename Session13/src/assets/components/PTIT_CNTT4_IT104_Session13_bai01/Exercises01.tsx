import React, { Component } from 'react'
type userName = {
    name: string
}
export default class Exercises01 extends Component<unknown, userName> {
    myName: userName = {
        name: "Ngueyn Trong Vuong"
    };
    render() {
        return (
            <div>
                <p>Ho va ten: {this.myName.name}</p>
            </div>
        )
    }
}