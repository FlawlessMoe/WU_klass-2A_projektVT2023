const addToCartButtons = document.querySelectorAll("button");

addToCartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const cartAmount = document.getElementById("cart-amount");
    const currentCount = Number(cartAmount.textContent);
    cartAmount.textContent = currentCount + 1;
  });
});

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top
      }, 1000);
  }
});

// Add event listeners for quantity buttons
const quantityBtns = document.querySelectorAll('.quantity-btn');
quantityBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const input = btn.parentElement.querySelector('input[type="number"]');
    const currentValue = parseInt(input.value);
    const min = parseInt(input.getAttribute('min'));
    const max = parseInt(input.getAttribute('max'));
    let newValue;
    if (btn.classList.contains('plus')) {
      newValue = currentValue < max ? currentValue + 1 : currentValue;
    } else {
      newValue = currentValue > min ? currentValue - 1 : currentValue;
    }
    input.value = newValue.toString();
    updateSubtotal(input.parentElement.parentElement);
    updateTotal();
  });
});

// Add event listeners for remove buttons
const removeBtns = document.querySelectorAll('.remove-btn');
removeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const row = btn.parentElement.parentElement;
    row.parentNode.removeChild(row);
    updateTotal();
  });
});

// Update the subtotal for a given row
function updateSubtotal(row);

const price = parseFloat(row.querySelector('.price').textContent.slice(1));

// Calculate the new subtotal and update the subtotal cell
const subtotal = quantity * price;
row.querySelector('.subtotal').textContent = '$' + subtotal.toFixed(2);

// Update the cart total
updateTotal();

// Update the cart total
function updateTotal() {
const cartRows = document.querySelectorAll('.cart-row');
let total = 0;
cartRows.forEach(row => {
const subtotal = parseFloat(row.querySelector('.subtotal').textContent.slice(1));
total += subtotal;
});
document.querySelector('.cart-total').textContent = '$' + total.toFixed(2);
}

// Add event listener for checkout button
const checkoutBtn = document.querySelector('.checkout-btn');
checkoutBtn.addEventListener('click', () => {
alert('Checkout not implemented yet!');
});