import React, { useMemo } from 'react';

type CartItem = {
    name: string;
    price: number;
    quantity: number;
};

function ShoppingCart() {
    const cartItems: CartItem[] = [
        { name: 'Táo', price: 2, quantity: 3 },
        { name: 'Chuối', price: 1, quantity: 5 },
        { name: 'Cam', price: 3, quantity: 2 },
    ];

    const total = useMemo(() => {
        return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }, [cartItems]);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h2>Giỏ hàng</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.price}$ × {item.quantity}
                    </li>
                ))}
            </ul>
            <h3>Tổng đơn hàng: {total}$</h3>
        </div>
    );
}

export default ShoppingCart;
