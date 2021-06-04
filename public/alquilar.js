//-------------FUNCIÓN: CHECKIN COCHE-------------
function reservar() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let dni = document.getElementById("dniCheckIn").value;
  let fecha = document.getElementById("fechaCheckIn").value;
  let numero = parseInt(document.getElementById("numeroCheckIn").value);
  let usuario = document.getElementById("usuario").value;
  fetch("/gestion", {
    method: "POST",
    headers: {
      "Content-Type": "application/Json",
    },
    body: JSON.stringify({ nombre, apellido, dni, fecha, numero, usuario}),
  })
    .then((res) => res.json())
    .then(function (datos) {
      if (datos.err === false) {
        feedbackCheckIn(datos.contenido.mensaje);
      } else {
        feedbackCheckIn(datos.contenido.mensaje);
      }
    });
}
//--------------------------------------------------

//-------------FUNCIÓN: CHECKHOUT COCHE-------------
function CheckOut() {
  let fecha = document.getElementById("fechaCheckOut").value;
  let dni = document.getElementById("dniCheckOut").value;
  let numero = parseInt(document.getElementById("numeroCheckOut").value);
  let usuario = document.getElementById("usuarioCheckOut").value;
  let password = document.getElementById("passwordCheckOut").value;

  fetch("/gestion", {
    method: "PUT",
    headers: {
      "Content-Type": "application/Json",
    },
    body: JSON.stringify({dni, fecha, numero, usuario, password}),
  })
    .then((res) => res.json())
    .then(function (datos) {
      if (datos.err === false) {
        feedbackCheckOut(datos.contenido.mensaje);
      } else {
        feedbackCheckOut(datos.contenido.mensaje);
      }
    });
}
//-----------------------------------------------------

//-------------FUNCIÓN: CHECKIN Y CHECKOUT-------------
function feedbackCheckIn(string) {
    document.getElementById("feedbackCheckIn").innerHTML = string;
  }
function feedbackCheckOut(string) {
    document.getElementById("feedbackCheckOut").innerHTML = string;
  }
//-----------------------------------------------------