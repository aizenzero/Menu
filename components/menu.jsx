import React, { useState } from "react";
import '../styledComponents/menu.css';
import {Burger} from "./data";
import Pasta from "./pasta";
import Coffee from "./coffee";
import MyOrder from "./myorder";

const Menu = () => {
    const [burger, setBurger] = useState(Burger);
    const [selectedMenu, setSelectedMenu] = useState("burger");
    const [orderedItems, setOrderedItems] = useState([]);

    const Increment = (id) => {
        const updatedBurgers = burger.map((item) =>
            item.id === id ? { ...item, counter: (item.counter || 0) + 1 } : item
        );
        setBurger(updatedBurgers);
    };

    const Decrement = (id) => {
        const updatedBurgers = burger.map((item) =>
            item.id === id && (item.counter || 0) > 0
                ? { ...item, counter: item.counter - 1 }
                : item
        );
        setBurger(updatedBurgers);
    };

    const handleViewOrder = () => {
        const currentOrder = burger.filter((item) => item.counter > 0);
        setOrderedItems(currentOrder);
    };

    const renderMenu = () => {
        switch (selectedMenu) {
            case "burger":
                return (
                    <section className="burgerList">
                        {burger.map((item) => {
                            const { id, image, name, description, price, counter } = item;
                            return (
                                <div key={id} id="burgerItem">
                                    <img src={image} alt="" width={"200px"} height={"200px"} />
                                    <section>
                                        <h3>{name}</h3>
                                        <p>{description}</p>
                                        <h4>₱ {price}</h4>
                                    </section>
                                    <section id="burgerOrderDetail">
                                        <h3>Order</h3>
                                        <p>{counter}</p>
                                        <button onClick={() => Increment(id)}>+</button>
                                        <button onClick={() => Decrement(id)}>-</button>
                                    </section>
                                </div>
                            );
                        })}
                    </section>
                );
            case "coffee":
                return <Coffee />;
            case "pasta":
                return <Pasta />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className="container">
                <h1 id="menu">Menu</h1>
                <section id="menuButtonList">
                    <button onClick={() => setSelectedMenu("burger")}>Burger</button>
                    <button onClick={() => setSelectedMenu("coffee")}>Coffee</button>
                    <button onClick={() => setSelectedMenu("pasta")}>Pasta</button>
                </section>
                
                <div>
                    {renderMenu()}
                </div>
            </div>
            <button id="viewMyOrderButton" onClick={handleViewOrder}>View My Order</button>
            {orderedItems.length > 0 && <MyOrder orderedItems={orderedItems} />}
        </>
    );
};

export default Menu;
