document.addEventListener("DOMContentLoaded", function () {

    // Get the URL search parameters
    const queryParams = new URLSearchParams(window.location.search);

    // Get the "title" query parameter value from the URL
    const title = queryParams.get("title");

    // Fetch the recipeSource.json file
    fetch('/recipeSource.json')
        .then(response => response.json())
        .then(data => {
            // Find the recipe with the matching "Title" query parameter
            const recipe = data.recipes.find(recipe => recipe.Title.toLowerCase() === title.toLowerCase());

            if (recipe) {
                // Populate the HTML elements with recipe data
                document.getElementById("recipeTitle").textContent = recipe.Title;
                document.querySelector(".basics").innerHTML = `
                     <p>Total Time: ${recipe.TotalTime}</p>
                     <p>Serving Size: ${recipe.ServingSize}</p>
                     <p>Calories: ${recipe.Calories}</p>
                     <p>Protein: ${recipe.Protein}</p>
                     <p>Carbs: ${recipe.Carbs}</p>
                 `;
                document.querySelector(".ingredients").innerHTML = `
    <h3 class="ingredients-title">Ingredients</h3>
    <ul>
        ${recipe.Ingredients.map(ingredient => `<li>${ingredient.IngredientsList.join(', ')}</li>`).join('')}
    </ul>
`;

                document.querySelector(".instructions").innerHTML = `
                     <h3 class="instructions-title">Instructions</h3>
                     <ol>
                         ${recipe.Instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                     </ol>
                 `;
            } else {
                console.log("No matching recipe found.");
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });


    document.getElementById("allNav").addEventListener("click", function () {
        window.location.href = `index.html`;
    });

    document.getElementById("macroCalculatorLink").addEventListener("click", function (e) {
        window.location.href = `index.html?type=calc`;
    });

    // Event listener for "All" link
    document.getElementById("allNav").addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default link behavior
        const scrollToY = 0; // Set the Y position you want to scroll to (top of the page)

        // Use window.scrollTo with smooth behavior
        window.scrollTo({
            top: scrollToY,
            behavior: "smooth",
        });
    });


    // Event listener for "Big Boy Meals" link
    document.getElementById("bigNav").addEventListener("click", function () {
        window.location.href = `list.html?type=big`;
    });

    // Event listener for "Sizzle 'n' Shrink" link
    document.getElementById("shrinkNav").addEventListener("click", function () {
        window.location.href = `list.html?type=shrink`;
    });

    // Event listener for "Cozy Cookin'" link
    document.getElementById("cozyNav").addEventListener("click", function () {
        window.location.href = `list.html?type=cozy`;
    });

    // Event listener for "Chef-Esque" link
    document.getElementById("chefNav").addEventListener("click", function () {
        window.location.href = `list.html?type=chef`;
    });

});