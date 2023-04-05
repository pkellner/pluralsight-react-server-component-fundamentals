import path from "path";
import {promisify} from "util";
import * as fs from "fs";

const delayTime = 2000; // milliseconds added to all REST calls
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const readFile = promisify(fs.readFile);

export async function GET() {
  const maxToRetrieve = 999;
  const fileName = "sessions.json";
  const jsonFile = path.resolve("./data", fileName);
  try {
    const readFileData: Buffer = await readFile(jsonFile);
    const readFileDataString = readFileData.toString().replace(/[\n\r]/g, "");
    const {
      data: { sessions: sessions },
    } = JSON.parse(readFileDataString);
    //console.log(`api:sessions: delay time: ${delayTime} ms`);
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
