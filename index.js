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
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber){
    var cart = getCart();
    var len = cart.length;
    var total = 0;
    for (let i = cartLen-1; i >= 0; i--){
      total += cart[i].itemPrice;
      console.log(`Popping ${cart[i].itemName} (hopefully...)`);
      cart.pop();
    }
    return `Your total cost is \$${total}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
