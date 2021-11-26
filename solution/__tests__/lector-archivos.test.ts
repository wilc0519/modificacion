const {leerArchivo}  = require('../lector-archivos')

test('Lee el contenido del archivo', () => {
    const nombreArchivo = './__tests__/hola.txt'
    const contenidoArchivo = leerArchivo(nombreArchivo)
    expect(contenidoArchivo).toEqual("Hola")
});