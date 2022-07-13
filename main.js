//Declaración de variables
const arrayAlumnos = []
let nota1, nota2, nota3, nota4, nota
let nombre, apellido

//Funciones
//Validar nombre
function ingresarNombre(nombre) {
    nombre = prompt("Ingrese nombre del alumno:");
    while (nombre === "" || nombre === " " || nombre >= 0) {
        nombre = prompt(`${nombre} no es válido. Por favor ingrese su nombre de vuelta: `);
    }
    return nombre
}

//Validar apellido
function ingresarApellido(apellido) {
    apellido = prompt("Ingrese apellido del alumno:");
    while (apellido === "" || apellido === " " || apellido >= 0) {
        apellido = prompt(`${apellido} no es válido. Por favor ingrese su nombre de vuelta: `);
    }
    return apellido
}

//Validar nota
function verificarnota(numero) {
    do {
        nota = parseFloat(prompt(`Ingrese la calificación que obtuvo en la evaluación ${numero}`))

        if ((nota >= 11) || (nota <= 0) || (isNaN(nota))) {
            alert("Ingrese un número del 1 al 10")
        }
    } while ((nota >= 11) || (nota <= 0) || (isNaN(nota)))

    return nota
}

//Validar respuesta
function verificarResp() {
    do {
        consulta = (prompt("Desea ingresar un alumno? Si | No")).toLowerCase()
        if ((consulta != "si") && (consulta != "no")) {
            alert("Error, intente nuevamente")
        }
    } while ((consulta != "si") && (consulta != "no"))
    return consulta

}

// Constructor de objeto
class Alumno {
    constructor(nombre, apellido, nota1, nota2, nota3, nota4) {
        this.nombre = nombre
        this.apellido = apellido
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
        this.nota4 = nota4
        this.promedio = (this.nota1 + this.nota2 + this.nota3 + this.nota4) / 4
    }
    mostrarPromedio() {
        console.log(`El promedio de  ${this.nombre} ${this.apellido} es ${this.promedio}`)
        document.write(`El promedio de  ${this.nombre} ${this.apellido} es ${this.promedio}` + `<br/>`)
    }
    mostrarSiAprobo() {
        if (this.promedio >= 6) {
            console.log(`${this.nombre} ${this.apellido} - Se encuentra aprobado`)
            document.write(`${this.nombre} ${this.apellido} - Se encuentra aprobado` + `<br/>`)
        } else {
            console.log(`${this.nombre} ${this.apellido} - Se encuentra desaprobado`)
            document.write(`${this.nombre} ${this.apellido} - Se encuentra desaprobado` + `<br/>`)
        }
    }
}

//Inicio del programa
alert("BIENVENIDO A LA CARGA DE NOTAS DE LOS ALUMNOS \nDEL SALÓN N°1")
//Carga de datos
do {
    nombre = ingresarNombre()
    apellido = ingresarApellido()
    nota1 = verificarnota(1)
    nota2 = verificarnota(2)
    nota3 = verificarnota(3)
    nota4 = verificarnota(4)
    consulta = verificarResp()
    arrayAlumnos.push(new Alumno(nombre, apellido, nota1, nota2, nota3, nota4))
} while (consulta == "si")

//Mostrar resultados - Promedio - Aprobados o desaprobados.
do {
    consulta = parseFloat(prompt("Por favor escoja alguna de las siguientes opciones: \n 1 - Ver el promedio de los alumnos.\n 2 - Ver si están Aprobados o Desaprobados."))
    if (consulta === 1) {
        for (Alumno of arrayAlumnos) {
            Alumno.mostrarPromedio()
        }
    } else if (consulta === 2) {
        for (Alumno of arrayAlumnos) {
            Alumno.mostrarSiAprobo()
        }
    } else {
        alert("No es una opción válida. Intente nuevamente.")
    }
} while ((consulta !== 1) && (consulta !== 2))