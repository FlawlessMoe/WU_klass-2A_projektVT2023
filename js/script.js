const addToCartButtons = document.querySelectorAll("button");

addToCartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const cartAmount = document.getElementById("cart-amount");
    const currentCount = Number(cartAmount.textContent);
    cartAmount.textContent = currentCount + 1;
  });
});

const images = document.querySelectorAll('img');

		images.forEach((img) => {
			img.addEventListener('mouseover', () => {
				img.style.opacity = '0.5';
			});

			img.addEventListener('mouseout', () => {
				img.style.opacity = '1';
			});
		});