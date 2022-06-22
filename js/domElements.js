const domElements = (() => {
    const $table = document.getElementById("tableData");
    const $tBody = $table.children[1];

    
    const _createRow = (idUsuario, nombreUsuario, correo, contraseña) => {
        const $tr = document.createElement("tr");
        const $tdId = document.createElement("td");
        const $tdUser = document.createElement("td");
        const $tdEmail = document.createElement("td");
        const $tdPassword = document.createElement("td");
        const $tdAcciones=document.createElement("td");



        const $buttonDelete = _createButton();
        const $buttonEdit = _createButtonEdit();

        $tdId.innerText = idUsuario;
        $tdUser.innerText = nombreUsuario;
        $tdEmail.innerText = correo;
        $tdPassword.innerText = contraseña;
        
        $tdAcciones.appendChild($buttonDelete);


        $tr.appendChild($tdId);
        $tr.appendChild($tdUser);
        $tr.appendChild($tdEmail);
        $tr.appendChild($tdPassword);
        $tr.appendChild($tdAcciones);
        
        $tBody.appendChild($tr);

    };
    const _createButtonEdit = () => {
        const $buttonEdit = document.createElement("button");
        
       
        const $inputId = document.getElementById("id");
        const $inputUsuario = document.getElementById("usuario");
        const $inputCorreo = document.getElementById("correo");
        const $inputPassword = document.getElementById("password");
        $buttonEdit.innerText = "Editar";
        $buttonEdit.addEventListener("click", (event) => {
            const $tdParent = event.target.parentElement;
            const $trParent = $tdParent.parentElement;

            const $id = $trParent.children[0];
            const $usuario = $trParent.children[1];
            const $correo = $trParent.children[2];
            const $password = $trParent.children[3];
      
            $id.innerText = $inputId.value;
            $usuario.innerText = $inputUsuario.value;
            $correo.innerText = $inputCorreo.value;
            $password.innerText = $inputPassword.value;
        });
        
        return $buttonEdit;
    }

    const _createButton = () => {
        const $buttonDelete = document.createElement("button");
        $buttonDelete.innerText = "Eliminar";

        $buttonDelete.addEventListener("click", (event) => {
            const $tdParent = event.target.parentElement;
            const $trParent = $tdParent.parentElement;
            let elemento=$trParent.getElementsByTagName("td");
            let valor=elemento[0].innerHTML;
            if(window.confirm("¿Estas seguro de querer eliminarlo?")){
            clientHttp.delete("http://localhost:8080/api/v1/usuario/"+valor, domMain.Exito, domMain.Fallo)}else{
                return 0;
            }
            $tBody.removeChild($trParent);
        }
        );
        return $buttonDelete;
    };
    
    
    
    

    return {
        createRow: _createRow
    }
})();