import { Employee } from "../../models/employee "
import { HoursWorkedPerDay } from "../../models/hours-worked-per-day"

export const convertStringAsEmployee = (cadena: string):Employee=>{
    const hoursDaysWorked: HoursWorkedPerDay[] = []
    const arrayNameHoursDaysWorked  = cadena.split('=')
    const employeeName = arrayNameHoursDaysWorked [0]
    const arrayDaysAndHours  = arrayNameHoursDaysWorked [1].split(',')
    arrayDaysAndHours.forEach(dayHour => {
        const day = dayHour.substring(0,2)
        const arrayStartEndTime  = dayHour.substring(2, dayHour.length).split(':').join('').split('-') 
        const startTime = Number(arrayStartEndTime [0])
        const endTime = Number(arrayStartEndTime [1])
        const hoursPerDay :HoursWorkedPerDay = {day, startTime, endTime}
        hoursDaysWorked.push(hoursPerDay )

    })
    const employee:Employee = {name:employeeName, hourWorkedDay:hoursDaysWorked}
    return employee
}
