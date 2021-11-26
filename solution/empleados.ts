import { HorasTrabajasPorDia } from "./horas-trabajadas-por-dia"
export class Empleados {
    nombrePrimerEmpleado: string
    nombreSegundoEmpleado: string
    diasHorasTrabajadas: HorasTrabajasPorDia[]
    constructor(nombrePrimerEmpleado:string, nombreSegundoEmpleado:string, diasHorasTrabajadas:HorasTrabajasPorDia[]){
        this.nombrePrimerEmpleado = nombrePrimerEmpleado
        this.nombreSegundoEmpleado = nombreSegundoEmpleado
        this.diasHorasTrabajadas = diasHorasTrabajadas 
    }

}