import path from "path";
import { promisify } from "util";
import * as fs from "fs";

const readFile = promisify(fs.readFile);

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const maxToRetrieve = searchParams.get("max") ?? 999;

  const fileName = "sessions.json";
  const jsonFile = path.resolve("./data", fileName);
  console.log("/api/session data...");
  try {
    const readFileData: Buffer = await readFile(jsonFile);
    const readFileDataString = readFileData.toString().replace(/[\n\r]/g, "");
    const {
      data: { sessions: sessions },
    } = JSON.parse(readFileDataString);
    //await delay(delayTime);
    if (!readFileData) {
      console.log("Error: Request failed with status code 404");
    } else {
      // @ts-ignore
      return Response.json(sessions.slice(0, maxToRetrieve));
    }
  } catch (e) {
    console.log("/api/session data error:", e);
  }
}
