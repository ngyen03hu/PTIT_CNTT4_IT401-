import React, { useEffect } from 'react';

export default function Welcome() {
    useEffect(() => {
        console.log('chào bạn');
    }, []);

    return (
        <div>
            <h1>Bài 3</h1>
            <h1>Chào mừng bạn đến với ứng dụng của chúng tôi</h1>
        </div>
    );
}
