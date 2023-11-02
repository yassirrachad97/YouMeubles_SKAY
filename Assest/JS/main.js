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



let a = [`Type de produit : meubles de repas avec accoudoirs,
 couleur : beige alpilles, composition : assise : mousse avec 
 revêtement tissu greenwich.structure : acier peinture époxy noir.
 piètement : acier finition poudre noir., matériau : tissu. Confort 
 et esthétique. Laissez-vous séduire par cette belle chaise en tissu, 
 de couleur beige. La combinaison des matériaux et du coloris de ce
  meuble en fait une pièce design et robuste. En effet, vous pouvez 
  jouir d'un réel confort grâce à sa structure en acier
...`, 
`Une chaise est un meuble qui peut avoir plusieurs dimensions,
 voici un exemple typique des dimensions d'une chaise standard :
Hauteur totale : Environ 80-100 centimètres (31-39 pouces)
Hauteur de l'assise : Environ 40-50 centimètres (16-20 pouces)
Largeur de l'assise : Environ 40-50 centimètres (16-20 pouces)
Profondeur de l'assise : Environ 40-50 centimètres (16-20 pouces)
Hauteur du dossier : Environ 40-60 centimètres (16-24 pouces)`,`<form>
<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
</div>
<div class="input-group">
    <span class="input-group-text">Entrer votre question</span>
    <textarea class="form-control" aria-label="With textarea"></textarea>
  </div>
<button type="submit" class="btn btn-primary" id="liveToastBtn" onclick="test(this)">Envoyer</button>
</form>`,`  <div class="card mb-3">
<div class="card-body">
  <div class="d-flex flex-start">
    <img class="rounded-circle shadow-1-strong me-3"
      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp" alt="avatar" width="40"
      height="40" />
    <div class="w-100">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h6 class="text-primary  mb-0">
          lara_stewart
          <span class="text-dark ms-2"> good product i'm satisfed about it</span>
        </h6>
        <p class="mb-0">2 days ago</p>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <p class="small mb-0" style="color: #aaa;">
          <a href="#!" class="link-grey">Remove</a> •
          <a href="#!" class="link-grey">Reply</a> •
          <a href="#!" class="link-grey">Translate</a>
        </p>
        <div class="d-flex flex-row">
          <i class="fas fa-star text-warning me-2"></i>
          <i class="far fa-check-circle" style="color: #aaa;"></i>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div class="card mb-3">
<div class="card-body">
  <div class="d-flex flex-start">
    <img class="rounded-circle shadow-1-strong me-3"
      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp" alt="avatar" width="40"
      height="40" />
    <div class="w-100">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h6 class="text-primary  mb-0">
          the_sylvester_cat
          <span class="text-dark ms-2">good quality  i'm satisfed about it</span>
        </h6>
        <p class="mb-0">3 days ago</p>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <p class="small mb-0" style="color: #aaa;">
          <a href="#!" class="link-grey">Remove</a> •
          <a href="#!" class="link-grey">Reply</a> •
          <a href="#!" class="link-grey">Translate</a>
        </p>
        <div class="d-flex flex-row">
          <i class="far fa-check-circle text-primary"></i>
        </div>
      </div>
    </div>
  </div>
</div>
</div>`];
let btna = Array.from(document.querySelectorAll(".btna"));
let p = document.getElementById("p")
console.log(btna)

btna.forEach((item, index) => {
  item.addEventListener("click", () => {
    p.style.minWidth = "0px"
    setTimeout(()=>{
      p.style.transition="1s";
      p.innerHTML = a[index];
      p.style.width = "100%"
    },1000)
  
  })
})


function test(e){
  console.log(e)
  let a = e;
  Swal.fire('votre reponse envoyer avec succée')
}