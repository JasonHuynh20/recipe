document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the "Macro Calculator" link
  const macroCalculatorLink = document.getElementById("macroCalculatorLink");

  // Get a reference to the "Macro-Nutrients Calculator" section
  const macroCalculatorSection = document.getElementById("macroCalculator");

  const allNav = document.getElementById("allNav");
  allNav.classList.add("current");

  // Add a click event listener to the link
  macroCalculatorLink.addEventListener("click", function (event) {
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





const section = document.querySelector("section"),
  overlay = document.querySelector(".overlay"),
  showBtn = document.querySelector(".show-modal"),
  closeBtn = document.querySelector(".close-btn");

// showBtn.addEventListener("click", () => section.classList.add("active") console.log("Hello"));
showBtn.addEventListener("click", () => {
  section.classList.add("active");
  console.log("Hello");
});


overlay.addEventListener("click", () =>
  section.classList.remove("active")
);

// Hide the modal box when the close button is clicked
closeBtn.addEventListener("click", () => {
  section.classList.remove("active");
  console.log("goodbye");
});











// Get references to the elements
const steakElement = document.getElementById('steak');

// Set the initial transform values
let steakElementTransform = 360;

// Function to update the parallax effect
function updateParallax() {
  const scrollValue = window.scrollY;

  // Adjust the translation values based on your desired effect
  steakElementTransform = 360 - scrollValue * 0.2; // Adjust the factor as needed

  // Apply the transformations
  steakElement.style.transform = `translateY(${steakElementTransform}px)`;
}

// Attach the updateParallax function to the scroll event
window.addEventListener('scroll', updateParallax);

// Call updateParallax initially to set the initial positions
updateParallax();


document.addEventListener("scroll", function () {
  var firstCard = document.querySelector(".card:first-of-type");
  // Get a reference to the "Macro-Nutrients Calculator" section
  const macroCalculatorSection = document.getElementById("macroCalculator");

  if (window.scrollY >= (firstCard.clientHeight * 0.7)) {
    document.body.classList.add("scroll-active");
  } else {
    document.body.classList.remove("scroll-active", "scroll-active-img");
  }

  if (window.scrollY >= (macroCalculatorSection.offsetTop - 100)) {
    const macroCalculatorLink = document.getElementById("macroCalculatorLink");
    macroCalculatorLink.classList.add("current");
  } else {
    macroCalculatorLink.classList.remove("current");
  }

  if (window.scrollY < (macroCalculatorSection.offsetTop - 100)) {
    const allNav = document.getElementById("allNav");
    allNav.classList.add("current");
  } else {
    allNav.classList.remove("current");
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
    loadRecipes("big");
  });

  // Event listener for "Sizzle 'n' Shrink" link
  document.getElementById("shrinkNav").addEventListener("click", function () {
    loadRecipes("shrink");
  });

  // Event listener for "Cozy Cookin'" link
  document.getElementById("cozyNav").addEventListener("click", function () {
    loadRecipes("cozy");
  });

  // Event listener for "Chef-Esque" link
  document.getElementById("chefNav").addEventListener("click", function () {
    loadRecipes("chef");
  });


  function loadRecipes(type) {
    // Redirect to list.html with query parameter
    window.location.href = `list.html?type=${type}`;
  }
});


