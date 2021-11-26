import { Empleado } from "../empleado";
import { HorasTrabajasPorDia } from "../horas-trabajadas-por-dia";
import { convertirCadenaComoEmpleado } from "../conversor-cadena-a-empleado";

test('Toma una cadena y la transforma a un objeto empleado', () => {
    const cadenaConInformacionEmpleado = 'RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00'
    
    
    const empleado: Empleado = convertirCadenaComoEmpleado(cadenaConInformacionEmpleado)

    
    expect(empleado.nombre).toEqual("RENE")
    expect(empleado.diasHorasTrabajadas.length).toBe(5)
});