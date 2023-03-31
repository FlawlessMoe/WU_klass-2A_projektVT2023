const addToCartButtons = document.querySelectorAll("button");

addToCartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const cartAmount = document.getElementById("cart-amount");
    const currentCount = Number(cartAmount.textContent);
    cartAmount.textContent = currentCount + 1;
  });
});