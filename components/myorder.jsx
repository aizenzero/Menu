import React from "react";

const MyOrder = ({ orderedItems }) => {
    return (
        <div className="my-order">
            <h2>My Order</h2>
            <ul>
                {orderedItems.map((item) => (
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <span>Quantity: {item.quantity}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyOrder;
