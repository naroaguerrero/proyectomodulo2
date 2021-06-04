function borrar() {
    let dni = document.getElementById("dni").value;
    let usuario = document.getElementById("usuario").value;
    fetch("/clientes", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/Json",
      },
      body: JSON.stringify({dni, usuario}),
    })
      .then((res) => res.json())
      .then(function (datos) {
        if (datos.err === false) {
          feedbackBorrar(datos.contenido.mensaje);
        } else {
          feedbackBorrar(datos.contenido.mensaje);
        }
      });
  }


  function feedbackBorrar(string) {
    document.getElementById("feedbackBorrar").innerHTML = string;
  }