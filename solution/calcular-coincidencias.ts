import { Empleado } from "./empleado"

export const buscarCoindidenciasDeEmpleados = (empleados: Empleado[]) => {
    const coincidencias: string[] = []
    
    for (let indiceDelEmpleadoParaBuscarCoincidencias = 0; indiceDelEmpleadoParaBuscarCoincidencias < empleados.length; indiceDelEmpleadoParaBuscarCoincidencias++) {
        const empleadoParaBuscarCoincidencias = empleados[indiceDelEmpleadoParaBuscarCoincidencias]
        for (let indiceDelRestoDeEmpleados = indiceDelEmpleadoParaBuscarCoincidencias + 1; indiceDelRestoDeEmpleados < empleados.length; indiceDelRestoDeEmpleados++) {
            let numeroDeDiasQueCoincidenTrabajando: number = 0
            const otroEmpleado = empleados[indiceDelRestoDeEmpleados]
            empleadoParaBuscarCoincidencias.diasHorasTrabajadas.forEach(horasTrabajadasPorDiaDelEmpleadoParaBuscarCoincidencias => {
                otroEmpleado.diasHorasTrabajadas.forEach(horasTrabajadasPorDiaDelOtroEmpleado => {
                    if (horasTrabajadasPorDiaDelEmpleadoParaBuscarCoincidencias.dia === horasTrabajadasPorDiaDelOtroEmpleado.dia &&
                        horasTrabajadasPorDiaDelEmpleadoParaBuscarCoincidencias.horaInicio < horasTrabajadasPorDiaDelOtroEmpleado.horaFin &&
                        horasTrabajadasPorDiaDelOtroEmpleado.horaInicio < horasTrabajadasPorDiaDelEmpleadoParaBuscarCoincidencias.horaFin) {
                        numeroDeDiasQueCoincidenTrabajando ++
                    }
                })

            })
            coincidencias.push(empleadoParaBuscarCoincidencias.nombre + '-' + otroEmpleado.nombre + ': ' + numeroDeDiasQueCoincidenTrabajando)
        }
    }
    return coincidencias
}