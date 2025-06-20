"use client"

import { useState } from "react";

import Item from "./item";

export default function ItemList( {items} ){

    let itemsArray = items.map( (item) => ({...item}) );

    let [sortBy, setSortBy] = useState("name");
    const handleSortByChange = (e) => setSortBy(e.target.value);

    if(sortBy != "group category"){
        itemsArray.sort((a, b) => {
            let nameA = a[sortBy].toUpperCase();
            let nameB = b[sortBy].toUpperCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
    }else{
        itemsArray = itemsArray.reduce( (arr, item) => {
            for(let i = 0; i < arr.length; i++){
                if(arr[i][0].category < item.category)
                    continue;
                else if (arr[i][0].category == item.category)
                    arr[i].push(item);
                else
                    arr.splice(i, 0, [item]);
                return arr;
            }
            arr.push([item]);
            return arr;
        }, []);

        itemsArray.map( (group) => group.sort((a, b) => {
                let nameA = a.name.toUpperCase();
                let nameB = b.name.toUpperCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            })
        );
    }
    
    let buttonStyle = "m-2 mb-5 p-1 w-25 bg-amber-600 text-white font-serif border-2 rounded border-red-800 hover:bg-amber-500 hover:border-yellow-600";
    let activeButtonStyle = "m-2 mb-5 p-1.5 w-25 bg-stone-700 text-gray-300 font-serif rounded";
    return (
        <div>
            <div>
                <label className="text-amber-900 text-lg font-serif">Sort By: </label>
                <button className={sortBy=="name" ? activeButtonStyle : buttonStyle}
                    onClick={handleSortByChange} value={"name"}>Name</button>

                <button className={sortBy=="category" ? activeButtonStyle : buttonStyle}
                    onClick={handleSortByChange} value={"category"}>Category</button>
                    
                <button className={sortBy=="group category" ? activeButtonStyle : buttonStyle}
                    onClick={handleSortByChange} value={"group category"}>Grouped Category</button>
            </div>

            <div>
                {sortBy != "group category" ? itemsArray.map( (item) => <Item key={item.id} itemObj={item}/> ) : 
                
                itemsArray.map( (group) => (
                    <div key={group[0].category}>
                        <h3 className="text-amber-950 text-2xl font-serif capitalize">{group[0].category}</h3>
                        {group.map( (item) => <Item key={item.id} itemObj={item}/> )}
                    </div>
                ))}
            </div>
        </div>
    );
}