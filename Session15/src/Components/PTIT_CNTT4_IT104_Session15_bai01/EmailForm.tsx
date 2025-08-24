import React from 'react';

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',       // Lưu giá trị nhập vào
      submittedEmail: '' // Lưu giá trị sau khi submit
    };
  }

  handleChange = (event) => {
    this.setState({ email: event.target.value }); // Cập nhật giá trị khi người dùng nhập
  };

  handleSubmit = (event) => {
    event.preventDefault(); // Ngăn reload trang
    this.setState({ submittedEmail: this.state.email }); // Lưu email đã nhập
  };

  render() {
    return (
      <div>
        <h2>Nhập email của bạn:</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Nhập email..."
          />
          <button type="submit">Gửi</button>
        </form>

        {this.state.submittedEmail && (
          <div>
            <h3>Email đã gửi:</h3>
            <p>{this.state.submittedEmail}</p>
          </div>
        )}
      </div>
    );
  }
}

export default EmailForm;
