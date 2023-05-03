$(document).ready( async function () {

  const url = window.location.search;

  console.log(url);
  const urlParams = new URLSearchParams(url);
  console.log(urlParams);

  const id = urlParams.get('id');
  console.log(id);

  getUser(id);

  const form = document.getElementById("register");
  const fileButtonAvatar = document.getElementById("fileButtonAvatar");
  const avatar = document.getElementById("avatar");
  const avatarImage = document.getElementById("avatar-image");
  const nombre = document.getElementById("nombre");
  const cedula = document.getElementById("cedula");
  const primerApellido = document.getElementById("primerApellido");
  const segundoApellido = document.getElementById("segundoApellido");
  const telefono = document.getElementById("telefono");
  const correo = document.getElementById("correo");
  const fechaNacimiento = document.getElementById("fechaNacimiento");
  const unidad = document.getElementById("unidad");
  const role = document.getElementById("role");
  const status = document.getElementById("status");
  const submit = document.getElementById("save");
  const avatarError = document.getElementById("avatar-error");
  const nameError = document.getElementById("name-error");
  const cedulaError = document.getElementById("cedula-error");
  const primerapellidosError = document.getElementById("primerapellidos-error");
  const segundoapellidosError = document.getElementById(
    "segundoapellidos-error"
  );
  const telefonoError = document.getElementById("telefono-error");
  const emailError = document.getElementById("email-error");
  const nacimientoError = document.getElementById("nacimiento-error");
  const unidadError = document.getElementById("unidad-error");

  window.onload = function () {// // cloudinary
    let cloudinaryWidget = cloudinary.createUploadWidget(
      {
        cloudName: "drf1snroe",
        uploadPreset: "sica_system",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          avatarImage.src = result.info.secure_url;
        }
      });
      
      fileButtonAvatar.addEventListener('click', () => {
        cloudinaryWidget.open()
      }, false)
      
      
      fileButtonAvatar.addEventListener("change", function(e){
        e.preventDefault
        avatarImage.src = URL.createObjectURL(e.target.files[0])
      })}

      var queryURLUnidades = "http://localhost:3000/unidades";

    try {
        const res = await fetch(queryURLUnidades, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const unidadesData = await res.json();
        console.log(unidadesData);
        displayUnidades_Dropdown(unidadesData)
    } catch (error) {
        console.error(error);
    }



  // evitar que nacimiento sea mayor a la fecha actual
  fechaNacimiento.max = new Date().toISOString().split("T")[0];

  // limpiar campos cuando se haga click en cancelar
  cancel.addEventListener("click", function (e) {
    e.preventDefault();
    nombre.value = "";
    cedula.value = "";
    primerapellidos.value = "";
    segundoapellidos.value = "";
    telefono.value = "";
    email.value = "";
    nacimiento.value = "";
    unidad.value = "";
  });

  // validar formulario de registro cuando se haga submit
  submit.addEventListener("click", function (e) {
    e.preventDefault();

    const errors = [];

    // revisar que avatar tenga un archivo
    if (avatar.value === "") {
      avatarError.style.display = "block";
    } else {
      avatarError.style.display = "none";
    }

    if (nombre.value === "" || nombre.value === null) {
      errors.push("El nombre es requerido. ");
    }

    if (cedula.value === "" || cedula.value === null) {
      errors.push("La cédula es requerida. ");
    }

    if (primerApellido.value === "" || primerApellido.value === null) {
      errors.push("El primer apellido es requerido. ");
    }

    if (segundoApellido.value === "" || segundoApellido.value === null) {
      errors.push("El segundo apellido es requerido. ");
    }

    if (telefono.value === "" || telefono.value === null) {
      errors.push("El teléfono es requerido. ");
    } else if (telefono.value.trim() !== "" && isNaN(telefono.value)) {
      errors.push("El teléfono debe ser un número. ");
    }

    // validar email con regex
    if (correo.value === "" || correo.value === null) {
      errors.push("El correo electrónico es requerido. ");
    } else if (
      correo.value.trim() !== "" &&
      !correo.value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      errors.push("El correo electrónico no es válido. ");
    }

    // validar nacimiento
    if (fechaNacimiento.value === "" || fechaNacimiento.value === null) {
      errors.push("La fecha de nacimiento es requerida. ");
    }

    // validar unidad select es distinto de 0
    if (unidad.value === "") {
      errors.push("La unidad es requerida. ");
    }

    if (errors.length > 0) {
      console.log(errors);
      swal("Hay errores en el formulario", errors.join(""), "error", {
        button: "OK",
      });
    } else {
      editUser(id);
    }

    // si no hay errores enviar a pagina usuarios
    if (
      nameError.style.display === "none" &&
      cedulaError.style.display === "none" &&
      primerapellidosError.style.display === "none" &&
      segundoapellidosError.style.display === "none" &&
      telefonoError.style.display === "none" &&
      emailError.style.display === "none" &&
      nacimientoError.style.display === "none" &&
      unidadError.style.display === "none"
    ) {
    //  window.location.href = "usuarios.html";
    }
  });

  async function getUser(id) {
    try {
      const api = `http://localhost:3000/users/${id}`;
      const response = await fetch(api);
      const data = await response.json();
      console.log(data);

      avatarImage.setAttribute("src", data.foto)


      for (let key in data) {
        if (document.getElementById(key)) {
          document.getElementById(key).value = data[key];
        }
      }

    } catch (error) {
      console.log("server: " + error);
    }
  }

  async function editUser(id) {
    console.log("Editando usuario");
    swal({
      title: 'Registrando usuario, por favor espere',
      timer: 1300,
      timerProgressBar: true,
    })

    try {
      const api = `http://localhost:3000/users/${id}`;
      const response = await fetch(api, {
        method: "PUT",
        mode: "cors",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          cedula: cedula.value,
          nombre: nombre.value,
          primerApellido: primerApellido.value,
          segundoApellido: segundoApellido.value,
          correo: correo.value,
          telefono: telefono.value,
          fechaNacimiento: fechaNacimiento.value,
          unidad: unidad.value,
          status: status.value,
          foto: avatarImage.src,
          role: role.value,
        }),
      });

      const data = await response.json();
      console.log(data);
      



      console.log("Usuario editado");

      swal({
        title: "Información actualizada",
        text: "El usuario se ha editado correctamente",
        icon: "success",
        button: "OK",
      })

    } catch (error) {
      console.log(error);

      // swal("Hay errores en el formulario", error, "error", {
      //   button: "OK",
      // });
    }
  }

});


const displayUnidades_Dropdown = (unidades) => {

  var espacioUnidades = document.querySelector("#unidad"); //ID del select 
  espacioUnidades.innerHTML = ""; //Aca vaciamos lo que esta DENTRO del select

  var dropdownOptions = `
    <option value="">Seleccione una unidad </option>
    ${unidades.map(unidad => `<option value="${unidad.name}">${unidad.name}</option>`).join('')}
    `;//Aqui llenamos el dropdown

    espacioUnidades.innerHTML = dropdownOptions;
}
