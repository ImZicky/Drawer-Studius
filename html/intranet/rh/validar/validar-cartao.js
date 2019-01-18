$(function(){
    $('#validacao').click(function(){
      var certo = 0;
  //NOME
      var reg1 = new RegExp("^[a-zA-Z ]+$");
      var nome = $('#nome').val();

      if (!reg1.test(nome)) {
        $('#lblNome').html('Nome Do Usuário <strong class="text-danger">campo invalido</strong>')
        certo = 1;
      } else {
        $('#lblNome').html('Nome Do Usuário <strong class="text-success">campo valido</strong>')
      }

  //Tipo de Cartao
      var cartao = $('#tipoCartao').val();
      if (cartao == 0) {
        $('#lblTipoCartao').html('Tipo De Cartão <strong class="text-danger">campo invalido</strong>')
        certo = 1;
      } else {
        $('#lblTipoCartao').html('Tipo De Cartão <strong class="text-success">campo valido</strong>')
      }

  //Codigo De Instituição
  var cdInstituicao = $('#CdInstituicao').val();
  if (cdInstituicao <= 0 || cdInstituicao > 10 ) {
    $('#lblCdInstituicao').html('Codigo De Instituição <strong class="text-danger">campo invalido</strong>')
    certo = 1;
  } else {
    $('#lblCdInstituicao').html('Codigo De Instituição <strong class="text-success">campo valido</strong>')
  }

//CODIGO DE USUARIO
  var reg2 = new RegExp("^[0-9]");
  var cdUsuario = $('#cdUsuario').val();
  if (!reg2.test(cdUsuario)) {
    $('#lblCdUsuario').html('Codigo De Usuario <strong class="text-danger">campo invalido</strong>')
    certo = 1;
  } else {
    $('#lblCdUsuario').html('Codigo De Usuario <strong class="text-success">campo valido</strong>')
  }

  //NUMERO DE CARTAO
    var nrCartao = $('#nrCartao').val();
    if (!reg2.test(nrCartao)) {
      $('#lblNrCartao').html('Número De Cartão <strong class="text-danger">campo invalido</strong>')
      certo = 1;
    } else {
      $('#lblNrCartao').html('Número De Cartão <strong class="text-success">campo valido</strong>')
    }


  //retorno

      if (certo == 0) {
        $('#envio').prop('disabled', false);
      }else {
        return console.log(1);
      }




    });
});
