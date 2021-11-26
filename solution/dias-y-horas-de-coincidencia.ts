import { Empleado } from "./empleado";

export const buscarDiasYHorasDeCoincidenciasDeEmpleados = (empleados: Empleado[]) => {
    const coincidencias: string[] = []

    for (let indiceDelEmpleadoParaBuscarCoincidencias = 0; indiceDelEmpleadoParaBuscarCoincidencias < empleados.length; indiceDelEmpleadoParaBuscarCoincidencias++) {
        const empleadoParaBuscarCoincidencias = empleados[indiceDelEmpleadoParaBuscarCoincidencias]
        for (let indiceDelRestoDeEmpleados = indiceDelEmpleadoParaBuscarCoincidencias + 1; indiceDelRestoDeEmpleados < empleados.length; indiceDelRestoDeEmpleados++) {
            let diasYHorasQueCoincidenTrabajando: string[] = []
            const otroEmpleado = empleados[indiceDelRestoDeEmpleados]
            empleadoParaBuscarCoincidencias.diasHorasTrabajadas.forEach(horasTrabajadasPorDiaDelEmpleadoParaBuscarCoincidencias => {
                otroEmpleado.diasHorasTrabajadas.forEach(horasTrabajadasPorDiaDelOtroEmpleado => {
                    if (horasTrabajadasPorDiaDelEmpleadoParaBuscarCoincidencias.dia === horasTrabajadasPorDiaDelOtroEmpleado.dia &&
                        horasTrabajadasPorDiaDelEmpleadoParaBuscarCoincidencias.horaInicio < horasTrabajadasPorDiaDelOtroEmpleado.horaFin &&
                        horasTrabajadasPorDiaDelOtroEmpleado.horaInicio < horasTrabajadasPorDiaDelEmpleadoParaBuscarCoincidencias.horaFin) {
                        let horaInicioCoincidencia = Math.max(horasTrabajadasPorDiaDelEmpleadoParaBuscarCoincidencias.horaInicio,
                            horasTrabajadasPorDiaDelOtroEmpleado.horaInicio).toString()
                        horaInicioCoincidencia = (horaInicioCoincidencia).slice(0, horaInicioCoincidencia.length - 2) + ':' + (horaInicioCoincidencia).slice(horaInicioCoincidencia.length - 2, horaInicioCoincidencia.length)
                        let horaFinCoincidencia = Math.min(horasTrabajadasPorDiaDelEmpleadoParaBuscarCoincidencias.horaFin,
                            horasTrabajadasPorDiaDelOtroEmpleado.horaFin).toString()
                        horaFinCoincidencia = (horaFinCoincidencia).slice(0, horaFinCoincidencia.length - 2) + ':' + (horaFinCoincidencia).slice(horaFinCoincidencia.length - 2, horaFinCoincidencia.length)
                        diasYHorasQueCoincidenTrabajando.push(horasTrabajadasPorDiaDelEmpleadoParaBuscarCoincidencias.dia + horaInicioCoincidencia + '-' + horaFinCoincidencia)
                    }
                })
            })
            coincidencias.push(empleadoParaBuscarCoincidencias.nombre + '-' + otroEmpleado.nombre + '=' + diasYHorasQueCoincidenTrabajando)
        }
    }
    return coincidencias
}