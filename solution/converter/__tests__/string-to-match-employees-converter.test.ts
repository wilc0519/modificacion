import { convertStringAsMatchEmployees } from "../string-to-match-employees-converter";
import { MatchEmployees } from "../../../models/matching-employees";

test('Takes a string and transforms it to an object MatchEmployees', () => {
    const stringWithEmployeeInformation = 'RENE-MIGUEL= MO 10:15-12:00, TU 10:00-12:00, SA 14:00-18:00, SU 20:00-21:00'
    
    
    const matchEmployees: MatchEmployees = convertStringAsMatchEmployees(stringWithEmployeeInformation)

    
    expect(matchEmployees.nameFirstEmployee).toEqual("RENE")
    expect(matchEmployees.nameSecondEmployee).toEqual("MIGUEL")
    expect(matchEmployees.hourWorkedDay.length).toBe(4)
});