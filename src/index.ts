console.log("Mark is here");
import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import os from "os";

dotenv.config();

// comment 2
// comment 1
// comment 3
// comment 4
// comment 5
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  const hostAddress = os.hostname();
  res.send({
    message: `Hello from nodejs server version 2, that is running on ${hostAddress}`,
  });
});

app.get("/mark", (req: Request, res: Response) => {
  res.send("mark is here");
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
