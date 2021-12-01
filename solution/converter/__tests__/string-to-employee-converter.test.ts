import { Employee } from "../../../models/employee ";
//import { HorasTrabajasPorDia } from "../../../models/hours-worked-per-day";
import { convertStringAsEmployee } from "../../converter/string-to-employee-converter";

test('Takes a string and transforms it to an employee object', () => {
    const StringWithEmployeeInformation = 'RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00'
    
    
    const employee: Employee = convertStringAsEmployee (StringWithEmployeeInformation)

    
    expect(employee.name).toEqual("RENE")
    expect(employee.hourWorkedDay.length).toBe(5)
});