import express, { json } from "express";
import cors from "cors";
import routeAuth from "./routes/RouteAuth.js";
import dotenv from "dotenv";
import routeUrls from "./routes/RouteUrls.js";

const app = express();

dotenv.config();

app.use(json());
app.use(cors());
app.use(routeAuth);
app.use(routeUrls);

app.get("/", (req, res) => {
  res.send("funfnado");
});

const port = process.env.PORT;
app.listen(port, () =>
  console.log(`Servidor em pé na porta${process.env.PORT}`)
);
