const url = window.location.href;
const id = url.substring(url.lastIndexOf("?") + 1);
console.log(id);
editarActivoFunc(id);
actualizarActivoFunc(id);

async function editarActivoFunc(id) {
  const queryURLActivo = `http://localhost:3000/activos/${id}`;
  const res = await fetch(queryURLActivo, {
    method: "get",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (products) {
      console.log(products);
      const activeLocation = document.getElementById("activoUbicacion");
      const activePiso = document.getElementById("activoPiso");
      const activeStatus = document.getElementById("activoEstado");
      for (let product of products) {
        document.getElementById("activoNombre").value = `${product.nombre}`;
        document.getElementById(
          "activoDescrip"
        ).value = `${product.descripcion}`;
        activePiso.options[activePiso.selectedIndex].text = `${product.piso}`;
        activeStatus.options[
          activeStatus.selectedIndex
        ].text = `${product.estado}`;
        activeLocation.options[
          activeLocation.selectedIndex
        ].text = `${product.ubicacion}`;
      }
    });
}

//ACTUALIZAR INFORMACIÓN DE ACTIVO
async function actualizarActivoFunc(id) {
  const actualizarActivo = document.getElementById("actualizarActivo");

  actualizarActivo.addEventListener(
    "click",
    async function actualizarActivoFuct(e) {
      e.preventDefault();

      const PUTActivo = `http://localhost:3000/activos/${id}`;
      const activeName = document.getElementById("activoNombre");
      const activeDescription = document.getElementById("activoDescrip");
      const activeLocation = document.getElementById("activoUbicacion");
      const activePiso = document.getElementById("activoPiso");
      const activeStatus = document.getElementById("activoEstado");
      const activoImages = document.getElementById("avatar-image");
      try {
        const resq = await fetch(PUTActivo, {
          method: "PUT",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: activeName.value,
            descripcion: activeDescription.value,
            ubicacion: activeLocation.value,
            piso: activePiso,
            estado: activeStatus.value,
            photo: activoImages.src,
          }),
        });
        const data = await resq.json();
        console.log(data);
        console.log("Activo editado");

        swal({
          title: "Información actualizada",
          text: "El Activo se ha editado correctamente",
          icon: "success",
          button: "OK",
        });
      } catch (error) {
        console.error(error);
      }

      const activoImagesBtn = document.getElementById("fileButtonAvatar");
      activoImagesBtn.addEventListener("change", function (e) {
        activoImages.src = URL.createObjectURL(e.target.files[0]);
      });

      // // cloudinary
      let cloudinaryWidget = cloudinary.createUploadWidget(
        {
          cloudName: "drf1snroe",
          uploadPreset: "sica_system",
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            activoImages.src = result.info.secure_url;
          }
        }
      );

      activoImagesBtn.addEventListener(
        "click",
        () => {
          cloudinaryWidget.open();
        },
        false
      );
      if (
        activeName.value.trim() === "" ||
        activeDescription.value.trim() === ""
      ) {
        Swal.fire({
          icon: "warning",
          title: " Falta información del activo",
          confirmButtonColor: "#a44200",
        });
        activeName.classList.add("invalid");
        activeDescription.classList.add("invalid");
      } else if (
        activoImages.src === "" ||
        activoImages.src.includes("assets/avatar-big.png")
      ) {
        Swal.fire({
          icon: "warning",
          title: " Falta imagen del activo",
          confirmButtonColor: "#a44200",
        });
      } else {
        swal({
          title: "Información actualizada",
          text: "El Activo se ha editado correctamente",
          icon: "success",
          button: "OK",
        });
      }
    }
  );
}
