document.addEventListener("DOMContentLoaded", function () {
    // Get the URL search parameters
    const queryParams = new URLSearchParams(window.location.search);

    // Get the "type" query parameter value
    const type = queryParams.get("type");

    const currNav = document.getElementById(type + "Nav");

    currNav.classList.add("current");

    fetch('/recipeSource.json')
        .then(response => response.json())
        .then(data => {
            // Filter recipes based on the "Type" query parameter
            const recipes = data.recipes.filter(recipe => recipe.Type.toLowerCase() === type.toLowerCase());

            // Get a reference to the "recipe-grid" element
            const recipeGrid = document.getElementById('recipe-grid');

            // Create and insert the specified HTML structure for each recipe
            for (let i = 0; i < recipes.length; i++) {
                const recipe = recipes[i];

                // Create the wrapper div
                const wrapperDiv = document.createElement('div');
                wrapperDiv.className = 'wrapper';

                // Create the front-face div
                const frontFaceDiv = document.createElement('div');
                frontFaceDiv.className = 'flip-card front-face';

                // Create either an <img> or <i> element based on the presence of "Img" attribute
                let imageElement;
                if (recipe.Img && recipe.Img.trim() !== '') {
                    // Create an <img> element with the specified src attribute
                    imageElement = document.createElement('img');
                    imageElement.src = recipe.Img;
                    imageElement.className = 'recipe-img';
                } else {
                    // Create an <i> element with the specified class
                    imageElement = document.createElement('i');
                    imageElement.className = 'fa-solid fa-utensils recipe-icon';
                }

                // Create the h2 element for the title
                const titleElement = document.createElement('h2');
                titleElement.className = 'highlight';
                titleElement.textContent = recipe.Title;

                // Append the image element and title to the front-face div
                frontFaceDiv.appendChild(imageElement);
                frontFaceDiv.appendChild(titleElement);

                // Create the back-face div
                const backFaceDiv = document.createElement('div');
                backFaceDiv.className = 'flip-card back-face';

                // Create the info div
                const infoDiv = document.createElement('div');
                infoDiv.className = 'info';

                // Create the title for the back face
                const backFaceTitle = document.createElement('div');
                backFaceTitle.className = 'title';
                backFaceTitle.textContent = recipe.Title;
                // Create a line break element
                const lineBreak = document.createElement('br');

                // Create paragraphs for recipe details
                const totaltimeParagraph = document.createElement('p');
                totaltimeParagraph.textContent = `Total Time: ${recipe.TotalTime}`;
                const servingSizeParagraph = document.createElement('p');
                servingSizeParagraph.textContent = `Serving Size: ${recipe.ServingSize}`;
                const caloriesParagraph = document.createElement('p');
                caloriesParagraph.textContent = `Calories: ${recipe.Calories}`;
                const proteinParagraph = document.createElement('p');
                proteinParagraph.textContent = `Protein: ${recipe.Protein}`;
                const carbsParagraph = document.createElement('p');
                carbsParagraph.textContent = `Carbs: ${recipe.Carbs}`;

                // Create the "View Recipe" link
                const viewRecipeLink = document.createElement('a');
                viewRecipeLink.href = `recipe.html?title=${recipe.Title}`;
                viewRecipeLink.classList.add("view-recipe");
                viewRecipeLink.textContent = 'View Recipe';

                // Append the title, recipe details, and link to the info div
                infoDiv.appendChild(backFaceTitle);
                infoDiv.appendChild(lineBreak);
                infoDiv.appendChild(totaltimeParagraph);
                infoDiv.appendChild(servingSizeParagraph);
                infoDiv.appendChild(caloriesParagraph);
                infoDiv.appendChild(proteinParagraph);
                infoDiv.appendChild(carbsParagraph);
                infoDiv.appendChild(viewRecipeLink);

                // Append the info div to the back-face div
                backFaceDiv.appendChild(infoDiv);

                // Append the front-face and back-face divs to the wrapper div
                wrapperDiv.appendChild(frontFaceDiv);
                wrapperDiv.appendChild(backFaceDiv);

                // Append the wrapper div to the recipe-grid
                recipeGrid.appendChild(wrapperDiv);
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

    // Event listener for "View Recipe" links
    document.querySelectorAll(".view-recipe").forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault(); // Prevent the default link behavior
            window.location.href = this.getAttribute("href"); // Navigate to the recipe's route
        });
    });



});