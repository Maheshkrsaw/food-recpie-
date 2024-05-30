document.getElementById('searchButton').addEventListener('click', searchRecipes);

function searchRecipes() {
    const query = document.getElementById('searchInput').value;
    const appId = 'e18ff368'; // Your actual app ID
    const appKey = '373e45a9842396a48c06137163f3a373'; // Your actual app key

    if (!query) {
        alert('Please enter a search term');
        return;
    }

    fetch(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Log the response data for debugging
            if (data.hits && data.hits.length > 0) {
                displayRecipes(data.hits);
            } else {
                displayNoRecipesFound();
            }
        })
        .catch(error => {
            console.error('Error fetching the recipes:', error);
            alert('Failed to fetch recipes. Please try again.');
        });
}

function displayRecipes(recipes) {
    const recipeContainer = document.getElementById('recipeContainer');
    recipeContainer.innerHTML = '';

    recipes.forEach(recipeData => {
        const recipe = recipeData.recipe;
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');

        recipeElement.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.label}">
            <h3>${recipe.label}</h3>
            <p>Calories: ${Math.round(recipe.calories)}</p>
            <a href="${recipe.url}" target="_blank">View Recipe</a>
        `;

        recipeContainer.appendChild(recipeElement);
    });
}

function displayNoRecipesFound() {
    const recipeContainer = document.getElementById('recipeContainer');
    recipeContainer.innerHTML = '<p class="no-recipes">No recipes found</p>';
}

function clearRecipes() {
    const recipeContainer = document.getElementById('recipeContainer');
    recipeContainer.innerHTML = '';
}
