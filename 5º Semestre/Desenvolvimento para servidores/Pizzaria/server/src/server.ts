import express,  {Request, Response, NextFunction, Router } from 'express';

const app = express();

app.listen(3333, () => console.log("Server is running!"));