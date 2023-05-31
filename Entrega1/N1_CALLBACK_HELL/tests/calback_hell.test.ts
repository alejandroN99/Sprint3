
import { readdirPath, reader, readingFiles, writeFiles } from "../src/callback_hell";

test("Given a function that return an array of files, when readdirPath is called with this function, then should call to the callback function and return the array of files", async () => {
  const expectedFiles = ["file1", "file2"];
  const myMockReader = jest.fn(() => expectedFiles);

  const files = await readdirPath(
    () => new Promise((resolve) => resolve(myMockReader()))
  );

  expect(myMockReader).toHaveBeenCalled();
  expect(files).toBe(expectedFiles);
});

const { join } = require("path");

const inbox: string = join(__dirname, "inbox");

test("Given a dirPath with a file, when reader is called then should return an array with this file", async () => {
  const expectedFiles = ["archivo.txt"];

  const files = await reader(inbox);

  expect(files).toEqual(expectedFiles);
});

test("Given a not valid path, when reader is called, then should throw an error with message Not valid path", async () => {
  const expectedMessage = "Not valid path";

  try {
    await reader("not good path");

  } catch (error: any) {

    expect(error.message).toBe(expectedMessage);
  }
});


describe('readingFiles', () => {
  test('should return an array of file data', async () => {
    const files = ['archivo.txt'];
    const result = await readingFiles(files);
    expect(result).toEqual([
      { filename: 'archivo.txt', content: 'Hola mundo' }
      
    ]);
  });

  test('should throw an error if there is a file error', async () => {
    const files = ['file1.txt', 'file2.txt'];
    try {
      await readingFiles(files);
    } catch (error) {
      expect(error).toBe('Error: File error');
    }
  });
});




describe('writeFiles', () => {
    test('should return a message : archivo.txt was successfully saved in the outbox!', async () => {
      const object = { filename: 'archivo.txt', content: 'Hola mundo' };
      const write = await writeFiles(object);

      expect(write).toEqual(`archivo.txt was successfully saved in the outbox!`);

    })

    test('should trown an error if file could not be saved', async () => {
      const object = { filename: 'archivo.txt', content: 'Hola mundo' };
      
      try {
        const write = await writeFiles(object);
        
      } catch (error) {
        expect(error).toBe('Error: File could not be saved!')
      }
    })
}); 