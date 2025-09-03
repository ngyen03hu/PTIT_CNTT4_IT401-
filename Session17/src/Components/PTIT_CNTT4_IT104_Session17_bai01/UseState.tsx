import React from 'react'
type PropTypes = {
    name?: string;
    age?: number;
}

export default function UseState({
    name = "Nguyen Van A",
    age= 20,
}: PropTypes) {

    return (
        <div>
            <h1>Bai 1</h1>
            <p>Name:{name}</p>
            <p>Age:{age}</p>    
        </div>
    )
}
