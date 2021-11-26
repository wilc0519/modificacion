import { convertirCadenaComoEmpleados } from "../conversor-cadena-a-empleados";
import { Empleados } from "../empleados";

test('Toma una cadena y la transforma a un objeto empleados', () => {
    const cadenaConInformacionEmpleados = 'RENE-MIGUEL= MO 10:15-12:00, TU 10:00-12:00, SA 14:00-18:00, SU 20:00-21:00'
    
    
    const empleados: Empleados = convertirCadenaComoEmpleados(cadenaConInformacionEmpleados)

    
    expect(empleados.nombrePrimerEmpleado).toEqual("RENE")
    expect(empleados.nombreSegundoEmpleado).toEqual("MIGUEL")
    expect(empleados.diasHorasTrabajadas.length).toBe(4)
});