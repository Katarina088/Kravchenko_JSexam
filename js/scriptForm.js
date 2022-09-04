//форма со страницы Контакты
function checkName(){ // проверка имени в форме
  var nameInput = document.getElementsByName('nameUser')[0];
  var n1 = document.getElementsByName('nameUser')[0].value;
  var templateName = /^[а-я]/i; // только буквы
  if(templateName.test(n1)) nameInput.style.border = "2px solid teal"; 
  if(!templateName.test(n1)) { // если не соответствует шаблону
    nameInput.style.border = "2px solid red"; 
    nameInput.value = "";
    nameInput.placeholder = "Введіть коректне ім'я"; 
    return false;
  }
  return true;
}

function checkTel(){ // проверка телефона
  var telInput = document.getElementsByName('phone')[0];
  var t1 = document.getElementsByName('phone')[0].value;
  var templateTel = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; // шаблон номера телефона
  if(templateTel.test(t1)) telInput.style.border = "2px solid teal"; 
  if(!templateTel.test(t1)) { // если не соответствует шаблону
    telInput.style.border = "2px solid red"; 
    telInput.value = "";
    telInput.placeholder = "Введіть коректний номер телефону"; 
    return false;
  }
  return true;
}

function checkMail(){ // проверка почты
  var mailInput = document.getElementsByName('email')[0];
  var m1 = document.getElementsByName('email')[0].value;
  var templateMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // шаблон имейла
  if(templateMail.test(m1)) mailInput.style.border = "2px solid teal"; 
  if(!templateMail.test(m1)) { // если не соответствует шаблону
    mailInput.style.border = "2px solid red"; 
    mailInput.value = "";
    mailInput.placeholder = "Введіть коректну ел.адресу"; 
    return false;
  }
  return true;
}

function checkForm() { // проверка сообщения
  var questionInput = document.getElementsByName('question')[0];
  var q1 = document.getElementsByName('question')[0].value;
  if(q1.length < 12) { // если короче 12ти символов
    questionInput.style.border = "2px solid red"; 
    questionInput.value = "";
    questionInput.placeholder = "Введіть коректне повідомлення"; 
    return false;
  }
  if(checkName()==false || checkTel()==false || checkMail()==false) return false; // проверка остальных функций
  else {    
    messageText.innerHTML = "Заявка прийнята в работу. Ваше повідомлення буде опрацьоване найближчим часом."; //всплывающее сообщение после отправки формы
    message.hidden = false;//показываем результирующее сообщение        
    return false;
  }  
}

//закрытие результирующего сообщения после отправки формы
function checkClose() {
  messageText.innerHTML = '';//чистим текст сообщения
  message.hidden = true;	//скрываем   
  bookForm.submit();
}

  









