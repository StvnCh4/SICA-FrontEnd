//TABLA 
async function verActivo() {
    const res = await fetch('http://localhost:3000/activos', {
        method: "GET",
        mode: "cors",
        order:"DESC",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(function(res){
        return res.json();
    })
    .then(function(products){
        let placeholder = document.querySelector("#tablaActivos");
        
        let out = "";
        
        for(let product of products){
           out += `
              <tr>
                <td><img src="${product.photo}"></td>
                 <td> ${product.nombre}</td>
                 <td>${product.descripcion}</td>
                 <td>${product.idActivo}</td>
                 <td>${product.ubicacion}</td>
                 <td>${product.estado}</td>
              </tr>
           `;
        }
        placeholder.innerHTML = out;
    });
};


verActivo();

//Search
window.onload = function(){
    const nombre = document.getElementById("assetName");
    const idActivo = document.getElementById("assetID");
    const Estado = document.getElementById("assetStatus");
    const ubicacion = document.getElementById("unidadOrigen");
    const btn = document.getElementById("filterBtn");

    btn.addEventListener("click", async function buscarActivoFuct(e){
        e.preventDefault();
        const req = await fetch('http://localhost:3000/activos', {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(function(req){
            return req.json();
        })
        .then(function(activos){
            let table = document.querySelector("#tablaActivos");
            
            let search = "";
            for(let activo of activos){
               if (nombre == activo.nombre || idActivo == activo.idActivo || Estado == activo.estado || ubicacion == activo.ubicacion) {
                search += `
                <tr>
                  <td><img src="${activo.photo}"></td>
                   <td> ${activo.nombre}</td>
                   <td>${activo.descripcion}</td>
                   <td>${activo.idActivo}</td>
                   <td>${activo.ubicacion}</td>
                   <td>${activo.estado}</td>
                </tr>
             `;
             console.log("test");
               }
            }
            table.innerHTML = search;
        }); 
    });
}
