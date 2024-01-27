import express, { Request, Response } from "express";
import { createClient } from "redis";
import process from "process";
import cors from "cors";

const app = express();
const port = 4000;

app.use(cors());

const redisHost = "redis-server"; // the name of the service in the docker-compose file.
const redisPort = 6379;
const redisClient = createClient({
  url: `redis://@${redisHost}:${redisPort}`,
});
redisClient.on("error", (err) => console.log("Redis Client Error", err));

app.get("/", async (req: Request, res: Response) => {
  const numberOfViews = parseInt((await redisClient.get("views")) || "0");
  redisClient.set("views", numberOfViews + 1);
  res.send(`Hello user! , views : ${numberOfViews}`);
});

app.get("/crash", async (req: Request, res: Response) => {
  // this endpoint will crash the server if it's called
  process.exit(0);
});

app.listen(port, async () => {
  console.log(`server is runing on PORT ${port}`);
  await redisClient.connect();
});
