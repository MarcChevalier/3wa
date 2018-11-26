var openCheckout = document.querySelector(".link-basket");
var myCheckout = document.querySelector(".chekout");
var close = document.querySelector('.close-checkout');

function showBasket('')
{
  event.preventDefault();
  myCheckout.classList.toggle(".checkout-is-showing");
}

openCheckout.addEventListener('click','showBasket' );
close.addEventListener('click','showBascket');

console.log('ckeckout-is-showing');
