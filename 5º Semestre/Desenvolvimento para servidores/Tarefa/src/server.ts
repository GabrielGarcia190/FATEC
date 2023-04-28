import express, { Request, Response, NextFunction, Router } from "express";
import { router } from "./routes";
import 'express-async-errors';
import cors from 'cors';

const app = express();
app.use(router);

app.listen(3333, () => console.log("Server is running!"));