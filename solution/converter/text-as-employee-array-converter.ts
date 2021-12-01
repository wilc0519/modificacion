export const convertTextAsEmployeeArray  = (fileContents: string) => {
    const textAsArrayOfEmployees = fileContents.split('\n')
    return textAsArrayOfEmployees
}