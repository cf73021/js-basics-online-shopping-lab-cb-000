var cart = [];

function addToCart(item) {
  var new_addition = {itemName: item, itemPrice: Math.floor(Math.random() * 10)}
  cart.push(new_addition)
  return `${item} has been added to your cart.`
  return cart
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  else {
    var i = 0
    for (i = 0, len = cart.length; i < len; i++) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`}
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
