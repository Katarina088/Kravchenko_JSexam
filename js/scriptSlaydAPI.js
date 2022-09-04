/*
//API var 1
letQuote.addEventListener("click", () => {   
    let button = document.getElementById("letQuote");
    let quote = document.getElementById("textQuote");
    let cite = document.getElementById("author");
  
    async function updateQuote() {
      // генерируем случайную цитату
      let response = await fetch("https://api.quotable.io/random?minLength=100&maxLength=250");
      let data = await response.json();
      if (response.ok) {        
        // вносим цитату в блок и прячем кнопку
        quotes.style.display = "block";
        letQuote.style.display = "none";
        quote.innerHTML = data.content;
        cite.innerHTML = "- " + data.author + " - ";        
        console.log(data);

      } else {
        quotes.style.display = "none";        
      }
    }
  
    // прикрепляем обработчик событий к кнопке
    button.addEventListener("click", updateQuote);
  
    // вызываем функцию
    updateQuote();
});
*/
//API var 2
letQuote.addEventListener("click", () => {  
  let requestQuote;
  //проверяем, поддерживает ли браузер XMLHttpRequest
  if(window.XMLHttpRequest){   
    requestQuote = new XMLHttpRequest();
  }
  else{   
    requestQuote = new ActiveXObject("Microsoft.XMLHTTP");
  }
  //инициализируем запрос
  requestQuote.open("GET", "https://favqs.com/api/qotd");
      requestQuote.onload = function() {
        if(requestQuote.status === 200) {
            quotes.style.display = "block";
            letQuote.style.display = "none";
            quoteToday = JSON.parse(requestQuote.response);            
            textQuote.innerHTML = quoteToday.quote.body;
            author.innerHTML = "- " + quoteToday.quote.author + "- ";

        } else if (requestQuote.status === 404) {
            quotes.style.display = "none";
        }
      }       
      requestQuote.send();
});

  //слайдер
  // Индекс слайда по умолчанию 
  var slideIndex = 1;
  showSlides(slideIndex);

  //Функция увеличивает индекс на 1, показывает следующй слайд
  function plusSlide() {
      showSlides(slideIndex += 1);
  }

  //Функция уменьшяет индекс на 1, показывает предыдущий слайд
  function minusSlide() {
    showSlides(slideIndex -= 1);  
  }

  // Устанавливает текущий слайд 
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  //Основная функция слайдера, к которой обращались выше 
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
