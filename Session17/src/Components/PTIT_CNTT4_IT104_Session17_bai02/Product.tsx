import React from 'react'
type PropTypes = {
    id?: number,
    name?: string,
    price?: string,
    quantity?: number;
}
export default function Product({
    id = 1,
    name = "Coca cola",
    price = "1000$",
    quantity = 10
}: PropTypes) {
    return (
        <div>
            <h1>bai 2 </h1>
            <p>id:{id}</p>
            <p>Name:{name}</p>
            <p>Price:{price}</p>
            <p>Quantiy:{quantity}</p>
        </div>
    )
}
