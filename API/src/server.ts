import express, { Router } from "express";
import cors from "cors";
import { databaseSetup } from "./startup/dbconnection";
import dotenv from "dotenv";
import initRouter from "./router/intitRoutes";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

const port = process.env.PORT || 8050;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    allowedHeaders: [
      "Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Authorization, X-Requested-With",
      "Cache-Control",
    ],
  })
);

app.use("/api/user", initRouter);

databaseSetup()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log("Server listening on port " + port);
      });
    } catch (err) {
      console.log("Cannot connect to server on port " + port);
    }
  })
  .catch((err) => {
    console.log("Invalid database connection", err);
  });
