let subMenu = document.querySelector('#subMenu');
let userPicture = document.querySelector('#userPic');
let dropDownPhoto = document.querySelector('#dropDownPhoto');
let userRole = document.querySelector("#userRole")
const logoutBtn = document.querySelector('#logoutSession');


// charge user name
const userNameL = document.querySelector("#userName")
let userNameSession = sessionStorage.getItem("name");
console.log(userNameSession)

userNameL.textContent = userNameSession

// Charge user role

let roleSession = sessionStorage.getItem("role");

userRole.textContent = roleSession.toUpperCase()


// charge user picture
pictureSession = sessionStorage.getItem("photo");
userPicture.setAttribute("src",pictureSession)
dropDownPhoto.setAttribute("src",pictureSession)




const toggleMenu = () => {
    subMenu.classList.toggle("open-menu");
}



userPicture.addEventListener('click', toggleMenu);


logoutBtn.addEventListener('click', () => {
    sessionStorage.clear();
    window.location.href = 'login.html';
})
