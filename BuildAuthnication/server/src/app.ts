import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";
import { AppDataSource } from "./data-source";
import router from "./routs/routers";
import cors from "cors";
import { VerifyToken } from "./middlewares/VerifyToken";

const app = express();
const PORT = 5099;
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.use(VerifyToken);

AppDataSource.initialize()
  .then(() => {
    console.log("Database Connected Successfull");
    app.listen(PORT, (): void => {
      console.log(`Server is running on port: http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log("Error Connecting database", err));
