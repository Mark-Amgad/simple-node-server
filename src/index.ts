console.log("Mark is here");
import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Hello from nodejs server" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
