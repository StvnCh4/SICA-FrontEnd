const registerUser = async (
  pSignupName,
  pSignupId,
  pSignupFirstName,
  pSignupEmail,
  pSignupSecondName,
  pSignupPhone,
  pSignupBirth,
  pSignupPhoto
) => {
  const user = {
    cedula: pSignupId,
    nombre: pSignupName,
    primerApellido: pSignupFirstName,
    segundoApellido: pSignupSecondName,
    correo: pSignupEmail,
    telefono: pSignupPhone,
    fechaNacimiento: pSignupBirth,
    foto: pSignupPhoto,
  };

  try {
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

const validatioDB = async (pEmail, pIdentification) => {
  try {
    let validation = true;
    const response = await fetch("http://localhost:3000/login");
    const user = await response.json();

    const checkEmailDB = user.find(
      (checkEmailDB) => checkEmailDB.correo === pEmail
    ); // funcion de comparacion
    const checkIdentificationDB = user.find(
      (checkIdentificationDB) =>
        checkIdentificationDB.cedula === pIdentification
    );

    if (checkEmailDB) {
      Swal.fire({
        icon: "warning",
        title: " El correo  ya existe",
        confirmButtonColor: "#a44200",
      });
      validation = false;
    } else if (checkIdentificationDB) {
      Swal.fire({
        icon: "warning",
        title: " La identificacion ya existe",
        confirmButtonColor: "#a44200",
      });
      validation = false;
    }

    return validation;
  } catch (error) {
    console.error(error);
    return false;
  }
};
const InternalValidationDB = async (pEmail, pIdentification) => {
  try {
    let validation = true;
    const response = await fetch("http://localhost:3000/users/");
    const user = await response.json();

    const checkEmailDB = user.find(
      (checkEmailDB) => checkEmailDB.correo === pEmail
    ); // funcion de comparacion
    const checkIdentificationDB = user.find(
      (checkIdentificationDB) =>
        checkIdentificationDB.cedula === pIdentification
    );

    if (checkEmailDB) {
      validation = false;
    } else if (checkIdentificationDB) {
      validation = false;
    }

    return validation;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const loginUser = async (pEmail, pPassword) => {
  const user = { correo: pEmail, password: pPassword };

  try {
    const response = await fetch("http://localhost:3000/loginUser", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();

    if (data.error === "User not found") {
      Swal.fire({
        icon: "warning",
        title: " El correo no existe, por favor registrarse!",
        confirmButtonColor: "#a44200",
      });
    } else if (data.status === "inactivo") {
      Swal.fire({
        icon: "warning",
        title: " Tu cuenta se encuentra inactiva",
        confirmButtonColor: "#a44200",
      });
    } else if (data.password === user.password) {
      console.log("data", data.name);
      window.location.href = "homepage.html";
      sessionStorage.setItem("connected", true);
      sessionStorage.setItem("aproved", data.status);
      sessionStorage.setItem("role", data.role);
      sessionStorage.setItem(
        "name",
        data.nombre + " " + data.primerApellido + " " + data.segundoApellido
      );
      sessionStorage.setItem("photo", data.foto);
      sessionStorage.setItem("unit", data.unidad);
    } else {
      Swal.fire({
        icon: "warning",
        title: " Contraseña incorrecta",
        confirmButtonColor: "#a44200",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const recoveryPassword = async (pEmail) => {
  const userUpdate = {
    correo: pEmail,
  };

  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userUpdate),
    });

    const data = await response.json();

    if (data.error === "User not found") {
      Swal.fire({
        icon: "warning",
        title: " El correo no está registrado",
        confirmButtonColor: "#a44200",
      });
    } else if (data.status === "inactivo") {
      Swal.fire({
        icon: "warning",
        title: " Tu cuenta se encuentra inactiva",
        confirmButtonColor: "#a44200",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

//test
