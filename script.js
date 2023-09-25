document.addEventListener("DOMContentLoaded", function() {
  // Get a reference to the "Macro Calculator" link
  const macroCalculatorLink = document.getElementById("macroCalculatorLink");

  // Get a reference to the "Macro-Nutrients Calculator" section
  const macroCalculatorSection = document.getElementById("macroCalculator");

  // Add a click event listener to the link
  macroCalculatorLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Calculate the scroll position to reach the "Macro-Nutrients Calculator" section
    const scrollToY = macroCalculatorSection.offsetTop - 50;

    // Use smooth scrolling for a better user experience
    window.scrollTo({
      top: scrollToY,
      behavior: "smooth"
    });
  });
});


document.addEventListener("scroll", function () {
  var firstCard = document.querySelector(".card:first-of-type");

  if (window.scrollY >= (firstCard.clientHeight * 0.7)) {
    document.body.classList.add("scroll-active");
  } else {
    document.body.classList.remove("scroll-active", "scroll-active-img");
  }
});

document.addEventListener("scroll", function () {
  var firstCard = document.querySelector(".card:first-of-type");
  var scrollOffset = Math.min(window.scrollY / 7, 200);
  firstCard.style.transform = `translateY(-${scrollOffset}px)`;

  var mainText = document.querySelector(".gradient-text");
  var textPosition = -scrollOffset + "px";
  mainText.style.transform = `translateY(${textPosition})`;
});

const form = document.querySelector("form"),
  eInput = form.querySelector(".input"),
  text = form.querySelector(".text");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Preventing form from submitting
  let numberPattern = /^\d+$/; // Regex pattern to validate if the input is a number
  form.classList.add("error");
  form.classList.remove("valid");
  if (eInput.value == "") {
    text.innerText = "Number can't be blank";
  } else if (!eInput.value.match(numberPattern)) {
    text.innerText = "Please enter a valid number";
  } else {
    form.classList.replace("error", "valid"); // Replacing error class with valid class
    text.innerText = "Calculated";

    const activeElement = document.querySelector(".active");
    const eInput = document.querySelector("input.input"); // Assuming this is your input element

    // Your calculations
    const calories = activeElement ? (parseInt(activeElement.textContent) * parseInt(eInput.value)) : 0; // Parse the text content to integers
    const protein = parseInt(eInput.value);

    // Select the <p> tags within the first result-section
    const calorieText = document.getElementById('calorie-text');
    const proteinText = document.getElementById('protein-text');

    // Check if the elements were found
    if (calorieText && proteinText) {
      // Update the text content of the <p> tags with the calculated values
      calorieText.textContent = `${calories} Calories Per Day`;
      proteinText.textContent = `${protein} Grams of Protein Per Day`;
    } else {
      console.log('One or both of the elements were not found.');
    }
  }
});


// Selecting DOM elements
const numbers = document.querySelectorAll(".link");


// Add event listeners to the number links
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    e.preventDefault();
    const clickedNumber = number.textContent;

    document.querySelector(".active").classList.remove("active");
    number.classList.add("active");

    console.log(`Clicked number: ${clickedNumber}`);
  });
});




document.addEventListener("DOMContentLoaded", function () {
  // Event listener for "All" link
  document.getElementById("allNav").addEventListener("click", function () {
    loadRecipes("All");
  });

  // Event listener for "Big Boy Meals" link
  document.getElementById("bigNav").addEventListener("click", function () {
    loadRecipes("Big");
  });

  // Event listener for "Sizzle 'n' Shrink" link
  document.getElementById("shrinkNav").addEventListener("click", function () {
    loadRecipes("Shrink");
  });

  // Event listener for "Cozy Cookin'" link
  document.getElementById("cozyNav").addEventListener("click", function () {
    loadRecipes("Cozy");
  });

  // Event listener for "Chef-Esque" link
  document.getElementById("chefNav").addEventListener("click", function () {
    loadRecipes("Chef");
  });

  // Event listener for "Macro Calculator" link (optional)
  document.getElementById("macroCalculatorLink").addEventListener("click", function () {
    // Handle the Macro Calculator link if needed
  });

  function loadRecipes(type) {
    // Load data from recipeSource.json using fetch
    fetch("recipeSource.json")
      .then((response) => response.json())
      .then((data) => {
        // Filter recipes based on the selected type
        const filteredRecipes = data.recipes.filter((recipe) => recipe.Type === type);

        // Redirect to list.html with query parameter
        window.location.href = `list.html?type=${type}`;
      })
      .catch((error) => {
        console.error("Error loading data: ", error);
      });
  }
});


