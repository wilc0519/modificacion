import { Empleados } from "./empleados";
import { HorasTrabajasPorDia } from "./horas-trabajadas-por-dia";

export const convertirCadenaComoEmpleados = (cadena:string) =>{
    const horasDiasTrabajados: HorasTrabajasPorDia[] = []
    const arregloNombreHorasDiasTrabajados = cadena.split('=')
    const nombresEmpleado = arregloNombreHorasDiasTrabajados[0]
    const arregloNombresEmpleados = nombresEmpleado.split('-')
    const nombrePrimerEmpleado = arregloNombresEmpleados[0]
    const nombreSegundoEmpleado = arregloNombresEmpleados[1]
    const arregloDiasYHoras = arregloNombreHorasDiasTrabajados[1].split(',')
    arregloDiasYHoras.forEach(diaHora => {
        const dia = diaHora.substring(0,2)
        const horaInicioFin = diaHora.substring(2, diaHora.length).split(':').join('').split('-') 
        const horaInicio = Number(horaInicioFin[0])
        const horafin = Number(horaInicioFin[1])
        const horasPorDia = new HorasTrabajasPorDia(dia, horaInicio, horafin)
        horasDiasTrabajados.push(horasPorDia)

    })
    const empleados = new Empleados(nombrePrimerEmpleado, nombreSegundoEmpleado, horasDiasTrabajados)
    return empleados
}