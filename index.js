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
  var return_value = ""
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  else {
    for (var i = 0; i < cart.length; i++) {
      if ((i === 0) && (cart.length === 1)) {
        return_value = `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
        else if ((i === 0) && (cart.length > 1)) {
        return_value = `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}, `
      } else if (i < cart.length - 1) {
        return_value += `${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
      else if (i === cart.length - 1) {
        return_value += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
    }
  }
  return return_value
}

function total() {
  var cart = getCart()
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  return sum
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
}

function placeOrder(cardNumber) {
  // write your code here
}
