"use client"

import { useEffect, useState } from "react"

export default function MealIdeas( {ingredient} ) {

    const [meals, setMeals] = useState([]);
    const [mssg, setMssg] = useState("Select an item to see meal ideas");

    async function fetchMealIdeas(ingredient) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            if(!response.ok){
                console.log(response.status);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(`Error ${error.message}`);
        }
    }

    async function loadMealIdeas() {
        if(ingredient != null){ 
            setMeals([]);
            setMssg(`Loading ${ingredient}...`)

            const data = await fetchMealIdeas(ingredient);
            setMeals(data.meals);

            if (data.meals) 
                setMssg(`Here are some meal ideas using ${ingredient}:`);
            else 
                setMssg(`No meal ideas found for ${ingredient}`);
        }
    }

    useEffect( () =>{loadMealIdeas()}, [ingredient])

    return(
        <div>
            <h2 className="text-amber-950 text-xl font-serif">Meal Ideas</h2>
            <p className="text-amber-950 font-serif">{mssg}</p>
            {meals && meals.map( (meal)=> 
                <p key={meal.idMeal} 
                    className="text-amber-900 font-sans bg-yellow-200 mt-1 px-2 py-1 border-1 border-red-700 w-100 rounded"
                >{meal.strMeal}</p> 
            )}
        </div>
    )
}