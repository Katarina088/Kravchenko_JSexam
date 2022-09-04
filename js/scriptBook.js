//всплывающее окно при добавлении товара в коризну из Книгарни или из индивидуальной страницы книги jquery.ui
$( function() {
  $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
          effect: "blind",
          duration: 500
      },
      hide: {
          effect: "clip",
          duration: 500
      }
  });

  $( ".toBasket" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
  });
} );

//фильтр для книг в Книгарне
let list = document.querySelector('.typeBook');
let itemsBook = document.querySelectorAll('.product');
let listItems = document.querySelectorAll('.listItem');
function filter () {
  list.addEventListener('click', 
  function(event) {
    let targetId = event.target.dataset.id;
    let target = event.target;
    console.log(targetId);

    //делаем активным пункт списка, по фильтру которого выводим книги
    if (target.classList.contains('listItem')) {
      listItems.forEach(listItem => listItem.classList.remove('active'));
      target.classList.add('active');
    }    

    //вывод необходимых книг по фильтру
    switch(targetId) {
      case 'all':
        getItems('product');
        break;
      case 'paper':
        getItems(targetId);
        break;  
      case 'electro': 
        getItems(targetId);
        break;
      case 'roman':
        getItems(targetId);
        break;
      case 'poetry':
        getItems(targetId);
        break;
      case 'child':
        getItems(targetId);
        break;            
    }
  })
}
filter ();
//функция для вывода книг по фильтру
function getItems(className) {
  itemsBook.forEach(product => {
    if (product.classList.contains(className)) {
      product.style.display = 'block';            
    } else {
      product.style.display = 'none';
    }
  })
}

  