import *as fs from 'fs'
import path from 'path'
export const readFile = (fileName:string) => {
    const textOfTheFileRead =  fs.readFileSync(path.join(__dirname, fileName)).toString().replace(/ /g, "")
    return textOfTheFileRead
}