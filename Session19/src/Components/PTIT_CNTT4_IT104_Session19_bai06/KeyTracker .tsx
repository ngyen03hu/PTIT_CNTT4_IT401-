import React, { useEffect, useState } from 'react'

function KeyTracker() {
    const [mykey, setMykey] = useState('')
    useEffect(() => {
        const getkey = (e: React.KeyboardEvent<HTMLDivElement>) => {
            console.log(e.key);
            setMykey(e.key);

        };

        window.addEventListener('keydown', getkey);
        return () => {
            window.removeEventListener('keydown', getkey);

        };
    }, []);
    return (
        <div>{mykey}</div>
    );
}

export default KeyTracker 
