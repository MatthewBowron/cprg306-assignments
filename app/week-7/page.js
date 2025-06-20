"use client"
import { useState } from "react";

import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page(){

    let itemsArray = itemsData.map((item) => ({...item}))

    let [items, setItems] = useState( itemsArray );

    const handleAddItem = (newItem) => setItems([...items, newItem]);

    return (
        <main className="bg-orange-100 p-5">
            <h1 className="text-amber-950 text-4xl font-serif pl-25">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}