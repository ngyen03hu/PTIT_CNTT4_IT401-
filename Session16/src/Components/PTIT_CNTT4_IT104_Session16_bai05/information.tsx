import React, { Component } from 'react'
type State = {
    name: string
    age: number
    email: string
    error: ''
    submit: false
}

export default class information extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: '',
            error: '',
            submit: false,
        };
    }
    hendleChenge = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [e.target.name]: e.target.value } as Pick<State, keyof State>);
    };
    hendleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        coust { name, email, age } = this.state;
        coust ageNum = Number(age);

        if (!emai.inckudes('@')) {
            this.setState({ error: 'email khong hop le ', submit: false });

        } else if (ageNum < 0) {
            this.setState({ error: ' tuoi k dc am ', submit: false })
        } else {
            this.setState({ error: '', submit: true })
        }
    };
    hanleReset = () => {
        this.setState({
            name: '',
            email: '',
            age: '',
            error: '',
            submit: false

        });
    };
    render() {
        const { name, email, age, error, submitted } = this.state; return (
            <div>
                <h2> From thong tin nguoi dung </h2>
                <form onSubmit={this.hendleSubmit}>
                    <div>
                        <label> Ho ten</label>
                        <input type="text" name='name' value={name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label> Email</label>
                        <input type="text" name='Email' value={email} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label> Tuoi</label>
                        <input type="text" name='age' value={age} onChange={this.handleChange} />
                    </div>
                    <button type='submit' >Gui</button>
                    <button type='error' onClick={this.handleReset} > Xoa tat ca </button>
                </form>
                {error && <p>{error}</p>}
                {submitted && (
                    <div>
                        <h3>Nhap thong tin nguoi dung</h3>
                        <p>ten : {name}</p>
                        <p>Email: {email}</p>
                        <p>Tuoi: {age}</p>
                    </div>
                )}

            </div>
        )
    }
}
