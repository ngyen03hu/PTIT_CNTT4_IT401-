import React, { Component } from 'react'
type state = {
    tiendo: number,
    hienthi: number | null,
}

export default class Ex04 extends Component {
    constructor(props: {}) {
        super(props);
        this.state = {
            tiendo: 0,
            hienthi: null
        };
    }
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ tiendo: Number(event.target.value) });
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.setState({ hienthi: this.state.tiendo });
    };

    render() {
        return (
            <div>
                <h2>kiem tra tien di </h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">tien di (%):{this.state.tiendo}</label>
                    <input type='range'
                        min='0'

                        max='100'

                        value={this.state.tiendo}
                        onClick={this.handleChange}

                    />
                    <button type='submit'>gui</button>
                </form>
                {this.state.hienthi !== null && (
                    <p>tien do hoan thanh : {this.state.hienthi}% </p>
                )}
            </div>
        )
    }
}
