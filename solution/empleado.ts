import { HorasTrabajasPorDia } from "./horas-trabajadas-por-dia"

export class Empleado {
    nombre:string
    diasHorasTrabajadas: HorasTrabajasPorDia[]
    constructor(nombre:string, diasHorasTrabajadas:HorasTrabajasPorDia[]){
        this.nombre = nombre
        this.diasHorasTrabajadas= diasHorasTrabajadas
    }
}
