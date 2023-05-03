// Buttons entries
const btnUsers = document.getElementById("btnUsers")
const btnUnits = document.getElementById("btnUnits")
const btnAssets = document.getElementById("btnAssets")
const btnLogBook = document.getElementById("btnLogbook")
const btnWareHouses = document.getElementById("btnWarehouses")
const btnDonations = document.getElementById("btnDonations")
const table = document.getElementById("table")
const thead = document.querySelector("thead")
let headerTable = null;





// sideBar


document.addEventListener('DOMContentLoaded',  async () => {
  // Dom Filter
  
  // options Dom

  // label DOM
  const selectDiv = document.getElementById("selectDiv")
  selectDiv.innerHTML = ""


  const selectLabel = document.createElement("label")
  selectLabel.textContent = "Unidad"



  const select = document.createElement("select")
  select.setAttribute("id", "selectFilter")

  while(select.firstChild){
    select.removeChild(select.firstChild)
  }

  const option = document.createElement("option")
  option.textContent = "San José"
  option.value = "sanJose"

  const option2 = document.createElement("option")
  option2.textContent = "Alajuela"
  option2.value = "alajuela"

  const option3 = document.createElement("option")
  option3.textContent = "Cartago"
  option3.value = "cartago"

  const option4 = document.createElement("option")
  option4.textContent = "Heredia"
  option4.value = "heredia"

  const option5 = document.createElement("option")
  option5.textContent = "Guanacaste"
  option5.value = "guanacaste"

  const option6 = document.createElement("option")
  option6.textContent = "Puntarenas"
  option6.value = "puntarenas"

  const option7 = document.createElement("option")
  option7.textContent = "Limón"
  option7.value = 'limon'
  

  selectDiv.appendChild(selectLabel)
  selectDiv.appendChild(select)
  select.appendChild(option)
  select.appendChild(option2)
  select.appendChild(option3)
  select.appendChild(option4)
  select.appendChild(option5)
  select.appendChild(option6)
  select.appendChild(option7)




  const selectLabel2 = document.createElement("label")
  selectLabel2.textContent = "Rol"



  const select2 = document.createElement("select")
  select2.setAttribute("id", "selectFilter2")

  while(select2.firstChild){
    select2.removeChild(select2.firstChild)
  }

  const optionSelect = document.createElement("option")
  optionSelect.textContent = "Jefatura"
  optionSelect.value = "jefatura"

  const optionSelect2 = document.createElement("option")
  optionSelect2.textContent = "Proveeduría"
  optionSelect2.value = "proveeduria"

  const optionSelect3 = document.createElement("option")
  optionSelect.textContent = "Encargado de inventario por unidad"
  optionSelect.value = "encargadodeinventarioporunidad"



  selectDiv.appendChild(selectLabel2)
  selectDiv.appendChild(select2)
  select2.appendChild(optionSelect)
  select2.appendChild(optionSelect2)
  select2.appendChild(optionSelect3)
 




 // First div filter
 const filterDiv = document.getElementById("filterDiv")
 filterDiv.innerHTML = ""

 const filterLabel1 = document.createElement("label")
 filterLabel1.textContent = "Nombre de usuario"

 const filterLabel2 = document.createElement("label")
 filterLabel2.textContent = "Teléfono "

 const filterInput1 = document.createElement("input")
 filterInput1.setAttribute("id", "filterInput1")

 const filterInput2 = document.createElement("input")
 filterInput2.setAttribute("id", "filterInput2")

 
 filterDiv.appendChild(filterLabel1)
 filterDiv.appendChild(filterInput1)
 
 filterDiv.appendChild(filterLabel2)
 filterDiv.appendChild(filterInput2)

  // Second div filter
  const filterDiv2 = document.getElementById("filterDiv2")
  filterDiv2.innerHTML = ""
 
  const filterLabel3 = document.createElement("label")
  filterLabel3.textContent = "Correo electrónico"
 
  const filterLabel4 = document.createElement("label")
  filterLabel4.textContent = "Teléfono "
 
  const filterInput3 = document.createElement("input")
  filterInput3.setAttribute("id", "filterInput3")
 
  const filterInput4 = document.createElement("input")
  filterInput4.setAttribute("id", "filterInput4")
 
  
  filterDiv2.appendChild(filterLabel3)
  filterDiv2.appendChild(filterInput3)
  
  filterDiv2.appendChild(filterLabel4)
  filterDiv2.appendChild(filterInput4)

//  third div
const filterDiv3 = document.getElementById("filterDiv3")
filterDiv3.innerHTML = ""

const filterLabel5 = document.createElement("label")
  filterLabel5.textContent = "Fecha de creación"

const filterInput5 = document.createElement("input")
filterInput5.setAttribute("id", "filterInput5")
filterInput5.setAttribute('type', 'date')

filterDiv3.appendChild(filterLabel5)
filterDiv3.appendChild(filterInput5)

  headerTable = table.tHead.insertRow(0);

  const th = document.createElement("th");
  th.textContent = "Foto";

  const th1 = document.createElement("th");
  th1.textContent =  "Identificación";
  
  const th2 = document.createElement("th");
  th2.textContent = "Usuario";
  
  const th3 = document.createElement("th");
  th3.textContent = "Correo electrónico";
  
  const th4 = document.createElement("th");
  th4.textContent = "Teléfono";
  
  const th5 = document.createElement("th");
  th5.textContent = "Fecha de nacimiento";
  
  const th6 = document.createElement("th");
  th6.textContent = "Unidad";
  
  const th7 = document.createElement("th");
  th7.textContent = "Aprobado";

  const th8 = document.createElement("th");
  th8.textContent = "Fecha de registro"
  
  // Agregar los nuevos elementos "th" a la fila de encabezado
  headerTable.appendChild(th)
  headerTable.appendChild(th1);
  headerTable.appendChild(th2);
  headerTable.appendChild(th3);
  headerTable.appendChild(th4);
  headerTable.appendChild(th5);
  headerTable.appendChild(th6);
  headerTable.appendChild(th7);
  headerTable.appendChild(th8)


  const users = await logBookUsers()

  users.forEach(user => {
    const tbody = document.querySelector("#table tbody")
    console.log(tbody)

    const tr = document.createElement("tr");


    const userImg = document.createElement("img")
    userImg.setAttribute("src", user.photo)
    userImg.classList.add("img-User")
    userImg.setAttribute("alt", "User Photo")

    const userId = document.createElement("td");
    userId.textContent = user.identification;

    const userName = document.createElement("td");
    userName.textContent = user.name + "  " + user.lastName + "  " + user.secondLastName;

    const userEmail = document.createElement("td");
    userEmail.textContent = user.email;

    const userNumber = document.createElement("td");
    userNumber.textContent = user.number;

    const userBirth = document.createElement("td");
    userBirth.textContent = user.birthDay;

    const userUnit = document.createElement("td");
    userUnit.textContent = "Unidad";

    const userAproved  = document.createElement("td");
    userAproved.textContent = "Aprobado por";

    const userCreatedAt = document.createElement("td")
    userCreatedAt.textContent = user.createdAt


    



    tbody.appendChild(tr);
    tr.appendChild(userImg);
    tr.appendChild(userId);
    tr.appendChild(userName);
    // tr.appendChild(userLastName);
    tr.appendChild(userEmail);
    tr.appendChild(userNumber);
    tr.appendChild(userBirth);
    tr.appendChild(userUnit);
    tr.appendChild(userAproved);
    tr.appendChild(userCreatedAt);

    
  });
    

})

btnUsers.addEventListener('click', async () => {
  // Dom Filter
  
  // options Dom

  // label DOM
  const selectDiv = document.getElementById("selectDiv")
  selectDiv.innerHTML = ""


  const selectLabel = document.createElement("label")
  selectLabel.textContent = "Unidad"



  const select = document.createElement("select")
  select.setAttribute("id", "selectFilter")

  while(select.firstChild){
    select.removeChild(select.firstChild)
  }

  const option = document.createElement("option")
  option.textContent = "San José"
  option.value = "sanJose"

  const option2 = document.createElement("option")
  option2.textContent = "Alajuela"
  option2.value = "alajuela"

  const option3 = document.createElement("option")
  option3.textContent = "Cartago"
  option3.value = "cartago"

  const option4 = document.createElement("option")
  option4.textContent = "Heredia"
  option4.value = "heredia"

  const option5 = document.createElement("option")
  option5.textContent = "Guanacaste"
  option5.value = "guanacaste"

  const option6 = document.createElement("option")
  option6.textContent = "Puntarenas"
  option6.value = "puntarenas"

  const option7 = document.createElement("option")
  option7.textContent = "Limón"
  option7.value = 'limon'
  

  selectDiv.appendChild(selectLabel)
  selectDiv.appendChild(select)
  select.appendChild(option)
  select.appendChild(option2)
  select.appendChild(option3)
  select.appendChild(option4)
  select.appendChild(option5)
  select.appendChild(option6)
  select.appendChild(option7)




  const selectLabel2 = document.createElement("label")
  selectLabel2.textContent = "Rol"



  const select2 = document.createElement("select")
  select2.setAttribute("id", "selectFilter2")

  while(select2.firstChild){
    select2.removeChild(select2.firstChild)
  }

  const optionSelect = document.createElement("option")
  optionSelect.textContent = "Jefatura"
  optionSelect.value = "jefatura"

  const optionSelect2 = document.createElement("option")
  optionSelect2.textContent = "Proveeduría"
  optionSelect2.value = "proveeduria"

  const optionSelect3 = document.createElement("option")
  optionSelect3.textContent = "Encargado de inventario por unidad"
  optionSelect3.value = "encargadodeinventarioporunidad"



  selectDiv.appendChild(selectLabel2)
  selectDiv.appendChild(select2)
  select2.appendChild(optionSelect)
  select2.appendChild(optionSelect2)
  select2.appendChild(optionSelect3)
 




 // First div filter
 const filterDiv = document.getElementById("filterDiv")
 filterDiv.innerHTML = ""

 const filterLabel1 = document.createElement("label")
 filterLabel1.textContent = "Nombre de usuario"

 const filterLabel2 = document.createElement("label")
 filterLabel2.textContent = "Teléfono "

 const filterInput1 = document.createElement("input")
 filterInput1.setAttribute("id", "filterInput1")

 const filterInput2 = document.createElement("input")
 filterInput2.setAttribute("id", "filterInput2")

 
 filterDiv.appendChild(filterLabel1)
 filterDiv.appendChild(filterInput1)
 
 filterDiv.appendChild(filterLabel2)
 filterDiv.appendChild(filterInput2)

  // Second div filter
  const filterDiv2 = document.getElementById("filterDiv2")
  filterDiv2.innerHTML = ""
 
  const filterLabel3 = document.createElement("label")
  filterLabel3.textContent = "Correo electrónico"
 
  const filterLabel4 = document.createElement("label")
  filterLabel4.textContent = "Teléfono "
 
  const filterInput3 = document.createElement("input")
  filterInput3.setAttribute("id", "filterInput3")
 
  const filterInput4 = document.createElement("input")
  filterInput4.setAttribute("id", "filterInput4")
 
  
  filterDiv2.appendChild(filterLabel3)
  filterDiv2.appendChild(filterInput3)
  
  filterDiv2.appendChild(filterLabel4)
  filterDiv2.appendChild(filterInput4)

//  third div
const filterDiv3 = document.getElementById("filterDiv3")
filterDiv3.innerHTML = ""

const filterLabel5 = document.createElement("label")
  filterLabel5.textContent = "Fecha de creación"

const filterInput5 = document.createElement("input")
filterInput5.setAttribute("id", "filterInput5")
filterInput5.setAttribute('type', 'date')

filterDiv3.appendChild(filterLabel5)
filterDiv3.appendChild(filterInput5)



// filter part
const formFilter = document.querySelector("#filter")
formFilter.addEventListener('submit', async (e) => {
  e.preventDefault()
   const user = logBookUserFilterName(filterInput1.value)
   console.log(user)
  //  user.forEach(user => {
  //   const tbody = document.querySelector("#table tbody")
  //   console.log(tbody)

  //   const tr = document.createElement("tr");


  //   const userImg = document.createElement("img")
  //   userImg.setAttribute("src", user.photo)
  //   userImg.classList.add("img-User")
  //   userImg.setAttribute("alt", "User Photo")

  //   const userId = document.createElement("td");
  //   userId.textContent = user.identification;

  //   const userName = document.createElement("td");
  //   userName.textContent = user.name + "  " + user.lastName + "  " + user.secondLastName;

  //   const userEmail = document.createElement("td");
  //   userEmail.textContent = user.email;

  //   const userNumber = document.createElement("td");
  //   userNumber.textContent = user.number;

  //   const userBirth = document.createElement("td");
  //   userBirth.textContent = user.birthDay;

  //   const userUnit = document.createElement("td");
  //   userUnit.textContent = "Unidad";

  //   const userAproved  = document.createElement("td");
  //   userAproved.textContent = "Aprobado por";

  //   const userCreatedAt = document.createElement("td")
  //   userCreatedAt.textContent = user.createdAt


    



  //   tbody.appendChild(tr);
  //   tr.appendChild(userImg);
  //   tr.appendChild(userId);
  //   tr.appendChild(userName);
  //   // tr.appendChild(userLastName);
  //   tr.appendChild(userEmail);
  //   tr.appendChild(userNumber);
  //   tr.appendChild(userBirth);
  //   tr.appendChild(userUnit);
  //   tr.appendChild(userAproved);
  //   tr.appendChild(userCreatedAt);


  //  })

})



  // Table header DOM 
  const tbody = document.querySelector("#table tbody")
  tbody.innerHTML = ""
  if (headerTable !== null) {
    headerTable.remove();
  }

  headerTable = table.tHead.insertRow(0);

  const th = document.createElement("th");
  th.textContent = "Foto";

  const th1 = document.createElement("th");
  th1.textContent =  "Identificación";
  
  const th2 = document.createElement("th");
  th2.textContent = "Usuario";
  
  const th3 = document.createElement("th");
  th3.textContent = "Correo electrónico";
  
  const th4 = document.createElement("th");
  th4.textContent = "Teléfono";
  
  const th5 = document.createElement("th");
  th5.textContent = "Fecha de nacimiento";
  
  const th6 = document.createElement("th");
  th6.textContent = "Unidad";
  
  const th7 = document.createElement("th");
  th7.textContent = "Aprobado";

  const th8 = document.createElement("th");
  th8.textContent = "Fecha de registro"
  
  // Add elements to the table header
  headerTable.appendChild(th);
  headerTable.appendChild(th1);
  headerTable.appendChild(th2);
  headerTable.appendChild(th3);
  headerTable.appendChild(th4);
  headerTable.appendChild(th5);
  headerTable.appendChild(th6);
  headerTable.appendChild(th7);
  headerTable.appendChild(th8)

// Charge DB information to the table
  const users = await logBookUsers()

  users.forEach(user => {
    const tbody = document.querySelector("#table tbody")
    console.log(tbody)

    const tr = document.createElement("tr");



    const userImg = document.createElement("img")
    userImg.setAttribute("src", user.photo)
    userImg.classList.add("img-User")
    userImg.setAttribute("alt", "User Photo")

    const userId = document.createElement("td");
    userId.textContent = user.identification;


    
    const userName = document.createElement("td");
    userName.textContent = user.name + "  " + user.lastName + "  " + user.secondLastName;
    
   

    const userEmail = document.createElement("td");
    userEmail.textContent = user.email;

    const userNumber = document.createElement("td");
    userNumber.textContent = user.number;

    const userBirth = document.createElement("td");
    userBirth.textContent = user.birthDay;

    const userUnit = document.createElement("td");
    userUnit.textContent = user.approved;

    const userAproved  = document.createElement("td");
    userAproved.textContent = user.password;

    const userCreatedAt = document.createElement("td")
    userCreatedAt.textContent = user.createdAt





    tbody.appendChild(tr);
    tr.appendChild(userImg);
    tr.appendChild(userId);
    tr.appendChild(userName);
    tr.appendChild(userEmail);
    tr.appendChild(userNumber);
    tr.appendChild(userBirth);
    tr.appendChild(userUnit);
    tr.appendChild(userAproved);
    tr.appendChild(userCreatedAt);

    
  });

  
});

btnUnits.addEventListener("click", () => {
  // Dom Filter
  
  // options Dom

  // label DOM
  const selectDiv = document.getElementById("selectDiv")
  selectDiv.innerHTML = ""


  const selectLabel = document.createElement("label")
  selectLabel.textContent = "Unidad"



  const select = document.createElement("select")
  select.setAttribute("id", "selectFilter")

  while(select.firstChild){
    select.removeChild(select.firstChild)
  }

  const option = document.createElement("option")
  option.textContent = "San José"
  option.value = "sanJose"

  const option2 = document.createElement("option")
  option2.textContent = "Alajuela"
  option2.value = "alajuela"

  const option3 = document.createElement("option")
  option3.textContent = "Cartago"
  option3.value = "cartago"

  const option4 = document.createElement("option")
  option4.textContent = "Heredia"
  option4.value = "heredia"

  const option5 = document.createElement("option")
  option5.textContent = "Guanacaste"
  option5.value = "guanacaste"

  const option6 = document.createElement("option")
  option6.textContent = "Puntarenas"
  option6.value = "puntarenas"

  const option7 = document.createElement("option")
  option7.textContent = "Limón"
  option7.value = 'limon'
  

  selectDiv.appendChild(selectLabel)
  selectDiv.appendChild(select)
  select.appendChild(option)
  select.appendChild(option2)
  select.appendChild(option3)
  select.appendChild(option4)
  select.appendChild(option5)
  select.appendChild(option6)
  select.appendChild(option7)


 
 // First div filter
 const filterDiv = document.getElementById("filterDiv")
 filterDiv.innerHTML = ""

 const filterLabel1 = document.createElement("label")
 filterLabel1.textContent = "ID"

//  const filterLabel2 = document.createElement("label")
//  filterLabel2.textContent = "Teléfono "

 const filterInput1 = document.createElement("input")
 filterInput1.setAttribute("id", "filterInput1")

//  const filterInput2 = document.createElement("input")
//  filterInput2.setAttribute("id", "filterInput2")

 
 filterDiv.appendChild(filterLabel1)
 filterDiv.appendChild(filterInput1)
 
//  filterDiv.appendChild(filterLabel2)
//  filterDiv.appendChild(filterInput2)

  // // Second div filter
  const filterDiv2 = document.getElementById("filterDiv2")
  filterDiv2.innerHTML = ""
 
  // const filterLabel3 = document.createElement("label")
  // filterLabel3.textContent = "Correo electrónico"
 
  // const filterLabel4 = document.createElement("label")
  // filterLabel4.textContent = "Teléfono "
 
  // const filterInput3 = document.createElement("input")
  // filterInput3.setAttribute("id", "filterInput3")
 
  // const filterInput4 = document.createElement("input")
  // filterInput4.setAttribute("id", "filterInput4")
 
  
  // filterDiv2.appendChild(filterLabel3)
  // filterDiv2.appendChild(filterInput3)
  
  // filterDiv2.appendChild(filterLabel4)
  // filterDiv2.appendChild(filterInput4)

//  third div
const filterDiv3 = document.getElementById("filterDiv3")
filterDiv3.innerHTML = ""

const filterLabel5 = document.createElement("label")
  filterLabel5.textContent = "Fecha de creación"

const filterInput5 = document.createElement("input")
filterInput5.setAttribute("id", "filterInput5")
filterInput5.setAttribute('type', 'date')

filterDiv3.appendChild(filterLabel5)
filterDiv3.appendChild(filterInput5)
  





  // Table header DOM
  const tbody = document.querySelector("#table tbody")
  tbody.innerHTML = ""

    if (headerTable !== null) {
        headerTable.remove();
      }
    
      headerTable = table.tHead.insertRow(0);
    
      const th1 = document.createElement("th");
      th1.textContent =  "ID";
      
      const th2 = document.createElement("th");
      th2.textContent = "Unidad";
      
      const th3 = document.createElement("th");
      th3.textContent = "Ubicación";
      
      const th4 = document.createElement("th");
      th4.textContent = "Fecha creación";
      
      
      headerTable.appendChild(th1);
      headerTable.appendChild(th2);
      headerTable.appendChild(th3);
      headerTable.appendChild(th4);
      
    })

    



btnAssets.addEventListener('click', () => {
    // Dom Filter
  
  // options Dom

  // label DOM
  const selectDiv = document.getElementById("selectDiv")
  selectDiv.innerHTML = ""


  const selectLabel = document.createElement("label")
  selectLabel.textContent = "Unidad"



  const select = document.createElement("select")
  select.setAttribute("id", "selectFilter")

  while(select.firstChild){
    select.removeChild(select.firstChild)
  }

  const option = document.createElement("option")
  option.textContent = "San José"
  option.value = "sanJose"

  const option2 = document.createElement("option")
  option2.textContent = "Alajuela"
  option2.value = "alajuela"

  const option3 = document.createElement("option")
  option3.textContent = "Cartago"
  option3.value = "cartago"

  const option4 = document.createElement("option")
  option4.textContent = "Heredia"
  option4.value = "heredia"

  const option5 = document.createElement("option")
  option5.textContent = "Guanacaste"
  option5.value = "guanacaste"

  const option6 = document.createElement("option")
  option6.textContent = "Puntarenas"
  option6.value = "puntarenas"

  const option7 = document.createElement("option")
  option7.textContent = "Limón"
  option7.value = 'limon'
  

  selectDiv.appendChild(selectLabel)
  selectDiv.appendChild(select)
  select.appendChild(option)
  select.appendChild(option2)
  select.appendChild(option3)
  select.appendChild(option4)
  select.appendChild(option5)
  select.appendChild(option6)
  select.appendChild(option7)


  const selectLabel2 = document.createElement("label")
  selectLabel2.textContent = "Estado"



  const select2 = document.createElement("select")
  select2.setAttribute("id", "selectFilter2")

  while(select2.firstChild){
    select2.removeChild(select2.firstChild)
  }

  const optionSelect = document.createElement("option")
  optionSelect.textContent = "Nuevo"
  optionSelect.value = "new"

  const optionSelect2 = document.createElement("option")
  optionSelect2.textContent = "En uso"
  optionSelect2.value = "use"

  const optionSelect3 = document.createElement("option")
  optionSelect3.textContent = "Dañado"
  optionSelect3.value = "Damage"

  selectDiv.appendChild(selectLabel2)
  selectDiv.appendChild(select2)
  select2.appendChild(optionSelect)
  select2.appendChild(optionSelect2)
  select2.appendChild(optionSelect3)

  




 // First div filter
 const filterDiv = document.getElementById("filterDiv")
 filterDiv.innerHTML = ""

 const filterLabel1 = document.createElement("label")
 filterLabel1.textContent = "Nombre del activo"

//  const filterLabel2 = document.createElement("label")
//  filterLabel2.textContent = "Teléfono "

 const filterInput1 = document.createElement("input")
 filterInput1.setAttribute("id", "filterInput1")

//  const filterInput2 = document.createElement("input")
//  filterInput2.setAttribute("id", "filterInput2")

 
 filterDiv.appendChild(filterLabel1)
 filterDiv.appendChild(filterInput1)
 
//  filterDiv.appendChild(filterLabel2)
//  filterDiv.appendChild(filterInput2)

  // Second div filter
  const filterDiv2 = document.getElementById("filterDiv2")
  filterDiv2.innerHTML = ""
 
  // const filterLabel3 = document.createElement("label")
  // filterLabel3.textContent = "Correo electrónico"
 
  const filterLabel4 = document.createElement("label")
  filterLabel4.textContent = "ID del activo "
 
  // const filterInput3 = document.createElement("input")
  // filterInput3.setAttribute("id", "filterInput3")
 
  const filterInput4 = document.createElement("input")
  filterInput4.setAttribute("id", "filterInput4")
 
  
  // filterDiv2.appendChild(filterLabel3)
  // filterDiv2.appendChild(filterInput3)
  
  filterDiv2.appendChild(filterLabel4)
  filterDiv2.appendChild(filterInput4)

//  third div
const filterDiv3 = document.getElementById("filterDiv3")
filterDiv3.innerHTML = ""

const filterLabel5 = document.createElement("label")
  filterLabel5.textContent = "Fecha añadido"

const filterInput5 = document.createElement("input")
filterInput5.setAttribute("id", "filterInput5")
filterInput5.setAttribute('type', 'date')

filterDiv3.appendChild(filterLabel5)
filterDiv3.appendChild(filterInput5)


  const tbody = document.querySelector("#table tbody")
  tbody.innerHTML = ""
    if (headerTable !== null) {
        headerTable.remove();
      }
    
      headerTable = table.tHead.insertRow(0);
    
      const th1 = document.createElement("th");
      th1.textContent =  "ID";
      
      const th2 = document.createElement("th");
      th2.textContent = "Nombre del Activo";
      
      const th3 = document.createElement("th");
      th3.textContent = "Unidad";
      
      const th4 = document.createElement("th");
      th4.textContent = "Estado";
      
      const th5 = document.createElement("th");
      th5.textContent = "Fecha Añadido";
      
      const th6 = document.createElement("th");
      th6.textContent = "Código de Activo";
      
      
      
      headerTable.appendChild(th1);
      headerTable.appendChild(th2);
      headerTable.appendChild(th3);
      headerTable.appendChild(th4);
      headerTable.appendChild(th5);
      headerTable.appendChild(th6);



  
})
btnLogBook.addEventListener('click', () => {
    const tbody = document.querySelector("#table tbody")
    tbody.innerHTML = ""
    if (headerTable !== null) {
        headerTable.remove();
      }
    
      headerTable = table.tHead.insertRow(0);
    
      const th1 = document.createElement("th");
      th1.textContent =  "Bitacora";
      
      const th2 = document.createElement("th");
      th2.textContent = "";
      
      const th3 = document.createElement("th");
      th3.textContent = "";
      
      const th4 = document.createElement("th");
      th4.textContent = " ";
      
      const th5 = document.createElement("th");
      th5.textContent = " ";
      
      const th6 = document.createElement("th");
      th6.textContent = "";
      
      const th7 = document.createElement("th");
      th7.textContent = "";
      
      headerTable.appendChild(th1);
      headerTable.appendChild(th2);
      headerTable.appendChild(th3);
      headerTable.appendChild(th4);
      headerTable.appendChild(th5);
      headerTable.appendChild(th6);
      headerTable.appendChild(th7);
})

btnWareHouses.addEventListener('click', () => {
    const tbody = document.querySelector("#table tbody")
    tbody.innerHTML = ""
    if (headerTable !== null) {
        headerTable.remove();
      }
    
      headerTable = table.tHead.insertRow(0);
    
      const th1 = document.createElement("th");
      th1.textContent =  "Bodega";
      
      const th2 = document.createElement("th");
      th2.textContent = "";
      
      const th3 = document.createElement("th");
      th3.textContent = "";
      
      const th4 = document.createElement("th");
      th4.textContent = "";
      
      const th5 = document.createElement("th");
      th5.textContent = "  ";
      
      const th6 = document.createElement("th");
      th6.textContent = "";
      
      const th7 = document.createElement("th");
      th7.textContent = "";
      
      headerTable.appendChild(th1);
      headerTable.appendChild(th2);
      headerTable.appendChild(th3);
      headerTable.appendChild(th4);
      headerTable.appendChild(th5);
      headerTable.appendChild(th6);
      headerTable.appendChild(th7);

})

btnDonations.addEventListener('click', () => {
    const tbody = document.querySelector("#table tbody")
    tbody.innerHTML = ""
    if (headerTable !== null) {
        headerTable.remove();
      }
    
      headerTable = table.tHead.insertRow(0);
    
      const th1 = document.createElement("th");
      th1.textContent =  "ID";
      
      const th2 = document.createElement("th");
      th2.textContent = "Activo";
      
      const th3 = document.createElement("th");
      th3.textContent = "Fecha Añadido";
      

      
      headerTable.appendChild(th1);
      headerTable.appendChild(th2);
      headerTable.appendChild(th3);
      
    
})