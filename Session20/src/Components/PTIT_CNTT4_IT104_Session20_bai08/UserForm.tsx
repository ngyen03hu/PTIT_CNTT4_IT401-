import React, { useReducer, useState } from 'react';

// Định nghĩa kiểu cho state
type State = {
    name: string;
    email: string;
};

// Định nghĩa kiểu cho action
type Action = {
    field: keyof State;
    value: string;
};

// Hàm reducer để cập nhật state
function reducer(state: State, action: Action): State {
    return {
        ...state,
        [action.field]: action.value,
    };
}

export default function UserForm() {
    const [user, dispatch] = useReducer(reducer, { name: '', email: '' });
    const [visible, setVisible] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            field: e.target.name as keyof State,
            value: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setVisible(true);
    };

    return (
        <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
            <h1>Bài tập: useReducer</h1>
            <form onSubmit={handleSubmit}>
                <h2>Nhập thông tin người dùng</h2>
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    placeholder="Nhập tên"
                    onChange={handleChange}
                    style={{ marginBottom: '0.5rem', padding: '0.3rem' }}
                />
                <br />
                <input
                    type="text"
                    name="email"
                    value={user.email}
                    placeholder="Nhập email"
                    onChange={handleChange}
                    style={{ marginBottom: '0.5rem', padding: '0.3rem' }}
                />
                <br />
                <button type="submit">Gửi</button>
            </form>

            {visible && (
                <div style={{ marginTop: '1rem', color: 'green' }}>
                    <div><strong>Tên:</strong> {user.name}</div>
                    <div><strong>Email:</strong> {user.email}</div>
                </div>
            )}
        </div>
    );
}
