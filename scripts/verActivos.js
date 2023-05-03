//TABLA
async function verActivo() {
  const res = await fetch("http://localhost:8080/activos", {
    method: "GET",
    mode: "cors",
    order: "DESC",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (products) {
      let placeholder = document.querySelector("#tablaActivos");

      let out = "";

      for (let product of products) {
        out += `
              <tr">
                <td><img src="${product.photo}"></td>
                <td> ${product.nombre}</td>
                <td>${product.descripcion}</td>
                <td>${product.idActivo}</td>
                <td>${product.codeUbicacion}</td>
                <td>Proveguard + ${product.ubicacion} + Piso ${product.piso} </td>
                <td>${product.estado}</td>
                <td><a id="editarActivo" href="editarActivos.html?${product._id}"> Editar Activo</a></td>
              </tr>
           `;
      }
      placeholder.innerHTML = out;
    });
  //editar Activo
}

verActivo();
