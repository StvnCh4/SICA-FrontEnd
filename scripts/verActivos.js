//TABLA
async function verActivo() {
  const res = await fetch("http://localhost:3000/activos", {
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
                <td>${product.unidad}</td>
                <td>${product.codeUbicacion}</td>
                <td>${product.estado}</td>
                <td><a class="editarActivo" href="editarActivos.html?${product._id}"><i class="fa-solid fa-pen-to-square"></i> Editar activo</a></td>
              </tr>
           `;
      }
      placeholder.innerHTML = out;
    });
  //editar Activo
}

verActivo();
