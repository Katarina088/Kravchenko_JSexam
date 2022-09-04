//добавление товара из Книгарни в Корзину

//блок каждого товара
var itemBox = document.querySelectorAll('.product');
//блок вывода данных корзины
var cartCont = document.getElementById('allBook');
// Функция кроссбраузерной установка обработчика событий
function addEvent(elem, type, handler){
  if(elem.addEventListener){
    elem.addEventListener(type, handler, false);
  } else {
    elem.attachEvent('on'+type, function(){ handler.call( elem ); });
  }
  return false;
}
//записываем данные в Local Storage
function setCartData(o){
  localStorage.setItem('cart', JSON.stringify(o));
  return false;
}
// Получаем данные из LocalStorage
function getCartData(){
  return JSON.parse(localStorage.getItem('cart'));
}
// Добавляем товар в корзину
function addToCart(event){
  this.disabled = true; // блокируем кнопку на время операции с корзиной
  var cartData = getCartData() || {}; // получаем данные корзины или создаём новый объект, если данных еще нет
  var parentBox = this.parentNode; // родительский элемент кнопки "Добавить в корзину"
  var itemId = this.getAttribute('data-id'); // ID товара
  var itemTitle = parentBox.querySelector('.titlePr').innerHTML; // название книги
  var itemAuthor = parentBox.querySelector('.authorPr').innerHTML; // автор книги
  var itemPrice = parentBox.querySelector('.pricePr').innerHTML; // стоимость книги
  if(cartData.hasOwnProperty(itemId)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
    cartData[itemId][3] += 1;
  } else { // если товара в корзине еще нет, то добавляем в объект
    cartData[itemId] = [itemTitle, itemAuthor, itemPrice, 1];       
  }
  if(!setCartData(cartData)){ // Обновляем данные в LocalStorage
    this.disabled = false; // разблокируем кнопку после обновления LocalStorage
  }
 return false;
}
// Устанавливаем обработчик событий на каждую кнопку "Додати до кошика"
for(var i = 0; i < itemBox.length; i++){
  addEvent(itemBox[i].querySelector('.toBasket'), 'click', addToCart);   
}
// Открываем корзину со списком добавленных товаров
function openCart(event){
  var cartData = getCartData(); // вытаскиваем все данные корзины
  var totalItems = '';  
  var totalCount = 0;
  var totalSum = 0;  
  // если что-то в корзине уже есть, начинаем формировать данные для вывода
  if(cartData !== null){
    totalItems = '<table class="shopping_list"><tr><th>Назва</th><th>Автор</th><th>Ціна</th><th>К-ть</th></tr>';
    for(var items in cartData){
      totalItems += '<tr>';
      for(var i = 0; i < cartData[items].length; i++){
        totalItems += '<td>' + cartData[items][i] + '</td>';
      }
      totalSum += cartData[items][2] * cartData[items][3];
			totalCount += cartData[items][3];			
      totalItems += '</tr>';
    }
    totalItems += '<tr><td><strong>Всього:</strong></td><td></td><td><span id="total_sum">'+ totalSum +'</span><strong> грн.</strong></td><td><span id="total_count">'+ totalCount +'</span><strong> шт.</strong></td></tr>';
    totalItems += '</table>';
    cartCont.innerHTML = totalItems;
    titleBasket.style.display = 'block';
    totalPrice.style.display = 'block';       
  } 
  return false;
}




  






