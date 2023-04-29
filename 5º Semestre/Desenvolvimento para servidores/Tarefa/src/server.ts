import express, { Request, Response, NextFunction, Router } from "express";
import { router } from "./routes";
import 'express-async-errors';

const app = express();
app.use(express.json());
app.use(router);


app.listen(3333, () => console.log("Server is running!"));