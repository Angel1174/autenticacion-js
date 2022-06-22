const domMain = (() => {

  const $button = document.getElementById("guardar");
  //const $buttonDelete = document.getElementById("eliminar");
  const $buttonUpdate = document.getElementById("editar");
  const $inputId = document.getElementById("id");
  const $inputUsuario = document.getElementById("usuario");
  const $inputEmail = document.getElementById("correo");
  const $inputPassword = document.getElementById("password");

  const fnCallbackClick = (target) => {
    const user = $inputUsuario.value;
    const email = $inputEmail.value;
    const password = $inputPassword.value;
    if (user.length == 0 || email.length == 0 || password.length == 0) {
      alert('Uno o más campos vacios');
    } else {
      clientHttp.post("http://localhost:8080/api/v1/usuario/", {
        nombreUsuario: user,
        correo: email,
        contraseña: password
      }, fnExito2, fnFallo);
    }

  };
  const fnUpdate = (target) => {
    const id=$inputId.value;
    const user = $inputUsuario.value;
    const email = $inputEmail.value;
    const password = $inputPassword.value;
    if (id.length==0||user.length == 0 || email.length == 0 || password.length == 0) {
      alert('Uno o más campos vacios');
    } else {
      clientHttp.put("http://localhost:8080/api/v1/usuario/"+id, {
        nombreUsuario: user,
        correo: email,
        contraseña: password
      }, fnExito2, fnFallo);
    }

  };
  /*
  const fnDelete = (target) => {
    const id=$inputId.value;
    if (id.length == 0) {
      alert('Ingrese el ID a eliminar');
    } else {
      clientHttp.delete(`http://localhost:8080/api/v1/usuario/${id}`,{
        
      }, fnExito2, fnFallo);
    }

  };*/
 
  $button.addEventListener("click", fnCallbackClick);
  //$buttonDelete.addEventListener("click",fnDelete);
  $buttonUpdate.addEventListener("click",fnUpdate)

  const fnExito = (responseService) => {
    let response = responseService.data;
    for (let i = 0; i < response.length; i++) {
      const idUsuario = response[i]['idUsuario'];
      const nombreUsuario = response[i]['nombreUsuario'];
      const correo = response[i]['correo'];
      const contraseña = response[i]['contraseña'];
      domElements.createRow(idUsuario, nombreUsuario, correo, contraseña);

    }
    console.log(response);
  };
  const fnExito2 = (response) => {
    const httpResponse = response.httpCode;
    if (httpResponse >= 200 && httpResponse <= 299) {
      const user = $inputUsuario.value;
      const email = $inputEmail.value;
      const password = $inputPassword.value;
      domElements.createRow(user, email, password);
    } else {
      alert(response);
    }
  };

  const fnFallo = (err) => {
    console.error(err);
  };

  clientHttp.get("http://localhost:8080/api/v1/usuario/", fnExito, fnFallo);

  return{
    Exito:fnExito,
    Fallo:fnFallo

  }
})();