import React, { useState, useEffect, useRef } from 'react';
import './App.css'

export default function InputSection() {
    const [input, setInput] = useState(null); // State for the input value
    const [mealData, setMealData] = useState(null); // State to store fetched meal data
    const inputRef = useRef(); // Use ref to access the input element

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`; // API URL

    useEffect(() => {
        const fetchData = async () => {
            if (input) {
                try {
                    let response = await fetch(url + input); // Fetching meal based on input value
                    let data = await response.json();
                    setMealData(data.meals ? data.meals[0] : null); // Store the first meal data or null if no results
                    console.log(data.meals ? data.meals[0] : "No results found"); // Log fetched data
                } catch (error) {
                    console.error("Error fetching meal data:", error);
                }
            }
        };

        fetchData(); // Trigger fetch on input change
    }, [input]); // Depend on `input` so it triggers every time input changes

    const handleSearchClick = () => {
        const inputValue = inputRef.current.value; // Get the value from the input element using ref
        setInput(inputValue); // Update the state with the new input value
    };

    return (
        <>
        <div className='flex flex-col justify-start p-7  dark:text-white text-black dark:bg-black bg-white'>
            <div>
            <a href="#page">
                <p className='h10'>Random Recipe.</p>
            </a>
            </div>
                <div className='flex flex-col'>
                <p className='h10'>Search Recipe.</p>
            </div>
      </div>
        <div className="flex flex-row border-solid border-2 border-gray-500 justify-between p-5 m-5 rounded-2xl dark:border-white bg-white dark:bg-black">
            <input
                type="text"
                placeholder="Search Recipe"
                className="w-5/6 outline-none dark:text-white bg-white dark:bg-transparent"
                ref={inputRef} // Attach the ref to the input
            />
            <button
                className="bg-gray-400 p-2 rounded-lg font-mono dark:bg-white text-black"
                onClick={handleSearchClick} // Handle the button click
            >
                Search Recipe
            </button>
        </div>

        {/* Render the meal data conditionally */}
        {mealData ? (
            <div className='SrcFood'>
                <img src={mealData.strMealThumb} alt="Meal Image" id='thumbnail2' />
                <div>
                    <p className='MealName dark:text-white text-black'><strong className='MealName'>Name:</strong> {mealData.strMeal}</p>
                    <p className='MealName dark:text-white text-black'><strong className='MealName'>Category:</strong> {mealData.strCategory}</p>
                    <p className='MealName dark:text-white text-black'><strong className='MealName'>Area:</strong> {mealData.strArea}</p>
                    <p className='MealName dark:text-white text-black'><strong className='MealName'>Instructions:</strong> {mealData.strInstructions}</p>
                </div>
            </div>
        ) : (
            <>
            <div className='SrcFood'>
                <p className='text-black dark:text-white'>No meal found. Please try a different search term.</p>
            </div>
            
            </>
        )}

        </>
    );
}
