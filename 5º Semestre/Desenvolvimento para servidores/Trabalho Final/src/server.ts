//* Libraries imports
import express from "express";
import type { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import path from "path";

//* Local imports
import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

//* Middleware to handle errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

app.listen(3333, () => {
  console.log("Server started on port 3333!");
});
