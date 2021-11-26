import { Empleado } from "./empleado"

export const buscarDiasDeCoincidenciaDeEmpleados = (empleados: Empleado[]) => {
    const coincidencias: string[] = []
    for (let indiceDelEmpleadoParaBuscarCoincidencias = 0; indiceDelEmpleadoParaBuscarCoincidencias < empleados.length; indiceDelEmpleadoParaBuscarCoincidencias++) {
        const empleadoParaBuscarCoincidencias = empleados[indiceDelEmpleadoParaBuscarCoincidencias]
        for (let indiceDelRestoDeEmpleados = indiceDelEmpleadoParaBuscarCoincidencias + 1; indiceDelRestoDeEmpleados < empleados.length; indiceDelRestoDeEmpleados++) {
            let diasDeCoincidencia: string[] = []
            const otroEmpleado = empleados[indiceDelRestoDeEmpleados]
            empleadoParaBuscarCoincidencias.diasHorasTrabajadas.forEach(horasTrabajadasPorDiaDelEmpleadoParaBuscarCoincidencias => {
                otroEmpleado.diasHorasTrabajadas.forEach(horasTrabajadasPorDiaDelOtroEmpleado => {
                    if (horasTrabajadasPorDiaDelEmpleadoParaBuscarCoincidencias.dia === horasTrabajadasPorDiaDelOtroEmpleado.dia) {
                        diasDeCoincidencia.push(' ' + horasTrabajadasPorDiaDelEmpleadoParaBuscarCoincidencias.dia)
                    }
                })
            })
            coincidencias.push(empleadoParaBuscarCoincidencias.nombre + '-' + otroEmpleado.nombre + ':' + diasDeCoincidencia)
        }
    }
    return coincidencias
}