import { useState, useEffect } from "react";

function ChangeColor() {
    const [color, setColor] = useState(false);

    function handleClick() {
        setColor(!color);
    }

    useEffect(() => {
        console.log("Color changed to:", color);
    }, [color]);

    return (
        <>
            <p style={{ color: color ? "red" : "black" }}>Tieu de van ban</p>
            <button onClick={handleClick}>Change color</button>
        </>
    );
}

export default ChangeColor;