window.onload = async function mostrarTraslados(){
    var queryURL = "http://localhost:3000/traslados";

    try {
        const res = await fetch(queryURL, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await res.json();
        console.log(data);
        displayTrasladosAsATable(data)
    } catch (error) {
        console.error(error);
    }

}

async function mostrarRegistros(){
  var queryURL = "http://localhost:3000/activos";

  
  try {
      const res = await fetch(queryURL, {
          method: "GET",
          mode: "cors",
          headers: {
              "Content-Type": "application/json",
          }
      });
      const data = await res.json();
      console.log(data);
      displayTrasladosAsATable(data)
  } catch (error) {
      console.error(error);
  }

}

function displayTrasladosAsATable(traslados) { //el parametro que va dentro de la funcion es el response es decir el array de objetos de la DB
   
  var espacioTraslados = document.querySelector("#traslados");
  espacioTraslados.innerHTML = "";

  var tbody = `
    <thead>
        <tr>
            <th>ID solicitud</th>
            <th>Nombre Activo</th>
            <th>ID Activo</th>
            <th>Motivo</th>
            <th>Origen</th>
            <th>Destino</th>
        </tr>
    </thead>
    <tbody>
      ${traslados.map(traslado => `
        <tr>
          <td>${traslado.idSolicitud}</td>
          <td>${traslado.nombreActivo}</td>
          <td>${traslado.idActivo}</td>
          <td>${traslado.motivo}</td>
          <td>${traslado.origen}</td>
          <td>${traslado.destino}</td>
        </tr>
      `).join('')}
    </tbody>
  `;

  espacioTraslados.innerHTML = tbody;
}

function displayRegistrosAsATable(registros) { //el parametro que va dentro de la funcion es el response es decir el array de objetos de la DB
   
  var espacioRegistros = document.querySelector("#registros");
  espacioRegistros.innerHTML = "";

  var tbody = `
    <thead>
        <tr>
            <th>ID solicitud</th>
            <th>Nombre Activo</th>
            <th>ID Activo</th>
            <th>Motivo</th>
            <th>Origen</th>
            <th>Destino</th>
        </tr>
    </thead>
    <tbody>
      ${registros.map(registro => `
        <tr>
          <td>${registro.idSolicitud}</td>
          <td>${registro.nombreActivo}</td>
          <td>${registro.idActivo}</td>
          <td>${registro.motivo}</td>
          <td>${registro.origen}</td>
          <td>${registro.destino}</td>
        </tr>
      `).join('')}
    </tbody>
  `;

  espacioTraslados.innerHTML = tbody;
}

document.querySelector('#btnTraslados').addEventListener('click', mostrarTraslados);
document.querySelector('#btnRegistros').addEventListener('click', mostrarRegistros);