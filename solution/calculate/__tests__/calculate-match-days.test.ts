import { findEmployeeMatchDays } from "../calculate-match-days"
import { Employee } from "../../../models/employee "
import { HoursWorkedPerDay } from "../../../models/hours-worked-per-day"

const reneMonday:HoursWorkedPerDay ={day:"MO", startTime:1000, endTime:1200}
const reneTuesday:HoursWorkedPerDay = {day:"TU", startTime:1000, endTime:1200}
const reneThursday:HoursWorkedPerDay = {day:"TH",startTime:100, endTime:300}
const reneSaturday:HoursWorkedPerDay = {day:"SA",startTime:1400, endTime:1800}
const reneSunday:HoursWorkedPerDay = {day:"SU",startTime:2000, endTime:2100}

const rene:Employee = {name:"RENE", hourWorkedDay: [reneMonday, reneTuesday, reneThursday, reneSaturday, reneSunday]};

const astridMonday:HoursWorkedPerDay = {day:"MO", startTime:1000, endTime:1200}
const astridThursday:HoursWorkedPerDay = {day:"TH", startTime:1200, endTime:1400}
const astridSunday:HoursWorkedPerDay = {day:"SU", startTime:2000, endTime:2100}

const astrid:Employee = {name:"ASTRID", hourWorkedDay:[astridMonday, astridThursday, astridSunday]}

const andresMonday:HoursWorkedPerDay = {day:"MO", startTime:1000,endTime:1200}
const andresThursday:HoursWorkedPerDay = {day:"TH", startTime:1200, endTime:1400}
const andresSunday:HoursWorkedPerDay = {day:"SU", startTime:2000, endTime:2100}

const andres:Employee = {name:'ANDRES', hourWorkedDay:[andresMonday, andresThursday, andresSunday]}

test('Rene y Astrid matched the days  MO, TH y SU', () => {
    const employees = [rene, astrid]
    const result = findEmployeeMatchDays(employees)
    expect(result).toEqual(['RENE-ASTRID: MO, TH, SU'])
})

test('Rene y Andres matched the days  MO, TH, SU', () => {
    const employees = [rene, andres]
    const result = findEmployeeMatchDays(employees)
    expect(result).toEqual(['RENE-ANDRES: MO, TH, SU'])
})

test('Astrid y Andres matched the days MO, TH, SU ', () => {
    const employees = [astrid, andres]
    const result = findEmployeeMatchDays(employees)
    expect(result).toEqual(['ASTRID-ANDRES: MO, TH, SU'])
})

