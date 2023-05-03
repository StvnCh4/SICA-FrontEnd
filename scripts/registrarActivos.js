const registerActive = async (activoNombre, activoDescrip, activoID, activoCode, activoUbicacion, activoPiso, activoEstado, activoImages) => {
    const activos = {
        nombre: activoNombre,
        descripcion: activoDescrip,
        idActivo: activoID,
        codeUbicacion: activoCode,
        ubicacion: activoUbicacion,
        piso: activoPiso,
        estado: activoEstado,
        photo: activoImages,
    };

    try {
        const res = await fetch("http://localhost:8080/activos", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(activos),
        });
    } catch (error) {
        console.error(error);
    }
}
function refreshPage(){
    window.location.reload();
} 
window.onload = function(){
    const registrarActivo = document.getElementById("registrar");

    registrarActivo.addEventListener("click", async function registrarActivoFuct(e){
        e.preventDefault();
        const activeName = document.getElementById("activoNombre");
        const activeDescription = document.getElementById("activoDescrip");
        const activeLocation = document.getElementById("activoUbicacion");
        const activePiso = document.getElementById("activoPiso");
        const activeStatus = document.getElementById("activoEstado");
        const activoImagesBtn = document.getElementById("fileButtonAvatar");
        const activoImages = document.getElementById("avatar-image");
        let aumento = "";
        let aumentoCont="";
        aumento++;
        function zfill(number, width) {
            var numberOutput = Math.abs(number); /* Valor absoluto del número */
            var length = number.toString().length; /* Largo del número */ 
            var zero = "0"; /* String de cero */  
            
            if (width <= length) {
                if (number < 0) {
                    return ("-" + numberOutput.toString()); 
                } else {
                    return numberOutput.toString(); 
                }
            } else {
                if (number < 0) {
                    return ("-" + (zero.repeat(width - length)) + numberOutput.toString()); 
                } else {
                    aumentoCont += (zero.repeat(width - length) + numberOutput.toString()); 
                }
            }
            
        }
        zfill(aumento, 6)

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
        });
    
        activoImagesBtn.addEventListener("click", () => {
            cloudinaryWidget.open()
        }, false)

        //Código Ubicacion
        let valueUbicacion = activeLocation.options[activeLocation.selectedIndex].text;
        let valuePiso = activePiso.options[activePiso.selectedIndex].text;
        let codigoUbicacion = "pro"+valueUbicacion.substr(0,3)+"pis"+valuePiso;
        let codeUbi = codigoUbicacion.toLowerCase();
        console.log(codeUbi);
        

        if(activeName.value.trim() === "" || activeDescription.value.trim() === ""){
            Swal.fire({
                icon: 'warning',
                title: ' Falta información del activo',
                confirmButtonColor: "#a44200",   
            })
            activeName.classList.add('invalid');
            activeDescription.classList.add('invalid');

        } else if(activoImages.src === "" || activoImages.src.includes("assets/avatar-big.png")  ){
            Swal.fire({
                icon: 'warning',
                title: ' Falta imagen del activo',
                confirmButtonColor: "#a44200",
            })
        } else{
            Swal.fire({
                title: 'Registrando usuario',
                html: 'Por favor espere...',
                timer: 1500,
                timerProgressBar: true,
            })
            await registerActive(activeName.value, activeDescription.value, aumentoCont, codeUbi, activeLocation.value, valuePiso, activeStatus.value, activoImages.src)
            Swal.fire({
                icon: 'success',
                title: "Registro exitoso de activo",
                text: `Activo registrado ${activeName.value}`,
                
        });
        }   
    })
}