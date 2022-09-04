//добавление товара из local storage в Корзину
var cartCont = document.getElementById('allBook');//блок вывода данных корзины 

function stylesAll () {
  var cartData = getCartData();
  if (cartData !== null) {
    emptyBasket.style.display = "none";
    shoppingCart.style.display = "block";
  }
}
stylesAll ();

/* Открыть корзину */
addEvent(document.getElementById('checkout'), 'click', openCart);

/* Очистить корзину */
addEvent(document.getElementById('clear_cart'), 'click', function(event){
  localStorage.removeItem('cart');
  emptyBasket.style.display = "block";
  shoppingCart.style.display = "none";   
});



  




