import {findEmployeeMatches } from "../calculate-match";
import { Employee } from "../../../models/employee ";
import { HoursWorkedPerDay } from "../../../models/hours-worked-per-day";

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

test('Astrid and Rene worked 2 times on the same day and time.', () => {
    const employees = [rene, astrid]
    const result = findEmployeeMatches(employees)
    expect(result).toEqual(["RENE-ASTRID: 2"])
});

test('Rene y Andres worked 2 times on the same day and time.', () => {
    const employees = [rene, andres]
    const result = findEmployeeMatches(employees)
    expect(result).toEqual(["RENE-ANDRES: 2"])
});

test('Astrid y Andres worked 2 times on the same day and time.', () => {
    const employees = [astrid, andres ]
    const result =findEmployeeMatches(employees)
    expect(result).toEqual(["ASTRID-ANDRES: 3"])
});

test('Retorna las coincidencias en el horario de trabajo Rene, andres y Astrid', () => {
    const employees = [rene, astrid, andres ]
    const result = findEmployeeMatches(employees)
    expect(result).toEqual(['RENE-ASTRID: 2', 'RENE-ANDRES: 2', 'ASTRID-ANDRES: 3'])
});