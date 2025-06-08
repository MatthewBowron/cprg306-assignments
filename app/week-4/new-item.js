"use client"
import { useState } from "react";

export default function NewItem(){

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        let currentQuantity = quantity.valueOf();
        if(currentQuantity < 20) setQuantity(currentQuantity + 1);
    }

    const decrement = () => {
        let currentQuantity = quantity.valueOf();
        if(currentQuantity > 1) setQuantity(currentQuantity - 1);
    }

    let decStyles, incStyles;
    decStyles = incStyles = "bg-blue-500 hover:bg-blue-300 text-white rounded px-2 ml-2";

    if (quantity >= 20) {
        incStyles = "bg-gray-500 text-white rounded px-2 ml-2"
    }else if (quantity <= 1) {
        decStyles = "bg-gray-500 text-white rounded px-2 ml-2"
    }

    return (
        <div className="flex justify-end bg-white mx-auto w-32 m-2 p-2 rounded">
            <p className="inline mr-8">{quantity}</p>
            <button className={decStyles}
                onClick={decrement}>-</button>
            <button className={incStyles}
                onClick={increment}>+</button>
        </div>
    );
}