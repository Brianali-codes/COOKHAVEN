import React, { useState, useEffect } from 'react';

const MealComponent = () => {
  const [meal, setMeal] = useState(null);
  const randomizeUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

  useEffect(() => {
    const getMeal = async () => {
      try {
        let response = await fetch(randomizeUrl);
        let data = await response.json();
        let finalMeal = data.meals[0];

        setMeal(finalMeal); // Store the meal data in the state
      } catch (error) {
        console.log(error);
      }
    };

    getMeal();
  }, []);

  const getIngredientsAndMeasures = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) { // Assuming there are up to 20 ingredients
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;
      const ingredient = meal[ingredientKey];
      const measure = meal[measureKey];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push({ ingredient, measure });
      }
    }
    return ingredients;
  };

  const ingredientsAndMeasures = meal ? getIngredientsAndMeasures(meal) : [];

  return (
    <>
    
      <div id="page" className='flex flex-row justify-center items-center border-solid border-2 border-gray-200 p-5 m-5 rounded-xl gap-5 bg-white dark:bg-black text-black dark:text-white dark:border-gray-50'>
        
        {meal ? (
          <>
            <div className='flex flex-col justify-start items-center gap-5 w-2/6' id='row1'>
              <p className='RCP'>TODAYS RANDOM </p>
              <p className='RCP'>RECIPE </p>
              <img src={meal.strMealThumb} alt={meal.strMeal} id='thumbnail1'/>
              
            </div>

            <div className='w-4/6 flex flex-col justify-start items-start text-black dark:text-white bg-white dark:bg-black' id='row2'>
              <h1 className='MealName'>Name: {meal.strMeal}</h1>
              <h1 className='MealName'>Area: {meal.strArea}</h1>
              <h1 className='MealName'>Category: {meal.strCategory}</h1>
              <h1 className='MealName'>Source: <a href={meal.strSource} target="_blank" className='watcher'><button> View </button> </a></h1>
              <br />
              <h1 className='MealName'>Watch : <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer"><button className='watcher'>Here</button></a></h1>
              <br />

              <p id='Ingredients' className='MealName'>Ingredients:</p>
              <ul id='ul12'>
                {ingredientsAndMeasures.map((item, index) => (
                  <li key={index}>
                    {item.ingredient} - {item.measure}
                  </li>
                ))}
              </ul>

              <br />
              <p id='Instructions'>Instructions.</p>
              <br />
              <p id='instructions'>{meal.strInstructions}</p>
            </div>
          </>
        )
         : (
          <p id='loadr'>LOADING...</p>
        )}
      </div>
    </>
  );
};

export default MealComponent;

