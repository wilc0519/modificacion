const { buscarCoindidenciasDeEmpleados } = require("./calcular-coincidencias")
const { convertirCadenaComoEmpleado } = require("./conversor-cadena-a-empleado")
const { convertirTextoComoArregloEmpleados } = require("./conversor-texto")
import { buscarDiasDeCoincidenciaDeEmpleados } from "./calcular-dias-de-coincidencia"
import { buscarDiasYHorasDeCoincidenciasDeEmpleados } from "./dias-y-horas-de-coincidencia"
import { Empleado } from "./empleado"
import { leerArchivo } from "./lector-archivos"

export const buscarCoindidencias = (nombreArchivo: string) => {
    const contenidoArchivo = leerArchivo(nombreArchivo)
    const textoComoArrayDeInformacion: string[] = convertirTextoComoArregloEmpleados(contenidoArchivo)
    const empleados: Empleado[] = []
    textoComoArrayDeInformacion.forEach((cadena: string) => {
        const empleado: Empleado = convertirCadenaComoEmpleado(cadena)
        empleados.push(empleado)
    });
    const tablaCoincidencias = buscarCoindidenciasDeEmpleados(empleados)
    console.log(tablaCoincidencias)
    const tablaCoincidenciasDias = buscarDiasDeCoincidenciaDeEmpleados(empleados)
    console.log(tablaCoincidenciasDias)
    const tablaCoincidenciaDiasHoras = buscarDiasYHorasDeCoincidenciasDeEmpleados(empleados)
    console.log(tablaCoincidenciaDiasHoras)
}

buscarCoindidencias('../solution/__tests__/empleado-dias-horas-trabajadas.txt')

