$(function(){
    $('#validacao').click(function(){
      var certo = 0;

      //Número Da Sala
        var reg1 = new RegExp("^[0-9]");
        var nrSala = $('#nrSala').val();
        if (!reg1.test(nrSala)) {
          $('#lblNrSala').html('Número Da Sala <strong class="text-danger">campo invalido</strong>')
          certo = 1;
        } else {
          $('#lblNrSala').html('Número Da Sala <strong class="text-success">campo valido</strong>')
        }

      //CODIGO DE USUARIO
          var cdUsuario = $('#cdUsuario').val();
          if (!reg1.test(cdUsuario)) {
            $('#lblCdUsuario').html('Codigo Do Usuario <strong class="text-danger">campo invalido</strong>')
            certo = 1;
          } else {
            $('#lblCdUsuario').html('Codigo Do Usuario <strong class="text-success">campo valido</strong>')
          }

  //CAPACIDADE
  var capacidade = $('#capacidade').val();
  if (capacidade <= 0 || capacidade > 10) {
    $('#lblcapacidade').html('Capacidade <strong class="text-danger">campo invalido</strong>')
    certo = 1;
  } else {
    $('#lblcapacidade').html('Capacidade <strong class="text-success">campo valido</strong>')
  }
  //retorno

      if (certo == 0) {
        $('#envio').prop('disabled', false);
      }else {
        return console.log(1);
      }




    });
});
