import { Employee } from "../../models/employee "

export const findEmployeeMatches = (employees: Employee[]) => {
    const matches: string[] = []

    for (let employeeIndexToFindMatches  = 0; employeeIndexToFindMatches  < employees.length; employeeIndexToFindMatches ++) {
        const employeeToFindMatches = employees[employeeIndexToFindMatches ]
        for (let indexOfOtherEmployees = employeeIndexToFindMatches  + 1; indexOfOtherEmployees < employees.length; indexOfOtherEmployees++) {
            let numberOfDaysThatMatchWorking: number = 0
            const otherEmployee = employees[indexOfOtherEmployees]
            employeeToFindMatches.hourWorkedDay.forEach(hoursWorkedPerEmployeeDayToFindMatches => {
                otherEmployee.hourWorkedDay.forEach(hoursWorkedPerDayOfTheOtherEmployee => {
                    const isTheSameDay = hoursWorkedPerEmployeeDayToFindMatches.day === hoursWorkedPerDayOfTheOtherEmployee.day
                    const employeesAreWorkingTheSameHours = hoursWorkedPerEmployeeDayToFindMatches.startTime < hoursWorkedPerDayOfTheOtherEmployee.endTime &&
                    hoursWorkedPerDayOfTheOtherEmployee.startTime < hoursWorkedPerEmployeeDayToFindMatches.endTime
                    if (isTheSameDay && employeesAreWorkingTheSameHours) {
                        numberOfDaysThatMatchWorking++
                    }
                })
            })
            matches.push(employeeToFindMatches.name + '-' + otherEmployee.name + ': ' + numberOfDaysThatMatchWorking)
        }
    }
    return matches
}