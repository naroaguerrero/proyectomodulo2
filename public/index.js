mostrar();

function mostrar() {
  fetch("/cars")
    .then((res) => res.json())
    .then(function (datos) {
      if (datos.error) {
        ("error");
      } else {
        imprimir(datos);
      }
    });
}

//-------------FUNCIÓN: CARD INDEX-------------
function imprimir(datos) {
  let parrafo = "";
  for (let i = 0; i < datos.contenido.length; i++) {
    parrafo += `<div class="card">
      <div class="card-image">
        <img src="${datos.contenido[i].img}" alt="">
      </div>
      <div class="card-text">
        <h2>${datos.contenido[i].marca} ${datos.contenido[i].modelo}</h2>
        <p>El número asociado a este coche para su posterior reserva es el: <strong>${datos.contenido[i].numero}</strong></p>
        <h3>${datos.contenido[i].precio}€/día</h3>
      </div>
      <div class="card-stats" style="background-color:${datos.contenido[i].estado === "Libre" ? "#20E85A" : "red"}">
        <div class="stat">
        ${datos.contenido[i].estado === "Libre" ? `<h3><strong><a id= "link" href="./alquilar.html">${datos.contenido[i].estado}</a></strong>` : `<h3><strong>${datos.contenido[i].estado}</strong></h3>`}
        </div>
      </div>
      </div>`;
  }
  document.getElementById("container").innerHTML = parrafo;
}
//--------------------------------------------