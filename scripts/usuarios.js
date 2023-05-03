// documend is ready
$(document).ready(function () {

  const tableUsers = document.getElementById("table-users");
  const tbody = document.getElementById("userList");
  const loading = `<div id="loading">loading...</div>`;


  let connected = sessionStorage.getItem('connected');
console.log("It is connected : ", connected);


let name = sessionStorage.getItem('name');
console.log("The name is : ", name);

let role = sessionStorage.getItem('role');
console.log("the user role is : ", role);




  
  async function getUsers() {
  
    try {    
      console.log("Llamando usuarios....");
      // add loading message while fetching data
      tbody.innerHTML = loading;
  
      const res = await fetch("http://localhost:3000/users/");
      console.log(res);
  
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await res.json();
      console.log(data);
  
      // populate table tbody with data from api and remove loading message
      tbody.innerHTML = "";
      data.forEach((user) => {
        const row = tbody.insertRow(-1);
        row.innerHTML = `
        <td>${user.cedula}</td>
        <td>${user.nombre}</td>
        <td>${user.primerApellido} ${user.segundoApellido}</td>
        <td>${user.correo}</td>
        <td>${user.telefono}</td>
        <td>${user.fechaNacimiento}</td>
        <td>${user.unidad}</td>
        <td>${user.role}</td>
        <td>${user.status}</td>
        <td>
          <a href="./editarUsuarios.html?id=${user._id}" class="btn btn-primary">Editar</a>
        </td>
        `;
      });
  
      console.log("Usuarios cargados");
  
    } catch (error) {
      console.log(error);
      // remove loading message and show error message
      // tbody.innerHTML = `<tr><td colspan="10">Error: ${error.message}</td></tr>`;
    }
  }
  
  getUsers();

  
  // edit user
  async function editUser(id) {
    console.log("Editando usuario");
  
    try {
      const res = await fetch(`http://localhost:3000/users/${id}`);
      const data = await res.json();
      //console.log(data);
  
  
      // roles array to populate select 1 is admin, 2 is user
      const roles = [1, 2];
      const status = ["Activo", "Inactivo"];
  
    
      // create a swal modal to edit user
      const { value: formValues } = await Swal.fire({
        title: "Editar usuario",
        html:
          `<form id="form-edit-user">
          <input id="cedula" class="swal2-input" value="${data.cedula}" disabled placeholder="Cédula">
          <input id="nombre" class="swal2-input" value="${data.nombre}" disabled placeholder="Nombre">
          <input id="primerApellido" class="swal2-input" value="${data.primerApellido}" disabled placeholder="Primer apellido">
          <input id="segundoApellido" class="swal2-input" value="${data.segundoApellido}" disabled placeholder="Segundo apellido">
          <input id="telefono" class="swal2-input" value="${data.telefono}" disabled placeholder="Teléfono">
          <input id="correo" class="swal2-input" value="${data.correo}" disabled placeholder="Correo electrónico">
          <input id="fechaNacimiento" class="swal2-input" value="${data.fechaNacimiento}" disabled placeholder="Fecha de nacimiento">
          <input id="unidad" class="swal2-input" value="${data.unidad}" required placeholder="Unidad">
          <select id="role" class="swal2-input" required>
            <option value="" disabled selected>Seleccione un rol</option>
            ${roles.map((role) => {
              if (role === data.role) {
                return `<option value="${role}" selected>${role}</option><option value="${role}">${role}</option>`;
              } else {
                return `<option value="${role}">${role}</option>`;
              }
            })}
          </select>
          <select id="status" class="swal2-input" required>
            <option value="" disabled selected>Seleccione un estado</option>
            ${status.map((status) => {
              if (status === data.status) {
                return `<option value="${status}" selected>${status}</option>`;
              } else {
                return `<option value="${status}">${status}</option>`;
              }
            })}
          </select>
        </form>`,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("cedula").value,
            document.getElementById("nombre").value,
            document.getElementById("primerApellido").value,
            document.getElementById("segundoApellido").value,
            document.getElementById("telefono").value,
            document.getElementById("correo").value,
            document.getElementById("fechaNacimiento").value,
            document.getElementById("unidad").value,
            document.getElementById("role").value,
            document.getElementById("status").value,
          ];
        }
      });
  
      if (formValues) {
        // show loading message while updating user
        tbody.innerHTML = loading;
  
        const res = await fetch(`http://localhost:3000/users/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cedula: formValues[0],
            nombre: formValues[1],
            primerApellido: formValues[2],
            segundoApellido: formValues[3],
            telefono: formValues[4],
            correo: formValues[5],
            fechaNacimiento: formValues[6],
            unidad: formValues[7],
            role: formValues[8],
            status: formValues[9],
          }),
        });
  
        const data = await res.json();
        console.log(data);
  
        // get updated users
        getUsers();
  
        // show success message
        Swal.fire({
          icon: "success",
          title: "Usuario actualizado",
          showConfirmButton: false,
          timer: 1500,
        });
      }
  
  
    } catch (error) {
      console.log(error);
    }
  
  }
  
  // add event listener to table when click on edit button use data-id attribute to get id
  tableUsers.addEventListener("click", (e) => {
    if (e.target.id === "editar") {
      const id = e.target.getAttribute("data-id");
      editUser(id);
    }
  });
  
  });
