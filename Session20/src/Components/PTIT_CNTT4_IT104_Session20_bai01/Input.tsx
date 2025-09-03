import React, { useState } from 'react';

export default function InputChecker() {
    const [inputValue, setInputValue] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
            <h2>Kiểm tra độ dài chuỗi</h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Nhập chuỗi tại đây"
                style={{ padding: '0.5rem', marginBottom: '1rem' }}
            />
            {inputValue.length > 5 && (
                <p style={{ color: 'red' }}>
                    Chuỗi nhập vào dài hơn 5 ký tự!
                </p>
            )}
        </div>
    );
}
