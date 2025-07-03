"use client"
import { useState } from "react";

import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page(){

    let itemsArray = itemsData.map((item) => ({...item}))

    const [items, setItems] = useState( itemsArray );
    const handleAddItem = (newItem) => setItems([...items, newItem]);

    const [selectedItemName, setSelectedItemName] = useState();
    const handleItemSelect = (selectedItem) => {
        selectedItem = selectedItem.split(",")[0];  // get everything before the first comma
        selectedItem = selectedItem.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, ''); // remove emojis
        setSelectedItemName(selectedItem.trim());
    }

    return (
        <main className="bg-orange-100 p-5 flex">
            <div>
                <h1 className="text-amber-950 text-4xl font-serif pl-25">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div>
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
}