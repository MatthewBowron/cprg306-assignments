"use client"
import { useState } from "react";

export default function NewItem( {onAddItem} ){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleName = (e) => setName(e.target.value);
    const increment = (e) => {
        e.preventDefault();
        if(quantity < 20) setQuantity(quantity + 1);
    }
    const decrement = (e) => {
        e.preventDefault();
        if(quantity > 1) setQuantity(quantity - 1);
    }    
    const handleCategory = (e) => setCategory(e.target.value);

    const generateID = () => {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 16; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let item = {
            id: generateID(),
            name: name,
            quantity: quantity,
            category: category
        }
        onAddItem(item)

        setName("")
        setQuantity(1)
        setCategory("produce")
    }

    let decStyles, incStyles;
    decStyles = incStyles = "bg-amber-500 hover:bg-yellow-400 text-white rounded px-2 ml-2";

    if (quantity >= 20) {
        incStyles = "bg-gray-500 text-white rounded px-2 ml-2"
    }else if (quantity <= 1) {
        decStyles = "bg-gray-500 text-white rounded px-2 ml-2"
    }

    return (
        <form onSubmit={handleSubmit} className="w-100 m-5">
            <div>
                <input 
                    type="text"
                    className="p-2 m-2 rounded border w-100 border-amber-500 bg-white focus:bg-orange-50"
                    placeholder="Item name"
                    onChange={handleName}
                    value={name}
                    required={true}
                />
            </div>
            <div className="inline-flex">
                <div className="flex justify-end bg-white w-40 m-2 p-2 rounded">
                    <p className="inline mr-16">{quantity}</p>
                    <button className={decStyles} onClick={decrement}>-</button>
                    <button className={incStyles} onClick={increment}>+</button>
                </div>

                <div>
                    <select type="date" className="p-2 m-2 w-40 ml-18 rounded border border-amber-500 bg-white focus:bg-orange-50" onChange={handleCategory} value={category}> 
                        <option disabled>Category</option>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen">Frozen Food</option>
                        <option value="canned">Canned Goods</option>
                        <option value="dry">Dry Goods</option>
                        <option value="beverage">Beverages</option>
                        <option value="snack">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>

            <div>
                <button className="bg-amber-500 text-white rounded w-100 m-2 px-3 py-2 hover:bg-yellow-400">+</button>
            </div>
        </form>
    );
}