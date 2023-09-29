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

        // Create and insert an image element or icon element
        const imgContainer = document.querySelector(".basic-container");
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

        // Insert the created element into the container
        imgContainer.insertBefore(imageElement, imgContainer.firstChild);

        // Generate instructions HTML for each section
        const instructionsHtml = recipe.Instructions.map(section => {
            const sectionHtml = `
                <h3 class="instructions-title">${section.Section}</h3>
                <ol>
                    ${section.Steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
            `;
            return sectionHtml;
        }).join('');

        document.querySelector(".instructions").innerHTML = instructionsHtml;

        // Convert Ingredients object to an array for easier iteration
        const ingredientsArray = Object.entries(recipe.Ingredients).map(([section, items]) => {
            return { section, items };
        });

        const ingredientsListHTML = ingredientsArray.map(({ section, items }) => `
            <h3 class="ingredients-title">${section}</h3>
            <ul>
                ${items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `).join('');

        document.querySelector(".ingredients").innerHTML = ingredientsListHTML;

        document.querySelector(".basics").innerHTML = `
            <p><span class="title">Total Time:</span> ${recipe.TotalTime}</p>
            <p><span class="title">Serving Size:</span> ${recipe.ServingSize}</p>
            <p><span class="title">Calories:</span> ${recipe.Calories}</p>
            <p><span class="title">Protein:</span> ${recipe.Protein}</p>
            <p><span class="title">Carbs:</span> ${recipe.Carbs}</p>
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