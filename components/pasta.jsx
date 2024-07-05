import React, { useState } from "react";
import '../styledComponents/menu.css';
import { PastaData } from "./data";

const Pasta = () => {
    const [pasta, setPasta] = useState(PastaData);

    const Increment = (id) => {
        const updatedPastas = pasta.map((item) =>
            item.id === id ? { ...item, counter: (item.counter || 0) + 1 } : item
        );
        setPasta(updatedPastas);
    };

    const Decrement = (id) => {
        const updatedPastas = pasta.map((item) =>
            item.id === id && (item.counter || 0) > 0
                ? { ...item, counter: item.counter - 1 }
                : item
        );
        setPasta(updatedPastas);
    };

    return (
        <>
            <div className="container">
                <section className="pastaList">
                    {pasta.map((item) => {
                        const { id, name, image, description, price, counter } = item;
                        return (
                            <div key={id} id="pastaItem">
                                <img src={image} alt="" />
                                <section>
                                    <h3>{name}</h3>
                                    <p>{description}</p>
                                    <h4>₱ {price}</h4>
                                </section>
                                <section id="pastaOrderDetail">
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

export default Pasta;
