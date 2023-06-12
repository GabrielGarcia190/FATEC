//* Libraries imports
import z from "zod";
import dotenv from "dotenv";

//* Schemas
const JWT_SECRET_SCHEMA = z.string().nonempty();
const DATABASE_URL_SCHEMA = z.string().nonempty();

//* Variables
const { JWT_SECRET, DATABASE_URL } = dotenv.config().parsed || {};

//* Validation
if (!JWT_SECRET) throw new Error("Missing JWT_SECRET env variable");
if (!DATABASE_URL) throw new Error("Missing DATABASE_URL env variable");

const env = {
  JWT_SECRET: JWT_SECRET_SCHEMA.parse(JWT_SECRET),
  DATABASE_URL: DATABASE_URL_SCHEMA.parse(DATABASE_URL),
};

export default env;
