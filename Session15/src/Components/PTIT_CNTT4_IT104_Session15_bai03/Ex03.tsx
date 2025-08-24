import React, { Component } from 'react'
type State = {
    ngaysinh: string,
    hienthi: string,
}
export default class Ex03 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ngaySinh: '',
            hienThi: ''
        };
    }
    handleChange = (event) => {
        this.setState({ ngaySinh: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ hienThi: this.state.ngaySinh });
    };

    render() {
        return (
            <div>
                <h2>Nhập ngày sinh của bạn</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="date"
                        value={this.state.ngaySinh}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Gửi</button>
                </form>

                {this.state.hienThi && (
                    <p>Ngày sinh bạn chọn là: {this.state.hienThi}</p>
                )}


            </div>
        );
    }
}

