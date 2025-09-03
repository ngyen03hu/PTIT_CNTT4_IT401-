import React, { useState, useEffect } from 'react';

export default function Timer() {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);

        return () => {
            clearInterval(timer); // Cleanup when unmounted
        };
    }, []);

    return <h2>Thời gian: {count} giây</h2>;
}
