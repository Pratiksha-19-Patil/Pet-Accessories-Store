// ==================== PRODUCTS DATA ====================
const PRODUCTS = [
  // 🐶 Dog Products
  { id: 1, name: "Dog Collar", price: 499, oldPrice: 699, rating: 4.5, desc: "Durable and stylish collar.", category: "dog", img: "../Images/dog collar.webp" },
  { id: 2, name: "Dog Bed", price: 1499, oldPrice: 1999, rating: 4.7, desc: "Soft and comfy bed for dogs.", category: "dog", img: "../Images/dog bed.webp" },
  { id: 3, name: "Dog Leash", price: 699, oldPrice: 899, rating: 4.2, desc: "Strong leash for daily walks.", category: "dog", img: "../Images/dog leash.jpg" },
  { id: 4, name: "Dog Chew Toy", price: 399, oldPrice: 499, rating: 4.0, desc: "Safe chew toy for playful dogs.", category: "dog", img: "../Images/dog chew toy.jpg" },
  { id: 5, name: "Dog Harness", price: 899, oldPrice: 1099, rating: 4.4, desc: "Adjustable harness for comfort.", category: "dog", img: "../Images/dog harness.webp" },
  { id: 6, name: "Dog Food Dispenser", price: 1299, oldPrice: 1599, rating: 4.6, desc: "Automatic food dispenser.", category: "dog", img: "../Images/dog food dispenser.avif" },
  { id: 7, name: "Dog Blanket", price: 599, oldPrice: 799, rating: 4.3, desc: "Warm and cozy blanket.", category: "dog", img: "../Images/dog blanket.webp" },
  { id: 8, name: "Dog Raincoat", price: 799, oldPrice: 999, rating: 4.1, desc: "Waterproof coat for dogs.", category: "dog", img: "../Images/dog raincoat.webp" },
  { id: 9, name: "Dog Shoes", price: 699, oldPrice: 899, rating: 4.0, desc: "Protective shoes for dogs.", category: "dog", img: "../Images/dog shoes.jpg" },
  { id: 10, name: "Dog Shampoo", price: 349, oldPrice: 499, rating: 4.5, desc: "Gentle shampoo for shiny coat.", category: "dog", img: "../Images/dog shampoo.webp" },
  { id: 11, name: "Dog Brush", price: 499, oldPrice: 699, rating: 4.4, desc: "Brush to keep fur neat.", category: "dog", img: "../Images/dog brush.webp" },
  { id: 12, name: "Dog Travel Bag", price: 1999, oldPrice: 2499, rating: 4.7, desc: "Spacious bag for dog travel.", category: "dog", img: "../Images/dog travel bag.webp" },
  // 🐱 Cat Products
 { id: 13, name: "Cat Scratcher", price: 799, oldPrice: 999, rating: 4.2, desc: "Keeps your cat’s claws healthy.", category: "cat", img: "../Images/cat scratcher.webp" },
  { id: 14, name: "Cat Toy Ball", price: 299, oldPrice: 399, rating: 4.0, desc: "Interactive toy ball for cats.", category: "cat", img: "../Images/cat toy ball.jpg" },
  { id: 15, name: "Cat Bed", price: 999, oldPrice: 1299, rating: 4.5, desc: "Soft and warm cat bed.", category: "cat", img: "../Images/cat bed.webp" },
  { id: 16, name: "Cat Tower", price: 1799, oldPrice: 2299, rating: 4.6, desc: "Multi-level tower for cats.", category: "cat", img: "../Images/cat tower.webp" },
  { id: 17, name: "Cat Litter Box", price: 699, oldPrice: 999, rating: 4.3, desc: "Spacious litter box.", category: "cat", img: "../Images/cat litter box.webp" },
  { id: 18, name: "Cat Grooming Brush", price: 499, oldPrice: 699, rating: 4.1, desc: "Keeps cat fur smooth.", category: "cat", img: "../Images/cat brush.webp" },
  { id: 19, name: "Cat Water Fountain", price: 3499, oldPrice: 3999, rating: 4.8, desc: "Fresh flowing water for cats.", category: "cat", img: "../Images/cat fountain.webp" },
  { id: 20, name: "Cat Blanket", price: 599, oldPrice: 799, rating: 4.4, desc: "Soft blanket for cats.", category: "cat", img: "../Images/cat blanket.webp" },
  { id: 21, name: "Cat Carrier", price: 1699, oldPrice: 2099, rating: 4.5, desc: "Safe carrier for cats.", category: "cat", img: "../Images/cat carrier.webp" },
  { id: 22, name: "Cat Nail Clipper", price: 299, oldPrice: 399, rating: 4.0, desc: "Easy cat nail clipping tool.", category: "cat", img: "../Images/cat nail clipper.webp" },
  { id: 23, name: "Cat Collar Bell", price: 199, oldPrice: 299, rating: 4.2, desc: "Cute collar with bell.", category: "cat", img: "../Images/cat collar.webp" },
  { id: 24, name: "Cat Treat Dispenser", price: 899, oldPrice: 1199, rating: 4.3, desc: "Dispenses cat treats easily.", category: "cat", img: "../Images/cat treat dispenser.webp" },


  // 🐾 General Products
  { id: 25, name: "Pet Grooming Kit", price: 1199, oldPrice: 1499, rating: 4.6, desc: "Complete pet grooming kit.", category: "general", img: "../Images/pet grooming kit.jpg" },
  { id: 26, name: "Food Bowl Set", price: 699, oldPrice: 899, rating: 4.3, desc: "Set of 2 food bowls.", category: "general", img: "../Images/food bowl set.jpg" },
  { id: 27, name: "Pet Travel Carrier", price: 1999, oldPrice: 2499, rating: 4.7, desc: "Portable travel carrier.", category: "general", img: "../Images/pet travel carrier.webp" },
  { id: 28, name: "Pet Water Fountain", price: 1599, oldPrice: 1899, rating: 4.5, desc: "Fresh drinking water.", category: "general", img: "../Images/pet water fountain.webp" },
  { id: 29, name: "Pet Blanket", price: 599, oldPrice: 799, rating: 4.2, desc: "Soft cozy blanket.", category: "general", img: "../Images/pet blanket.webp" },
  { id: 30, name: "Pet Shampoo", price: 349, oldPrice: 499, rating: 4.4, desc: "Gentle shampoo.", category: "general", img: "../Images/pet shampoo.webp" },
  { id: 31, name: "Pet Nail Clipper", price: 299, oldPrice: 399, rating: 4.0, desc: "Easy nail clipping tool.", category: "general", img: "../Images/nail clipper.webp" },
  { id: 32, name: "Pet First Aid Kit", price: 999, oldPrice: 1299, rating: 4.6, desc: "Emergency first aid kit.", category: "general", img: "../Images/pet firstaid.webp" },
  { id: 33, name: "Pet Carrier Backpack", price: 2199, oldPrice: 2699, rating: 4.7, desc: "Stylish backpack carrier.", category: "general", img: "../Images/pet backpack.webp" },
  { id: 34, name: "Pet Feeding Mat", price: 449, oldPrice: 599, rating: 4.2, desc: "Non-slip feeding mat.", category: "general", img: "../Images/feeding mat.webp" },
  { id: 35, name: "Pet Cooling Pad", price: 1299, oldPrice: 1599, rating: 4.5, desc: "Keeps pets cool in summer.", category: "general", img: "../Images/cooling pad.webp" },
  { id: 36, name: "Pet Training Pads", price: 899, oldPrice: 1199, rating: 4.3, desc: "Absorbent training pads.", category: "general", img: "../Images/training pads.webp" },
];

const productGrid = document.getElementById("productGrid");

function renderProducts(filter = "all") {
  productGrid.innerHTML = "";
  const filtered = filter === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  if (filtered.length === 0) {
    productGrid.innerHTML = `<p class="text-muted">No products found for this category.</p>`;
    return;
  }

  filtered.forEach(product => {
    productGrid.innerHTML += `
      <div class="col-md-3 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${product.img}" class="card-img-top" alt="${product.name}">
          <div class="card-body text-center">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text small text-muted">${product.desc}</p>
            <p class="card-text">
              <span class="fw-bold text-success">₹${product.price}</span> 
              <del class="text-muted">₹${product.oldPrice}</del>
            </p>
            <p class="text-warning">⭐ ${product.rating}</p>
            <button class="btn btn-sm btn-primary me-2" onclick="addToCart(${product.id})">Add to Cart</button>
            <button class="btn btn-sm btn-warning" onclick="buyNow(${product.id})">Buy Now</button>
              
     
          </div>
        </div>
      </div>
    `;
    
  });
}

// ==================== CATEGORY FILTER ====================
document.querySelectorAll(".category-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProducts(btn.dataset.cat);
  });
});
// ==================== SEARCH FUNCTIONALITY ====================
function handleSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  
  const filtered = PRODUCTS.filter(product =>
    product.name.toLowerCase().includes(query)
  );

  renderSearchResults(filtered);
}

function renderSearchResults(results) {
  productGrid.innerHTML = "";

  if (results.length === 0) {
    productGrid.innerHTML = `<p class="text-muted">No products match your search.</p>`;
    return;
  }

  results.forEach(product => {
    productGrid.innerHTML += `
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <img src="${product.img}" class="card-img-top" alt="${product.name}">
          <div class="card-body text-center">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">₹${product.price}</p>
            <button class="btn btn-sm btn-primary" onclick="addToCart(${product.id})">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
  });
}





// ==================== CART FUNCTIONALITY ====================
let cart = [];

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(p => p.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  updateCartUI();
}

  



function updateCartUI() {
  const cartItems = document.getElementById("cartItems");
  const grandTotal = document.getElementById("grandTotal");
  const discountRow = document.getElementById("discountRow");
  const discountAmount = document.getElementById("discountAmount");
  const finalTotal = document.getElementById("finalTotal");
  const cartCount = document.getElementById("cart-count");

  cartItems.innerHTML = "";
  let total = 0, count = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    count += item.qty;

    cartItems.innerHTML += `
      <div class="list-group-item d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <img src="${item.img}" alt="${item.name}">
          <div class="cart-text">
            <strong>${item.name}</strong><br>
            ₹${item.price} × ${item.qty}
          </div>
        </div>
        <div>
          <button class="btn btn-sm btn-success me-1" onclick="changeQty(${item.id}, 1)">+</button>
          <button class="btn btn-sm btn-warning me-1" onclick="changeQty(${item.id}, -1)">-</button>
          <button class="btn btn-sm btn-danger" onclick="removeFromCart(${item.id})">X</button>
        </div>
      </div>
    `;
  });

  let discount = 0;
  if (total > 2000) {
    discount = Math.floor(total * 0.1); // 10% off
    discountRow.style.display = "flex";
    discountAmount.innerText = discount;
  } else {
    discountRow.style.display = "none";
  }

  grandTotal.innerText = total;
  finalTotal.innerText = total - discount;
  cartCount.innerText = count;
}

function handleRegister() {
  const name = document.getElementById("registerName").value;
  const email = document.getElementById("registerEmail").value;
  const pass = document.getElementById("registerPassword").value;

  if (name && email && pass) {
    alert("Account created successfully! Please login now.");
    const registerModal = bootstrap.Modal.getInstance(document.getElementById("registerModal"));
    registerModal.hide();

    // Automatically open login modal after registration
    const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
    loginModal.show();
  } else {
    alert("Please fill in all fields.");
  }
}


// ==================== BUY NOW ====================
function buyNow(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  // Add product to cart first
  addToCart(id);

  // Force login before purchase
  const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
  loginModal.show();
}

// ==================== LOGIN ====================
function handleLogin() {
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPassword").value;

  if (email && pass) {
    alert("Login successful! Proceeding to payment...");
    const loginModal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
    loginModal.hide();
  } else {
    alert("Please enter valid credentials!");
  }
}
// ==================== PAYMENT PROCESS ====================
document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const method = document.querySelector("input[name='payment']:checked").value;

  alert("Payment successful using " + method + "!\nThank you for your purchase 🎉");

  // Close modal after payment
  const paymentModal = bootstrap.Modal.getInstance(document.getElementById("paymentModal"));
  paymentModal.hide();

  // Clear cart after payment
  cart = [];
  updateCartUI();
});

// Modify login to go to payment
function handleLogin() {
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPassword").value;

  if (email && pass) {
    alert("Login successful! Proceeding to payment...");
    const loginModal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
    loginModal.hide();

    // Open Payment Modal
    const paymentModal = new bootstrap.Modal(document.getElementById("paymentModal"));
    paymentModal.show();
  } else {
    alert("Please enter valid credentials!");
  }
}

// ==================== INITIAL LOAD ====================
renderProducts("all");

// ==================== CHECKOUT ====================
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty! Please add items first.");
    return;
  }

  // Close the cart offcanvas
  const cartOffcanvas = bootstrap.Offcanvas.getInstance(document.getElementById("cartOffcanvas"));
  cartOffcanvas.hide();

  // Open login modal first
  const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
  loginModal.show();
}

// ==================== LOGIN HANDLER ====================
function handleLogin() {
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPassword").value;

  if (email && pass) {
    alert("Login successful! Proceeding to payment...");
    const loginModal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
    loginModal.hide();

    // Open Payment Modal
    const paymentModal = new bootstrap.Modal(document.getElementById("paymentModal"));
    paymentModal.show();
  } else {
    alert("Please enter valid credentials!");
  }
}
