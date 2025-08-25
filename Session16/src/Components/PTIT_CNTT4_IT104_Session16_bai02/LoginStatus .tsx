import React, { Component } from 'react'
type State = {
    isLoggedIn: boolean;
}
export default class LoginStatus extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }
    toggleLogin = () => {
        this.setState(prevState => ({
            isLoggedIn: !prevState.isLoggedIn
        }));
    };
    render() {
        const { isLoggedIn } = this.state;
        return (
            <div>
                <h2>
                    {isLoggedIn ? "xinchao,User!" : "vui long dang nhap de tiep tuc ."}
                </h2>
                <button onClick={this.toggleLogin}>
                    {isLoggedIn ? "dang nhap" : "dang xuat "}
                </button>
            </div>
        )
    }
}
