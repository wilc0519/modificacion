import *as fs from 'fs'
import path from 'path'
export const leerArchivo = (nombreArchivo:string) => {
    const textoDelArchivoLeido =  fs.readFileSync(path.join(__dirname, nombreArchivo)).toString().replace(/ /g, "")
    return textoDelArchivoLeido
}