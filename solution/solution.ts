import { findEmployeeMatches } from "./calculate/calculate-match"
import { convertStringAsEmployee } from "./converter/string-to-employee-converter" 
import { convertTextAsEmployeeArray } from "./converter/text-as-employee-array-converter"
import { findEmployeeMatchDays } from "./calculate/calculate-match-days"
import { findEmployeeMatchDaysAndTimes } from "./calculate/calculate-match-days-and-hours"
import { Employee } from "../models/employee "
import { readFile } from "./file-reader"
import { convertStringAsMatchEmployees } from "./converter/string-to-match-employees-converter"
import { MatchEmployees } from "../models/matching-employees"
import { HoursWorkedPerDay } from "../models/hours-worked-per-day"

export const findMatches = (fileName: string) => {
    const  fileContents  = readFile(fileName)
    const textAsInformationArray: string[] = convertTextAsEmployeeArray( fileContents )
    const employees: Employee[] = []
    textAsInformationArray.forEach((cadena: string) => {
        const employee: Employee = convertStringAsEmployee(cadena)
        employees.push(employee)
    })
    const matchTable = findEmployeeMatches(employees)
    console.log(matchTable)
    const tableOfMatchDays = findEmployeeMatchDays(employees)
    console.log(tableOfMatchDays)
    const tableOfDaysAndTimesOfMatches = findEmployeeMatchDaysAndTimes(employees)
    console.log(tableOfDaysAndTimesOfMatches)
    const matchEmployees: MatchEmployees[] = []
    tableOfDaysAndTimesOfMatches.forEach((cadena:string) => {
        const matchEmployee:MatchEmployees = convertStringAsMatchEmployees(cadena)
        matchEmployees.push(matchEmployee)
    }) 
    console.log(matchEmployees)
}

findMatches('../solution/__tests__/empleado-dias-horas-trabajadas.txt')

