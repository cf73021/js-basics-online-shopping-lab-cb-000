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
    for (var i = 0; i < cart.length; i++) {
      var return_value = ""
      if ((i ===0) && (cart.length === 1)) {
        return_value += 'In your cart, you have ' + `${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
      else if ((i === 0) && (cart.length > 1)) {
        return_value += 'In your cart, you have ' + `${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at ${cart[1].itemPrice.}`
      }
    }
  }
  return return_value
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
