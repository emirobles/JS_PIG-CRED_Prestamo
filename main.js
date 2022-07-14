//Declaración de variables globales
let prestamo = 0
let sueldo = 0
let nroCuotas
let cuotaFinal = 0
let montoConInteres = 0
let telefono
let nombre

//Funciones
//Calculo de IVA
function iva(monto) {
    let costoIVA = monto * 0.21
    return costoIVA
//Validar nombre
}
function ingresarNombre(nombre) {
    nombre = prompt("Ingrese su nombre completo:");
    while (nombre === "" || nombre === " " || nombre >= 0) {
        nombre = prompt(`${nombre} no es válido. Por favor ingrese su nombre de vuelta: `);
    }
    return nombre
}

function ingresarTelefono(telefono) {    
    do {
        telefono = parseInt(prompt("Ingrese su número de teléfono con código de área. Ejemplo: 0114232323 - 3514232323:"));
        if (telefono = 0){
            telefono = parseInt(prompt("Ingrese su número de teléfono con código de área. Ejemplo: 0114232323 - 3514232323:"));
        } else if (telefono > 9000000000 || telefono < 110000000 || (isNaN(telefono))) {
            telefono = parseInt(prompt(`${telefono} no es válido. Ingrese su número de teléfono con código de área. Ejemplo: 0114232323 - 3514232323:`))
        }     
    } while (telefono > 9000000000 || telefono < 110000000 || (isNaN(telefono)));    
    return telefono  
}

function validarCuota(nroCuotas) { 
    nroCuotas = parseInt(prompt("Ingrese la cantidad de cuotas para financiar. Nuestro máximo de cuotas es de 24"));   
    while (nroCuotas > 24) {
        nroCuotas = parseInt(prompt(`No trabajamos con ${nroCuotas} cuotas. Nuestro máximo es de 24. Intente nuevamente: `));
    };
    while (nroCuotas <= 0) {
        nroCuotas = parseInt(prompt(`${nroCuotas} es muy bajo para ser una cuota. Financiamos de 1 a 24 cuotas. Intente nuevamente: `));
    }
    return nroCuotas    
}


//Calculo de Interes
function interes(monto) {
    let intereses = monto * 0.60
    return intereses
}

//INICIO DE PROGRAMA
alert("Bienvenido a PIG-CRED. Vamos a calcular su préstamo en ARS");
alert("A continuación le pedimos que comparta sus datos para poder validar el préstamo y ponernos en contacto con usted");

//Nombre
nombre = ingresarNombre();

//Telefono y validación
telefono = ingresarTelefono()

//Email
let email = prompt("(Opcional) Ingrese su correo electrónico: ")

//DNI y validación
let dni = parseInt(prompt(`${nombre} ingrese su DNI: `));
while (dni < 9000000 || dni > 99999999 || (isNaN(dni))) {
    dni = parseInt(prompt(`${dni} no es válido. Verifique la cantidad de digitos e ingrese nuevamente su DNI: `));
}

//SUELDO y validación
while (sueldo === 0) {
    sueldo = parseInt(prompt("Ingrese su salario promedio al mes:"));
    while (sueldo <= 0 || sueldo < 10000) {
        sueldo = parseInt(prompt("Ha ingresado un valor muy bajo para su sueldo, por favor intente nuevamente:"));
    };
};

//PRESTAMO y validación
while (prestamo === 0) {
    prestamo = parseInt(prompt("Nuestro límite de préstamo es de 500000 ARS. Ingrese el monto que desea adquirir sin decimales:"))
};

while (prestamo > 500000) {
    alert("Ha ingresado un monto superior al que podemos brindarle. Por favor ingrese otro monto.")
    prestamo = parseInt(prompt("Ingrese el monto que desea adquirir sin decimales:"));
};

while (prestamo <= 0) {
    alert("Ha ingresado un monto inferior. Si quieres adquirir un préstamo prueba de vuelta.");
    prestamo = parseInt(prompt("Ingrese el monto que desea adquirir sin decimales:"))
}

nroCuotas = validarCuota();

//Calculo de monto a pagar en cuotas
montoConInteres = interes(prestamo)
cuotaFinal = parseFloat((montoConInteres + iva(montoConInteres) + prestamo) / nroCuotas).toFixed(2)
alert(`RESULTADO DE SU FINANCIACIÓN: El monto que usted tendría que abonar es de ${cuotaFinal} ARS durante ${nroCuotas} meses. Para obtener su prestamo de ${prestamo} ARS`)

// Resumen de operaciones principales por consola
console.log("Bienvenido a PIG-CRED. Vamos a calcular su préstamo en ARS")
console.log(`Nombre: ${nombre}`)
console.log(`DNI: ${dni}`)
console.log(`Telefono de contacto: ${telefono}`)
console.log(`Monto solicitado: ${prestamo}`)
console.log(`Cuotas: ${nroCuotas}`)
console.log(`Monto a abonar con interes sin IVA incluido: ${montoConInteres}`)
console.log(`RESULTADO DE SU FINANCIACIÓN: El monto que usted tendría que abonar es de ${cuotaFinal} ARS durante ${nroCuotas} meses. Para obtener su prestamo de ${prestamo} ARS`)


