//-------------FUNCIÓN: REGISTRO CLIENTES-------------
function enviarInfo() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = parseInt( document.getElementById("edad").value);
    let usuario = document.getElementById("usuario").value;
    let dni = document.getElementById("dni").value;
    let password = document.getElementById("password").value;
    
    fetch("/clientes", {
      method: "POST",
      headers: {
        "Content-Type": "application/Json",
      },
      body: JSON.stringify({ nombre, apellido, usuario, edad, dni, password}),
    })
      .then((res) => res.json())
      .then(function (datos) {
        if (datos.err === false) {
          feedback(datos.contenido.mensaje);
        } else {
          feedback(datos.contenido.mensaje);
        }
      });
  }
//-----------------------------------------------------

//-------------FUNCIÓN: MODIFICAR CLIENTES-------------
function modificarInfo() {
    let nombre = document.getElementById("nombreModificar").value;
    let apellido = document.getElementById("apellidoModificar").value;
    let edad = parseInt( document.getElementById("edadModificar").value);
    let usuario = document.getElementById("usuarioModificar").value;
    let password = document.getElementById("passwordModificar").value;
    fetch("/clientes", {
      method: "PUT",
      headers: {
        "Content-Type": "application/Json",
      },
      body: JSON.stringify({ nombre, apellido, usuario, edad, password}),
    })
      .then((res) => res.json())
      .then(function (datos) {
        if (datos.err === false) {
            feedbackModificar(datos.contenido.mensaje);
        } else {
            feedbackModificar(datos.contenido.mensaje);
        }
      });
  }
//-----------------------------------------------------

//---------FEEDBACK REGISTRAR Y MODIFICAR CLIENTES---------
function feedback(string) {
    document.getElementById("feedbackRegistro").innerHTML = string;
  }
function feedbackModificar(string) {
    document.getElementById("feedbackModificar").innerHTML = string;
  }
//-----------------------------------------------------