const NACIONALIDADES_ACEPTADAS = [
    {key: 'AU', name: "Australia"},
    {key: 'BR', name: "Brasil"},
    {key: 'CA', name: "Canadá"},
    {key: 'CH', name: "Chile"},
    {key: 'DE', name: "Alemania"},
    {key: 'DK', name: "Dinamarca"},
    {key: 'ES', name: "España"},
    {key: 'FI', name: "Finlandia"},
    {key: 'FR', name: "Francia"},
    {key: 'GB', name: "Reino Unido"},
    {key: 'IE', name: "Irlanda"},
    {key: 'IN', name: "India"},
    {key: 'IR', name: "Irán"},
    {key: 'MX', name: "México"},
    {key: 'NL', name: "Países Bajos"},
    {key: 'NO', name: "Noruega"},
    {key: 'NZ', name: "Nueva Zelanda"},
    {key: 'RS', name: "Serbia"},
    {key: 'TR', name: "Turquía"},
    {key: 'UA', name: "Ucrania"},
    {key: 'US', name: "Brasil"},
];

window.onload = function(){
    const form = document.getElementsByTagName("form");
    const inputs = form[0].getElementsByTagName("input");
    const selects = form[0].getElementsByTagName("select");
    const checkboxesInteres = document.querySelectorAll('input[name="interest"]'); // Obtener los checkbox

    for(let input of inputs){

        // Si es un checkbox entonces no se aplica la validación de campo vacío
        if(input.type === "checkbox") {
            input.addEventListener('change', function() {
                validarCheckboxes(checkboxesInteres);
            });
            continue; 
        }

        input.onfocus = resaltarDesresaltar;

        input.addEventListener('blur', resaltarDesresaltar);

        input.addEventListener('input', validarInput);
        
        input.addEventListener('blur', validarInput);
    }

    for(let select of selects){
        select.onfocus = resaltar;
        select.addEventListener('blur', noResaltar);
        select.addEventListener('change', validarInput);
    }

    validarCheckboxes(checkboxesInteres);

    llenarNacionalidad();
}

function llenarNacionalidad(){
    const nacionalidad = document.getElementById("nationality");

    for(let{key, name} of NACIONALIDADES_ACEPTADAS){
        const option = document.createElement("option");
        option.value = key;
        option.innerHTML = name;
        nacionalidad.appendChild(option);
    }
}

function validarCheckboxes(checkboxes) {
    let algunoMarcado = false;

    // Recorrer cada checkbox para ver si hay al menos uno marcado
    checkboxes.forEach(checkBox => {
        if (checkBox.checked) algunoMarcado = true;
    });

    // Se le aplica la validación
    checkboxes.forEach(checkBox => {
        if (!algunoMarcado) {
            // Si no hay nningun checkbox seleccionado semuestra el error
            checkBox.setCustomValidity("Selecciona al menos una opción de interés.");
        } else {
            // Si hay al menos uno seleccionado entonces se limpia el error
            checkBox.setCustomValidity("");
        }
    });
}

function validarInput(evento){
    const input = evento.target;
    const valor = input.value.trim();

    // Validar que el espacio no esté vacío
    if(valor === "") {
        input.setCustomValidity("");
        input.classList.remove("error");
        return;
    }

    // Validar que el nombre y apellido no contengan caracteres especiales
    if(input.id === 'first-name' || input.id === 'last-name'){
        // Usé una expresión regular que solo permite letras de la a-z, la ñ y acentos
        const regexSoloLetras = /^[a-zA-ZÁÉÍÓÚáéíóúñÑÜü\s]+$/;

        if(!regexSoloLetras.test(valor)){
            input.setCustomValidity("No se permiten números ni caracteres especiales.");
            input.reportValidity();
            input.classList.add("error");
        } else {
            input.setCustomValidity("");
            input.classList.remove("error");
        }
    }
}

function resaltar(evento){
    evento.target.classList.add("selected");
}

function noResaltar(evento){
    const clase = evento.target.classList.contains("selected");
    if(clase){
        evento.target.classList.remove("selected");
    }
}

function resaltarDesresaltar(evento){
    evento.target.classList.toggle("selected");
}