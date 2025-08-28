import React, { useState } from 'react';

export default function RandomQuote() {
    const quotes: string[] = [
        'Học, học nữa, học mãi.',
        'Thất bại là mẹ thành công.',
        'Không gì là không thể.',
        'Kiến tha lâu đầy tổ.',
        'Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau.'
    ];

    const [quote, setQuote] = useState<string>('');

    const getRandomQuote = () => {
        const random = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[random]);
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial' }}>
            <h2>Truyền cảm hứng</h2>
            <p style={{ fontSize: '20px', minHeight: '40px' }}>{quote}</p>
            <button onClick={getRandomQuote} style={{ padding: '10px 20px', fontSize: '16px' }}>
                Lấy câu nói
            </button>
        </div>
    );
}
