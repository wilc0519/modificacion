import { Employee } from "../../models/employee "

export const findEmployeeMatchDays = (employees: Employee[]) => {
    const matches: string[] = []
    for (let employeeIndexToFindMatches = 0; employeeIndexToFindMatches < employees.length; employeeIndexToFindMatches++) {
        const employeeToFindMatches = employees[employeeIndexToFindMatches]
        for (let indexOfOtherEmployees = employeeIndexToFindMatches + 1; indexOfOtherEmployees < employees.length; indexOfOtherEmployees++) {
            let matchDays: string[] = []
            const otherEmployee = employees[indexOfOtherEmployees]
            employeeToFindMatches.hourWorkedDay.forEach(hoursWorkedPerEmployeeDayToFindMatches => {
                otherEmployee.hourWorkedDay.forEach(hoursWorkedPerDayOfTheOtherEmployee => {
                    const isTheSameDay = hoursWorkedPerEmployeeDayToFindMatches.day === hoursWorkedPerDayOfTheOtherEmployee.day
                    if (isTheSameDay) {
                        matchDays.push(' ' + hoursWorkedPerEmployeeDayToFindMatches.day)
                    }
                })
            })
            matches.push(employeeToFindMatches.name + '-' + otherEmployee.name + ':' + matchDays)
        }
    }
    return matches
}