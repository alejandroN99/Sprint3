import { type } from "os";

const { rejects } = require("assert");
const { readdir, readFile, writeFile } = require("fs");
const { join, resolve } = require("path");

const inbox: string = join(__dirname, "inbox");
const outbox: string = join(__dirname, "outbox");

const reverseText = (str: string) => str.split("").reverse().join("");

const reader = async (dirPath: string): Promise<string[]> => {
  return new Promise((resolve, rejects) => {
    readdir(dirPath, (err: Error | null, files: Array<string>) => {
      if (err) rejects(new Error('Not valid path'));
      resolve(files);
    });
  });
};

type CallbackFunc = () => Promise<string[]>;

const readdirPath = async(reader: CallbackFunc): Promise<string[]>=> {

    try {
      const files = await reader();
      return files;
    } catch (error) {
      throw new Error("Error: Folder inaccessible");
    }
  
};

interface FileData {
  filename: String;
  content: string;
}
const readingFiles = (files: Array<String>): Promise<Array<FileData>> => {
  return new Promise((resolve, rejects) => {
    const results: Array<FileData> = [];
    files.forEach((file) => {
      readFile(
        join(inbox, file),
        "utf-8",
        (err: Error | null, data: string) => {
          if (err) rejects("Error: File error");
          results.push({ filename: file, content: data });
          if (results.length === files.length) resolve(results);
        }
      );
    });
  });
};

const writeFiles = (obj: FileData): Promise<string> => {
  return new Promise((resolve, rejects) => {
    writeFile(
      join(outbox, obj.filename),
      reverseText(obj.content),
      (err: Error | null) => {
        if (err) rejects("Error: File could not be saved!");
        resolve(`${obj.filename} was successfully saved in the outbox!`);
      }
    );
  });
};

async function simplifyCallback() {
  try {
    const readdirPath_Files = await readdirPath(() => reader(inbox));
    const contentFiles = await readingFiles(readdirPath_Files);
    const writeContent = await Promise.all(contentFiles.map(writeFiles));
    console.log(writeContent);
  } catch (err) {
    console.log(err);
  }
}

simplifyCallback();

export { readdirPath, readingFiles, writeFiles, simplifyCallback, reader };
