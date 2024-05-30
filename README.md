# 🍽️ Food Recipe App 🍳

# Recipe App

Welcome to the Recipe App! This web application allows users to search for various food recipes using the Edamam Recipe Search API. Users can enter a search term to find recipes related to their query and view details like recipe images, calorie information, and links to the full recipes.

## Live Demo

Check out the live version of the app here: [Recipe App Live](https://maheshkrsaw.github.io/food-recpie-/)

## Features

- **Search Functionality**: Users can search for recipes by entering a keyword.
- **Recipe Display**: Displays a list of recipes with images, names, and calorie information.
- **External Links**: Provides links to the full recipes on external websites.
- **No Results Handling**: Displays a friendly message and icon when no recipes are found for a search term.

## Technologies Used

- **HTML**: For the structure of the web pages.
- **CSS**: For styling and layout.
- **JavaScript**: For adding interactivity and fetching data from the API.
- **Edamam Recipe Search API**: To fetch recipe data.

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/recipe-app.git
    cd recipe-app
    ```

2. Open the project in your preferred code editor.

3. Update the `index.html` file to include your API credentials:
    ```html
    <script src="script.js"></script>
    ```

4. Replace the placeholders in the `script.js` file with your actual `app_id` and `app_key` from Edamam:
    ```javascript
    const appId = 'YOUR_APP_ID';
    const appKey = 'YOUR_APP_KEY';
    ```

5. Open `index.html` in your web browser to view the app:
    ```bash
    open index.html
    ```

## How It Works

1. **User Interface**: The user interface is created using HTML and styled with CSS. The header includes an input field and a search button for users to enter their search terms.

2. **Fetching Data**: When the user clicks the search button, a JavaScript function (`searchRecipes`) is triggered. This function takes the input value and sends a request to the Edamam Recipe Search API.

3. **Displaying Results**: The response from the API is processed to extract relevant recipe data. If recipes are found, they are displayed in a grid format with images, names, and calorie information. Each recipe includes a link to the full recipe on an external site.

4. **No Results Handling**: If no recipes are found, a message with an icon is displayed to inform the user that no recipes were found for their search term.

## API Usage

This app uses the [Edamam Recipe Search API](https://developer.edamam.com/edamam-recipe-api) to fetch recipe data. You will need to sign up for an API key and app ID from Edamam to use the API.

## Future Improvements

- **Responsive Design**: Make the app fully responsive for all device sizes.
- **Favorite Recipes**: Allow users to save and view their favorite recipes.
- **Advanced Search**: Include additional search filters like diet type, cuisine, and meal type.

## Contact

If you have any questions or suggestions, feel free to reach out to me at [your-email@example.com].

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
