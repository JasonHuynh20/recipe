document.addEventListener("DOMContentLoaded", function () {
    // Get the URL search parameters
    const queryParams = new URLSearchParams(window.location.search);

    // Get the "type" query parameter value
    const type = queryParams.get("type");

    const currNav = document.getElementById(type + "Nav");

    currNav.classList.add("current");

    // Fetch the JSON data
    fetch('/recipeSource.json')
        .then(response => response.json())
        .then(data => {
            // Filter recipes based on the "Type" query parameter
            const recipes = data.recipes.filter(recipe => recipe.Type.toLowerCase() === type.toLowerCase());

            // Print the filtered recipes to the console
            console.log("Filtered Recipes:", recipes);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});