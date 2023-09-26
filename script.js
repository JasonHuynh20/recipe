document.addEventListener("DOMContentLoaded", function () {
  // Check if the query parameter "type" is equal to "calc"
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const typeParam = urlParams.get("type");
  const macroCalculatorLink = document.getElementById("macroCalculatorLink");
  const macroCalculatorSection = document.getElementById("macroCalculator");
  const allNav = document.getElementById("allNav");
  const scrollToY = macroCalculatorSection.offsetTop - 50;

  if (typeParam === "calc") {
    window.scrollTo({
      top: scrollToY,
      behavior: "smooth"
    });

    // Remove the "type" query parameter from the URL
    urlParams.delete("type");
    const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    history.replaceState({}, document.title, newUrl);
  }



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
});


overlay.addEventListener("click", () =>
  section.classList.remove("active")
);

// Hide the modal box when the close button is clicked
closeBtn.addEventListener("click", () => {
  section.classList.remove("active");
});

// Get references to the elements
const steakElement = document.getElementById('steak');
const steakPElement = document.getElementById('steakP');

// Set the initial transform values and speed factors
let steakElementTransform = 510;
let steakPElementTransform = 650;

// Speed factors for parallax effects
const steakSpeedFactor = 0.3;   // Adjust as needed
const steakPSpeedFactor = 0.4;  // Adjust as needed

// Function to update the parallax effect
function updateParallax() {
  const scrollValue = window.scrollY;

  // Adjust the translation values based on your desired effects and speed factors
  steakElementTransform = 510 - scrollValue * steakSpeedFactor;
  steakPElementTransform = 650 - scrollValue * steakPSpeedFactor;

  // Apply the transformations to both elements
  steakElement.style.transform = `translateY(${steakElementTransform}px)`;
  steakPElement.style.transform = `translateY(${steakPElementTransform}px)`;
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

    // Check if the input number is less than 200
    if (parseInt(eInput.value) < 200) {
      form.classList.replace("valid", "error"); // Change class to "error"
      text.innerText = "You skinny as hell. I'm mandating a bulk! NOW!";
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

  // Event listener for "Big Boy Meals" link
  document.getElementById("bigCardLink").addEventListener("click", function () {
    window.location.href = `list.html?type=big`;
  });

  // Event listener for "Sizzle 'n' Shrink" link
  document.getElementById("shrinkCardLink").addEventListener("click", function () {
    window.location.href = `list.html?type=shrink`;
  });

  // Event listener for "Cozy Cookin'" link
  document.getElementById("cozyCardLink").addEventListener("click", function () {
    window.location.href = `list.html?type=cozy`;
  });

  // Event listener for "Chef-Esque" link
  document.getElementById("chefCardLink").addEventListener("click", function () {
    window.location.href = `list.html?type=chef`;
  });



});


