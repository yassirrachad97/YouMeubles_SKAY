function changeImg(imgPath) {
    let mainImg = document.querySelector('.mainImg');
    mainImg.setAttribute('src', imgPath);
    //setAttribute take two parameter 1 the name of the attrbute you want
    //2 the new value of that attribute
}
// Get references to the buttons, input element, and the accessible-text element
const decreaseQtyButton = document.querySelector('[data-item="decrease-qty"]');
const increaseQtyButton = document.querySelector('[data-item="increase-qty"]');
const qtyInput = document.getElementById('qty-input');
const accessibleText = document.querySelector('[data-item="accessible-text"]');

// Store the initial value of the input when the page first loaded
const initialQty = qtyInput.value;

// Function to update the accessible text element and remove it after 500ms
function updateAccessibleText(newValue) {
  accessibleText.textContent = newValue;
  setTimeout(() => {
    accessibleText.textContent = ''; // Clear the text after 500ms
  }, 500);
}

// Function to update the input value while handling invalid input
function updateInputValue(newValue) {
  // Check if the new value is valid (matches the pattern)
  if (/^[0-9]*$/.test(newValue)) {
    qtyInput.value = newValue;
  } else {
    qtyInput.value = '1'; // If not valid, set it to "1"
  }
}

// Add an event listener to the input element to detect value changes
qtyInput.addEventListener('input', (event) => {
  const newQty = event.target.value;
  updateAccessibleText(newQty);
});

// Add an event listener to the "Decrease Quantity" button
decreaseQtyButton.addEventListener('click', () => {
  let currentQty = parseInt(qtyInput.value);

  if (currentQty > 0) {
    currentQty--;
  }

  updateInputValue(currentQty);
  updateAccessibleText(currentQty);
});

// Add an event listener to the "Increase Quantity" button
increaseQtyButton.addEventListener('click', () => {
  let currentQty = parseInt(qtyInput.value);
  currentQty++; // Increase the quantity by 1

  updateInputValue(currentQty);
  updateAccessibleText(currentQty);
});

// Add an event listener to the input element to handle blur
qtyInput.addEventListener('blur', () => {
  const inputValue = qtyInput.value;

  // Check if the input value does not match the pattern "[0-9]*"
  if (!/^[0-9]*$/.test(inputValue)) {
    // Set the input value to "1" if it's not valid
    updateInputValue('1');
  }
});



let a = ["bilal","zaim","yasir"];
let btna = Array.from(document.querySelectorAll(".btna"));
let p = document.getElementById("p")
console.log(btna)

btna.forEach((item , index)=>{
    item.addEventListener("click",()=>{
        p.textContent = a[index];
    })
})