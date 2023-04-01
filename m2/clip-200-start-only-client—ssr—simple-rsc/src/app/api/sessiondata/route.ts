import path from "path";
import {promisify} from "util";
import * as fs from "fs";

const delayTime = 2000; // milliseconds added to all REST calls

const readFile = promisify(fs.readFile);
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET() {
  const maxToRetrieve = 4;
  const fileName = "sessions.json";
  const jsonFile = path.resolve("./data", fileName);
  try {
    const readFileData: Buffer = await readFile(jsonFile);
    const readFileDataString = readFileData.toString().replace(/[\n\r]/g, "");
    const {
      data: { sessions: sessions },
    } = JSON.parse(readFileDataString);
    await delay(delayTime);
    if (!readFileData) {
      console.log("Error: Request failed with status code 404");
    } else {
      // @ts-ignore
      return Response.json(sessions.slice(0, maxToRetrieve));
    }
  } catch (e) {
    console.log("/api/todo error:", e);
  }
}
