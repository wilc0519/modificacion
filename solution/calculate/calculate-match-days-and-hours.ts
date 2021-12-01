import { Employee } from "../../models/employee ";

export const findEmployeeMatchDaysAndTimes = (employees: Employee[]) => {
    const matches: string[] = []

    for (let employeeIndexToFindMatches = 0; employeeIndexToFindMatches < employees.length; employeeIndexToFindMatches++) {
        const employeeToFindMatches = employees[employeeIndexToFindMatches]
        for (let indexOfOtherEmployees = employeeIndexToFindMatches + 1; indexOfOtherEmployees < employees.length; indexOfOtherEmployees++) {
            let daysAndHoursThatMatchWorking: string[] = []
            const otherEmployee = employees[indexOfOtherEmployees]
            employeeToFindMatches.hourWorkedDay.forEach(hoursWorkedPerEmployeeDayToFindMatches => {
                otherEmployee.hourWorkedDay.forEach(hoursWorkedPerDayOfTheOtherEmployee => {
                    const isTheSameDay = hoursWorkedPerEmployeeDayToFindMatches.day === hoursWorkedPerDayOfTheOtherEmployee.day
                    const employeesAreWorkingTheSameHours = hoursWorkedPerEmployeeDayToFindMatches.startTime < hoursWorkedPerDayOfTheOtherEmployee.endTime &&
                    hoursWorkedPerDayOfTheOtherEmployee.startTime < hoursWorkedPerEmployeeDayToFindMatches.endTime
                    if (isTheSameDay && employeesAreWorkingTheSameHours) {
                        let matchStartTime = Math.max(hoursWorkedPerEmployeeDayToFindMatches.startTime,
                            hoursWorkedPerDayOfTheOtherEmployee.startTime).toString()
                        matchStartTime = (matchStartTime).slice(0, matchStartTime.length - 2) + ':' + (matchStartTime).slice(matchStartTime.length - 2, matchStartTime.length)
                        let matchEndTime = Math.min(hoursWorkedPerEmployeeDayToFindMatches.endTime,
                            hoursWorkedPerDayOfTheOtherEmployee.endTime).toString()
                        matchEndTime = (matchEndTime).slice(0, matchEndTime.length - 2) + ':' + (matchEndTime).slice(matchEndTime.length - 2, matchEndTime.length)
                        daysAndHoursThatMatchWorking.push(hoursWorkedPerEmployeeDayToFindMatches.day + matchStartTime + '-' + matchEndTime)
                    }
                })
            })
            matches.push(employeeToFindMatches.name + '-' + otherEmployee.name + '=' + daysAndHoursThatMatchWorking)
        }
    }
    return matches
}