function getOrderSummary(products) {
    const details = products.map(product => {
        const {
            name,
            price,
            discount = 0,
            extraDiscount = 0,
            minQuantity = Infinity,
            quantity
        } = product;

        let finalDiscount = discount;
        if (quantity >= minQuantity) {
            finalDiscount += extraDiscount;
        }

        const finalPrice = Math.round(price * (1 - finalDiscount));
        const subtotal = finalPrice * quantity;

        return { name, finalPrice, quantity, subtotal };
    });

    const totalBeforeDiscount = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
    const totalAfterDiscount = details.reduce((sum, item) => sum + item.subtotal, 0);

    return {
        totalBeforeDiscount,
        totalAfterDiscount,
        details
    };
}

const products = [
    { name: "A", price: 100, discount: 0.1, quantity: 2 },
    { name: "B", price: 200, discount: 0.2, quantity: 1, bulkDiscount: { minQuantity: 2, extraDiscount: 0.05 } },
    { name: "C", price: 300, discount: 0, quantity: 3, bulkDiscount: { minQuantity: 3, extraDiscount: 0.1 } }
];

console.log(getOrderSummary(products));