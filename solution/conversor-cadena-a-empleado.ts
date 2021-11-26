import { Empleado } from "./empleado"
import { HorasTrabajasPorDia } from "./horas-trabajadas-por-dia"

export const convertirCadenaComoEmpleado = (cadena: string):Empleado=>{
    const horasDiasTrabajados: HorasTrabajasPorDia[] = []
    const arregloNombreHorasDiasTrabajados = cadena.split('=')
    const nombreEmpleado = arregloNombreHorasDiasTrabajados[0]
    const arregloDiasYHoras = arregloNombreHorasDiasTrabajados[1].split(',')
    arregloDiasYHoras.forEach(diaHora => {
        const dia = diaHora.substring(0,2)
        const horaInicioFin = diaHora.substring(2, diaHora.length).split(':').join('').split('-') 
        const horaInicio = Number(horaInicioFin[0])
        const horafin = Number(horaInicioFin[1])
        const horasPorDia = new HorasTrabajasPorDia(dia, horaInicio, horafin)
        horasDiasTrabajados.push(horasPorDia)

    })
    const empleado = new Empleado(nombreEmpleado, horasDiasTrabajados)
    return empleado
}
