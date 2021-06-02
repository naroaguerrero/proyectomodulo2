function reservar() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let dni = document.getElementById("dniCheckIn").value;
  let fecha = document.getElementById("fechaCheckIn").value;
  let numero = parseInt(document.getElementById("numeroCheckIn").value);
  let matricula = document.getElementById("matricula").value;
  fetch("/gestion", {
    method: "POST",
    headers: {
      "Content-Type": "application/Json",
    },
    body: JSON.stringify({ nombre, apellido, dni, fecha, numero, matricula }),
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

function feedback(string) {
    document.getElementById("feedbackCheckIn").innerHTML = string;
  }