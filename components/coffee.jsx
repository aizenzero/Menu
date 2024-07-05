import React, { useState } from "react";
import '../styledComponents/menu.css';
import { CoffeeData } from "./data";

const Coffee = () => {
    const [coffee, setCoffee] = useState(CoffeeData);

    const Increment = (id) => {
        const updatedCoffees = coffee.map((item) =>
            item.id === id ? { ...item, counter: (item.counter || 0) + 1 } : item
        );
        setCoffee(updatedCoffees);
    };

    const Decrement = (id) => {
        const updatedCoffees = coffee.map((item) =>
            item.id === id && (item.counter || 0) > 0
                ? { ...item, counter: item.counter - 1 }
                : item
        );
        setCoffee(updatedCoffees);
    };

    return (
        <>
            <div className="container">
                <section className="coffeeList">
                    {coffee.map((item) => {
                        const { id, name, image, description, price, counter } = item;
                        return (
                            <div key={id} id="coffeeItem">
                                <img src={image} alt="" />
                                <section>
                                    <h3>{name}</h3>
                                    <p>{description}</p>
                                    <h4>₱ {price}</h4>
                                </section>
                                <section id="coffeeOrderDetail">
                                    <h3>Order</h3>
                                    <p>{counter}</p>
                                    <button onClick={() => Increment(id)}>+</button>
                                    <button onClick={() => Decrement(id)}>-</button>
                                </section>
                            </div>
                        );
                    })}
                </section>
            </div>
        </>
    );
}

export default Coffee;
