import React, { Component } from 'react';

export default class Ex02 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#000000', 
            showColor: false  
        };
    }

    handleChange = (event) => {
        this.setState({ color: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault(); 
        this.setState({ showColor: true });
    };

    render() {
        return (
            <div style={{ padding: '20px' }}>
                <form onSubmit={this.handleSubmit}>
                    <label>Chọn màu: </label>
                    <input
                        type="color"
                        value={this.state.color}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Gửi</button>
                </form>

                {this.state.showColor && (
                    <div style={{ marginTop: '20px' }}>
                        <p>Mã màu bạn chọn là: <strong>{this.state.color}</strong></p>
                        <div
                            style={{
                                width: '100px',
                                height: '100px',
                                backgroundColor: this.state.color,
                                border: '1px solid #ccc',
                                marginTop: '10px'
                            }}
                        />
                    </div>
                )}
            </div>
        );
    }
}
