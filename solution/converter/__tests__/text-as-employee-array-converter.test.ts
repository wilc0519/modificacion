import { convertTextAsEmployeeArray } from "../text-as-employee-array-converter";

test('From the content of the file, it obtains an array with the employees information.', () => {
    const fileContents = `RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00\nASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00\nANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00`
    const arrayEmployeesInformation = convertTextAsEmployeeArray(fileContents)
    expect(arrayEmployeesInformation).toEqual([
        'RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00',
        'ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00',
        'ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00'
    ])
});