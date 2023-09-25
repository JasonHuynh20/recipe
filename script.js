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

// const notifications = document.querySelector(".notifications"),
//   buttons = document.querySelectorAll(".buttons .btn");

// // Object containing details for different types of toasts
// const toastDetails = {
//   timer: 5000,
//   success: {
//     icon: 'fa-circle-check',
//     text: 'Success: This is a success toast.',
//   }
// }

// const removeToast = (toast) => {
//   toast.classList.add("hide");
//   if (toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
//   setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
// }

// const createToast = (id) => {
//   // Getting the icon and text for the toast based on the id passed
//   const { icon, text } = toastDetails[id];
//   const toast = document.createElement("li"); // Creating a new 'li' element for the toast
//   toast.className = `toast ${id}`; // Setting the classes for the toast
//   // Setting the inner HTML for the toast
//   toast.innerHTML = `<div class="column">
//       <i class="fa-solid ${icon}"></i>
//       <span>${text}</span>
//       <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>
//   </div>`;
//   notifications.appendChild(toast); // Append the toast to the notification ul
//   // Setting a timeout to remove the toast after the specified duration
//   toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
//   console.log("created noti");
// }


// const forkBtn = document.getElementById("success");
// forkBtn.addEventListener("click", () => createToast(forkBtn.id));


