import { MatchEmployees } from "../../models/matching-employees";
import { HoursWorkedPerDay } from "../../models/hours-worked-per-day";

export const convertStringAsMatchEmployees = (cadena:string) =>{
    const hoursDaysWorked: HoursWorkedPerDay[] = []
    const arrayNameDaysAndHoursWorked = cadena.split('=')
    const employeeNamesMatched = arrayNameDaysAndHoursWorked[0]
    const arrayEmployeeNames = employeeNamesMatched.split('-')
    const nameFirstEmployee = arrayEmployeeNames[0]
    const nameSecondEmployee = arrayEmployeeNames[1]
    const arrayDaysAndHours = arrayNameDaysAndHoursWorked[1].split(',')
    arrayDaysAndHours.forEach(dayHour => {
        const day = dayHour.substring(0,2)
        const startEndTime = dayHour.substring(2, dayHour.length).split(':').join('').split('-') 
        const startTime = Number(startEndTime[0])
        const endTime = Number(startEndTime[1])
        const hoursPerDay: HoursWorkedPerDay = {day:day, startTime:startTime, endTime:endTime}
        hoursDaysWorked.push(hoursPerDay)

    })
    const matchEmployees:MatchEmployees = {nameFirstEmployee:nameFirstEmployee, nameSecondEmployee:nameSecondEmployee, hourWorkedDay:hoursDaysWorked}
    return matchEmployees
}