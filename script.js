let cartCount = 0;
const cartCounter = document.getElementById("cart-count");
const addButtons = document.querySelectorAll(".add-cart");

// Add to cart animation
addButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    cartCount++;
    cartCounter.textContent = cartCount;

    // Button animation
    btn.innerText = "Added!";
    btn.style.background = "#28a745";
    setTimeout(() => {
      btn.innerText = "Add to Cart";
      btn.style.background = "#0a5745";
    }, 1000);
  });
});
