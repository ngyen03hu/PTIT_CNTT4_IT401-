import React, { useState } from 'react';

type State = {
    name: string;
    email: string;
};

export default function UserProfile() {
    const [user, setUser] = useState<State>({ name: '', email: '' });
    const [visible, setVisible] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setVisible(true);
    };

    return (
        <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
            <h1>Bài tập 2</h1>
            <form onSubmit={handleSubmit}>
                <h2>Nhập thông tin người dùng</h2>
                <input
                    type="text"
                    value={user.name}
                    name="name"
                    placeholder="Nhập tên"
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    value={user.email}
                    name="email"
                    placeholder="Nhập email"
                    onChange={handleChange}
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
