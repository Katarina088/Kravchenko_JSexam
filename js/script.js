//прелоадер
$(function() {
  setTimeout(function() {
      $('body').addClass('loaded')
  }, 2500)
})

//выпадающее меню
$(function() {
  $("#additionalMenu").click(function() {
      $(".add").toggleClass("close");                                 
  })
})

