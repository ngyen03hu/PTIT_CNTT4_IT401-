import React from 'react'
type PropTypes = {
    name?: string;
    age?: number;
}

export default function useState(props: PropTypes) {
    console.log("Props", props);

    return (
        <div>
            <h1>Bai 1</h1>
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
        </div>
    )
}
