

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".product-card");
const message = document.getElementById("message");

let favorites = localStorage.getItem("favorites") || 0;
let cart = localStorage.getItem("cart") || 0;

document.getElementById("favCount").textContent = favorites;
document.getElementById("cartCount").textContent = cart;

// SEARCH
searchInput.addEventListener("keyup", () => {
  let value = searchInput.value.toLowerCase();
  let found = 0;

  cards.forEach(card => {
    if (card.innerText.toLowerCase().includes(value)) {
      card.classList.remove("hidden");
      found++;
    } else {
      card.classList.add("hidden");
    }
  });

  message.textContent = found === 0 ? "No product found 😢" : "";
});

// FAVORITES
document.querySelectorAll(".favorite").forEach(icon => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("active");

    if (icon.classList.contains("active")) {
      favorites++;
    } else {
      favorites--;
    }

    localStorage.setItem("favorites", favorites);
    document.getElementById("favCount").textContent = favorites;
  });
});

// CART
document.querySelectorAll(".cart-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    cart++;
    localStorage.setItem("cart", cart);

    document.getElementById("cartCount").textContent = cart;
    btn.textContent = "Added ✓";

    setTimeout(() => {
      btn.textContent = "Add to Cart";
    }, 1200);
  });
});
