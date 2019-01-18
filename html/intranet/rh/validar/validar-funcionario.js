$(function(){
  $('#validacao').click(function(){
    var certo = 0;
//NOME
    var reg1 = new RegExp("^[a-zA-Z ]+$");
    var nome = $('#nome').val();

    if (!reg1.test(nome)) {
      $('#lblNome').html('Nome <strong class="text-danger">campo invalido</strong>')
      certo = 1;
    } else {
      $('#lblNome').html('Nome <strong class="text-success">campo valido</strong>')
    }
//EMAIL
    var reg2 = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    var email = $('#email').val();

    if (!reg2.test(email)) {
      $('#lblEmail').html('Email <strong class="text-danger">campo invalido</strong>')
      certo = 1;
    } else {
      $('#lblEmail').html('Email <strong class="text-success">campo valido</strong>')
    }
//celular
var reg6 = new RegExp("^[0-9]");
  var celular = $('#celular').val();
  if (celular.length < 8 || !reg6.test(celular) ) {
    $('#lblCelular').html('Celular <strong class="text-danger">campo invalido</strong>')
    certo = 1;
  } else {
    $('#lblCelular').html('Celular <strong class="text-success">campo valido</strong>')
  }
//cpf
    var cpf = $('#cpf').val();
    if (!reg6.test(cpf) || cpf.length != 11) {
      $("#lblCpf").html('CPF <strong class="text-danger">campo invalido</strong>')
      certo = 1;
    } else {
      $("#lblCpf").html('CPF <strong class="text-success">campo valido</strong>')
    }

  //Salario
        var salario = $('#salario').val();
        if (!reg6.test(salario) || salario < 937) {
          $("#lblSalario").html('Salario <strong class="text-danger">campo invalido</strong>')
          certo = 1;
        } else {
          $("#lblSalario").html('Salario <strong class="text-success">campo valido</strong>')
        }


//Tipo de Usuario
    var usuario = $('#tipoUsuario').val();
    if (usuario == 0) {
      $('#lblTipoUsuario').html('Tipo de Usuário <strong class="text-danger">campo invalido</strong>')
      certo = 1;
    } else {
      $('#lblTipoUsuario').html('Tipo de Usuário <strong class="text-success">campo valido</strong>')
    }

//login
    var reg3 = new RegExp(/^[A-Za-z0-9]+$/);
    var login = $('#log').val();

    if (login.length < 5 || !reg3.test(login)) {
      $('#lblLog').html('Login <strong class="text-danger">campo invalido</strong>')
      certo = 1;
    } else {
      $('#lblLog').html('Login <strong class="text-success">campo valido</strong>')
    }

//senha
    var reg5 = new RegExp(/^[A-Za-z0-9]+$/);

  var senha = $('#senha').val();
  if (!reg5.test(senha) || senha.length == 0) {
    $('#lblSenha').html('Senha <strong class="text-danger">campo invalido</strong>')
    certo = 1;
  }else {
    $('#lblSenha').html('Senha <strong class="text-success">campo valido</strong>');
  }

//senhaValidacao
  var senhaValidacao = $('#senhaValidacao').val();

  if (senha != senhaValidacao || senha.length == 0) {
    $('#lblSenhaValidacao').html('Repetir Senha <strong class="text-danger">campo invalido</strong>')
    certo = 1;
  } else {
    $('#lblSenhaValidacao').html('Repetir Senha <strong class="text-success">campo valido</strong>')
  }

//retorno

    if (certo == 0) {
      $('#envio').prop('disabled', false);
    }else {
      return console.log(1);
    }



  });
});
