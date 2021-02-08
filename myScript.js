function check() {
  document.getElementById('mealList').innerHTML = '';
  const input = document.getElementById('inputValue').value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayMealList(data))
    .catch(err => alert('Enter the valid food name'));
}

const displayMealList = meals => {
  
  const mealListDiv = document.getElementById('mealList');
    meals.meals.forEach(meal => {
      const mealDiv = document.createElement('div');
      
      mealDiv.className = 'meal';
      const mealInfo = `
            <img onclick="displayFoodDetails('${meal.strMeal}')" src="${meal.strMealThumb}"></img>
            <h6 onclick="displayFoodDetails('${meal.strMeal}')" class="meal-name">${meal.strMeal}</h6>
         `;
      mealDiv.innerHTML = mealInfo;
  
      mealListDiv.appendChild(mealDiv);
      
    });
  
}

const displayFoodDetails = mealName =>{
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
  fetch(url)
  .then(res => res.json())
  .then(data => renderFoodInfo(data.meals[0]));
};

const renderFoodInfo = food => {
  const foodDiv = document.getElementById('mealIngredient');foodDiv.innerHTML='';
  const itemDiv = document.createElement('div');
  itemDiv.className = 'food';
  const foodInfo = `
    <img src="${food.strMealThumb}"></img>
    <h3 class="meal-name">${food.strMeal}</h3>
    <h6>Ingredients</h6>
    <ul>
      <li>${food.strIngredient1}</li>
      <li>${food.strIngredient2}</li>
      <li>${food.strIngredient3}</li>
      <li>${food.strIngredient4}</li>
      <li>${food.strIngredient5}</li>
      <li>${food.strIngredient6}</li>
      <li>${food.strIngredient7}</li>
      <li>${food.strIngredient8}</li>
    </ul>
  `;
  itemDiv.innerHTML = foodInfo;
  foodDiv.appendChild(itemDiv);
}
  





