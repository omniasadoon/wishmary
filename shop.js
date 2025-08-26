
let cart = [];
let shipping = 0;
let discount = 0;

function addToCart(name, price) {
  cart.push({name, price: Number(price)});
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${item.name} - ${item.price} IQD 
      <button onclick="removeFromCart(${index})">❌delete</button>`;
    cartItems.appendChild(li);
    total += Number(item.price);
  });
  document.getElementById("total").textContent = total;
  document.getElementById("final-total").textContent = total + shipping - discount;
}

function applyPromo() {
  let promo = document.getElementById("promo").value;
  let msg = document.getElementById("promo-msg");
  if (promo === "WISH10") {
    discount = 1000;
    msg.textContent = "✔️ The code has been applied";
  } else {
    discount = 0;
    msg.textContent = "❌ Error";
  }
  renderCart();
}

function updateShipping() {
  const province = document.getElementById('province').value.toLowerCase();
  if (province === "baghdad") {
    shipping = 5000;
  } else if (province) {
    shipping = 6000;
  } else {
    shipping = 0;
  }
  document.getElementById('shipping').textContent = shipping;
  renderCart();
}

// حدث submit للفورم
document.getElementById("order-form").addEventListener("submit", function(e){
  e.preventDefault();

  let msgDiv = document.getElementById("success-msg");
  msgDiv.style.display = "block";

  setTimeout(() => {
    msgDiv.style.display = "none";
  }, 3000);

  cart = [];
  renderCart();
});

     