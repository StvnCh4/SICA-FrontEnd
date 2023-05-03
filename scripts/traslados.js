//uso el fetch para traer la respuesta y que quede global para usarlo en las funciones

//funcion para traer la lista de traslados del backend y
// dejarlo como un objeto json para trabajar con el

//funcion para mostrar la tabla

function showTable(json) {
  //para traer tabla del html
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";
  //Se itera sobre el arreglo de traslados
  json.forEach((object) => {
    // Creo html para cada traslado (td)
    const tableInput = document.createElement("tr");
    tableInput.classList.add("table-traslado-item");

    // Crea un td con cada propiedad del objeto

    const transferId = document.createElement("td");
    transferId.innerText = `${object.transferId}`;

    // Crea un td con cada propiedad del objeto
    const assetName = document.createElement("td");
    assetName.innerText = `${object.assetName}`;

    const assetId = document.createElement("td");
    assetId.innerText = `${object.assetId}`;

    const transferReason = document.createElement("td");
    transferReason.innerText = `${object.transferReason}`;

    const currentUnit = document.createElement("td");
    currentUnit.innerText = `${object.currentUnit}`;

    const destinationUnit = document.createElement("td");
    destinationUnit.innerText = `${object.destinationUnit}`;

    // Agregar hijos al node tr

    tableInput.appendChild(transferId);
    tableInput.appendChild(assetName);
    tableInput.appendChild(assetId);
    tableInput.appendChild(transferReason);
    tableInput.appendChild(currentUnit);
    tableInput.appendChild(destinationUnit);

    // Agregar tr al node table
    tableBody.appendChild(tableInput);
  });
}

function selectRow() {
  const tableRows = document.querySelectorAll(".table-traslado-item");
  tableRows.forEach((tableRow) => {
    tableRow.addEventListener("click", () => {
      tableRows.forEach((tableRow) => {
        tableRow.classList.remove("selectedRow");
      });
      tableRow.classList.add("selectedRow");
    });
  });
}

//funcion para obtener el id del transfer seleccionado
function selectTransfer() {
  const selectedTranferRow = document.querySelector(".selectedRow");
  console.log("loggeo del id en selectTransfer", selectedTranferRow);

  if (selectedTranferRow === null || selectedTranferRow === undefined) {
    Swal.fire({
      title: "Importante!",
      text: "Por favor seleccione el traslado a revisar",
      icon: "warning",
      confirmButtonText: "Aceptar",
    });
  } else {
    const selectedTranferId = selectedTranferRow.children[0].innerText;
    console.log(selectedTranferId);
    localStorage.setItem("selectedTransferId", selectedTranferId);
    window.location.href = "editarTraslado.html";
  }
}

// seccion de paginacion

function generatePaginationLinks(currentPage, totalPages) {
  let links = "";

  for (let i = 1; i <= totalPages; i++) {
    if (i === currentPage) {
      links += `<a class="active">${i}</a>`;
    } else {
      links += `<a href="#" data-page="${i}">${i}</a>`;
    }
  }

  pagination.innerHTML = links;
}

const getPaginationData = async function (pageValue, unit) {
  try {
    const paginationData = await fetch(
      `http://localhost:3000/transfers/pagination?page=${pageValue}&unit=${unit}`
    );
    const transfers = paginationData.json();
    return transfers;
  } catch (error) {
    console.log(error);
  }
};

async function showPagination(unit) {
  const pagination = document.getElementById("pagination");
  let pageData = await getPaginationData(1, unit);
  showTable(pageData);

  console.log("mostrando la info de la paginacion", pageData);
  pagination.addEventListener("click", async function (event) {
    event.preventDefault();
    selectedAnchor.classNamex;

    if (event.target.tagName === "A") {
      page = event.target.getAttribute("data-page");

      console.log(page);
    }
    pageData = await getPaginationData(page, unit);
    console.log(pageData);
    showTable(pageData);
  });
}

//fin de seccion de paginacion

//seccion de login

//usando el window.onload que enseñó el profe

window.onload = async function () {
  //section to validate the role of the user

  let connected = sessionStorage.getItem("connected");
  console.log("It is connected : ", connected);

  let name = sessionStorage.getItem("name");
  console.log("The name is : ", name);

  let role = sessionStorage.getItem("role");
  console.log("the user role is : ", role);

  const unit = sessionStorage.getItem("unit");
  console.log("the user unit is : ", unit);

  // if (connected) {
  //   switch (role) {
  //     case "admin":
  //       break;
  //     case "adminProv":
  //       mainCardsLinks[5].classList.add("hide");
  //       // nav
  //       navlinks[1].classList.add("hide");
  //       navlinks[9].classList.add("hide");
  //       //Main
  //       mainCards[2].classList.add("hide");
  //       mainCardsLinks[3].classList.add("hide");
  //       //footer
  //       footerdivs[5].classList.add("hide");
  //       break;
  //     case "adminEnc":
  //       break;
  //   }
  // } else {
  //   window.location.href = "login.html";
  // }

  //section to retrieve units and set them in the drop downs
  var queryURLUnidades = "http://localhost:3000/unidades";

  try {
    const res = await fetch(queryURLUnidades, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    displayUnidades_Dropdown(data);
  } catch (error) {
    console.error(error);
  }

  //pagination test
  // Example usage:
  const currentPage = 1;
  const totalPages = 3;
  generatePaginationLinks(currentPage, totalPages);

  //retrieving the unit
  //para probar si traigo la paginacion
  await showPagination(unit);
  selectRow();
  //const editTransferBtn = document.getElementById("btnEdit");
  const testBtn = document.getElementById("btnEdit");

  //editTransferBtn.addEventListener("click", selectTransfer);
  testBtn.addEventListener("click", (e) => {
    e.preventDefault();
    selectTransfer();
  });
};

const displayUnidades_Dropdown = (unidades) => {
  const originDD = document.getElementById("unidadOrigen");
  const destinationDD = document.getElementById("unidadDestino");
  originDD.innerHTML = ""; //Aca vaciamos lo que esta DENTRO del select
  destinationDD.innerHTML = "";

  var dropdownOptions = `<option value="">Seleccione una unidad </option>
    ${unidades
      .map((unidad) => `<option value="${unidad.name}">${unidad.name}</option>`)
      .join("")}
    `; //Aqui llenamos el dropdown

  originDD.innerHTML = dropdownOptions;
  destinationDD.innerHTML = dropdownOptions;
};
