document.addEventListener("DOMContentLoaded", function () {
    let recipesData; // Store the fetched recipes data
    let bulkingRecipes = [];
    let cuttingRecipes = [];
    let chefEsqueRecipes = [];
    let mainRecipes = []; // New array for "Main" recipes

    // Function to fetch and organize the recipes data
    function fetchDataAndOrganize() {
      // Fetch data from the server
      fetch('/recipeSource.json')
        .then(response => response.json())
        .then(data => {
          recipesData = data; // Store the fetched recipes data

          // Organize recipes into four arrays based on type
          bulkingRecipes = recipesData.recipes.filter(recipe => recipe.Type.toLowerCase() === 'bulking');
          cuttingRecipes = recipesData.recipes.filter(recipe => recipe.Type.toLowerCase() === 'cutting');
          chefEsqueRecipes = recipesData.recipes.filter(recipe => recipe.Type.toLowerCase() === 'chefesque');
          mainRecipes = recipesData.recipes; // Store all recipes in the "Main" array

          // Initially, display "Main" recipes
          showRecipes('main');
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }

    fetchDataAndOrganize(); // Call the function to fetch and organize data on page load

    // Function to display recipe names based on selected type
    function showRecipes(type) {
      let recipesArray = [];

      if (type === 'bulking') {
        recipesArray = bulkingRecipes;
      } else if (type === 'cutting') {
        recipesArray = cuttingRecipes;
      } else if (type === 'chefesque') {
        recipesArray = chefEsqueRecipes;
      } else if (type === 'main') {
        recipesArray = mainRecipes; // Display all recipes for "Main"
      }

      // Debugging: Print the respective recipe array to the console
      console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} Recipes:`, recipesArray);

      // Display recipe names
      displayRecipeNames(recipesArray);
    }

    // Function to display recipe names in the container
    function displayRecipeNames(recipes) {
      const recipeContainer = document.getElementById('recipeContainer');
      recipeContainer.innerHTML = ''; // Clear previous content

      recipes.forEach(recipe => {
        // Create HTML elements to display recipe names
        const recipeName = document.createElement('div');
        recipeName.className = 'recipe-name';
        recipeName.textContent = recipe.Title;

        recipeContainer.appendChild(recipeName);
      });
    }

    // Add event listeners to the navigation links
    document.getElementById('bulkingNav').addEventListener('click', () => {
      showRecipes('bulking');
    });

    document.getElementById('cuttingNav').addEventListener('click', () => {
      showRecipes('cutting');
    });

    document.getElementById('chefesqueNav').addEventListener('click', () => {
      showRecipes('chefesque');
    });

    document.getElementById('mainNav').addEventListener('click', () => {
      showRecipes('main');
    });
  });

  window.addEventListener("scroll", function() {
    const recipeContainer = document.getElementById("recipeContainer");
    if (window.scrollY > 100) { // Adjust the threshold as needed
        recipeContainer.classList.add("shifted-up");
    } else {
        recipeContainer.classList.remove("shifted-up");
    }
});
