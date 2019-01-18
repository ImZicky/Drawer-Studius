$('document').ready(function(){
  var janela = $(window).width();

  var cont = 1;

  if (janela< 992) {
    $('.quad4').css('display','none');

  }

setInterval(function(){
   if (cont < 0) {
     janela = $(window).width();
     if (janela < 992) {
       $('.quad4').css('display','none');
     }else {
         $('.quad').css({'background-color':'#1e0a33dd','transition-duration':'1000ms'});
       $('.quad4').css({'background-color':'#1e0a33dd','transition-duration':'1000ms'});

       $('.quad4').css('display','block');
     }
     cont = 1;
   }
   cont--;

 }, 10);

  $('.quad').css('top','0px');

  $('#prod').mouseenter(function(){
    $('.quad4').css('top','0px');
  });
  $('.quad4').mouseleave(function(){
    $(this).css('top','-1000px');
  });
  //
  $('.quad').css({'background-color':'#1e0a33dd','transition-duration':'1000ms'});
  $('.quad4').css({'background-color':'#1e0a33dd','transition-duration':'1000ms'});
  $('#navbarTogglerDemo03').css({'background-color':'#1e0a33dd','transition-duration':'1000ms'});
  $('.nav-link').css({'color':'#9d56e6', 'transition-duration':'1000ms'});
  $('a').css({'color':'#9d56e6', 'transition-duration':'1000ms'});
  $('h1.navbar-brand').css({'color':'#9d56e6', 'transition-duration':'1000ms'});

  var novoItem = $('#novoItembtn');
 var novoItemForm = $('#novoItemForm');
 var texto = $('input:text');

 // novoItem.show();

 $('#meuForm').on('click', function(){
   novoItemForm.show();
 });

var aumenta = 10;

 novoItemForm.on('submit', function(e){
   e.preventDefault();
   var novoTexto = texto.val();

   if (novoTexto.length >= 25) {
     $('li:last').after('<li>');
     for (var i = 0; i < novoTexto.length; i++) {
       cont++;
        $('li:last').append(novoTexto[i])
       if (cont>25 && novoTexto[i] == ' ') {
         $('li:last').append('<br>');
         cont = 0;
         aumenta += 5;
       }
     }
     $('li:last').addClass('usu-txt');
   } else {
     $('li:last').after('<li>'+novoTexto+'</li>');
     $('li:last').addClass('usu-txt');
   }
   texto.val('');

   //rolagem automatica
        setTimeout(function() {
            var alturaDiv = $('.corpo-chat').height();
            var auturaLista = $("ul.chat").height();
            var alturaFinal = auturaLista - alturaDiv;
            alturaFinal = (alturaFinal*-1)-aumenta;
            aumenta;
            $("ul.chat").css({"margin-top": +alturaFinal+"px", "transition-duration":"500ms"});
        });

  });


 $('.bot').click(function(){
     $('#conteudoChat').css({'bottom':'-15px','transition-duration':'500ms'});
     $('.bot').css({'right':'-100px','transition-duration':'500ms'});
 });

 $('#fecha-bot').click(function(){
     $('#conteudoChat').css({'bottom':'-1000px','transition-duration':'500ms'});
     $('.bot').css({'right':'20px','transition-duration':'500ms'});
 });


});
