import { readFile } from "../file-reader";

test('Read the contents of the file', () => {
    const fileName = './__tests__/hello.txt'
    const fileContents = readFile(fileName)
    expect(fileContents).toEqual("Hello")
});