import path from "path";
import { promisify } from "util";
import * as fs from "fs";
import { YouTubeData } from "@/lib/ts-interfaces";

const readFile = promisify(fs.readFile);

export async function GET(request: any, { params }: any) {
  const youTubeId = params.id;

  const fileName = "youtubedata.json";
  const jsonFile = path.resolve("./data", fileName);
  try {
    const readFileData: Buffer = await readFile(jsonFile);
    const readFileDataString = readFileData.toString().replace(/[\n\r]/g, "");

    const {
      data: { youTubeData: youTubeData },
    } = JSON.parse(readFileDataString);
    if (!readFileData) {
      console.log("Error: Request failed with status code 404");
    } else {
      const sessionVideo = youTubeData?.filter((rec: YouTubeData) => {
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
