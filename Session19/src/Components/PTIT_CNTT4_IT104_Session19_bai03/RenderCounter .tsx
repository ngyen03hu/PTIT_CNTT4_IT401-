import React, { useState } from 'react';

export default function RenderCounter() {
    const [dta, setData] = useState({ name: '', email: '' });
    const [error, setError] = useState({ name: '', email: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Kiểm tra nếu ô input bị bỏ trống
        if (value === '') {
            setError({ ...error, [name]: `${name} không được bỏ trống` });
        } else {
            setError({ ...error, [name]: '' });
        }

        // Cập nhật dữ liệu nhập
        setData({ ...dta, [name]: value });
    };

    console.log('data =>', dta);
    console.log('error =>', error);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Form kiểm tra dữ liệu</h2>

            <div>
                <label>Tên:</label>
                <input
                    type="text"
                    name="name"
                    value={dta.name}
                    onChange={handleChange}
                />
                {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
            </div>

            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={dta.email}
                    onChange={handleChange}
                />
                {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
            </div>
        </div>
    );
}
