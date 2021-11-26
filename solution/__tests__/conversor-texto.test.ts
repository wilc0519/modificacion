import { convertirTextoComoArregloEmpleados } from "../conversor-texto";

test('A partir del contenido del archivo, obtiene un arreglo con la informacion de los empleados', () => {
    const contenidoArchivo = `RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00\nASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00\nANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00`
    const arregloInformacionEmpleados = convertirTextoComoArregloEmpleados(contenidoArchivo)
    expect(arregloInformacionEmpleados).toEqual([
        'RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00',
        'ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00',
        'ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00'
    ])
});