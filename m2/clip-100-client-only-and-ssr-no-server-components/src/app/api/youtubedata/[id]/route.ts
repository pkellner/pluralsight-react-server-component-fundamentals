import path from "path";
import {promisify} from "util";
import * as fs from "fs";
import {IYouTubeData} from "@/lib/ts-interfaces";

const readFile = promisify(fs.readFile);
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET(request: any, {params}: any) {
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const youTubeId = params.id;

  const fileName = "youtubedata.json";
  const jsonFile = path.resolve("./data", fileName);
  try {
    const readFileData: Buffer = await readFile(jsonFile);
    const readFileDataString = readFileData.toString().replace(/[\n\r]/g, "");

    const {
      data: { youTubeData: youTubeData },
    } = JSON.parse(readFileDataString);
    await delay(getRandomInt(500, 1000));
    if (!readFileData) {
      console.log("Error: Request failed with status code 404");
    } else {
      console.log(`GET /api/todo status: 200`);

      const sessionVideo = youTubeData?.filter((rec: IYouTubeData) => {
        return rec.id === youTubeId;
      });

      if (sessionVideo && sessionVideo?.length > 0) {
        // @ts-ignore
        return Response.json(sessionVideo[0]);
      } else {
        console.log("error not found"); // be nice to know how to do 404, below doesn't work
        //return response.status(404).send("not found");
      }
    }
  } catch (e) {
    console.log("/api/todo error:", e);
  }
}
