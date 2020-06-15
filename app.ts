import "reflect-metadata";

import dotenv from "dotenv";
import fastify from "fastify";

import { createAPI } from "./api";

dotenv.config({ path: process.env.ENV_FILE ?? ".env" });

export const app = fastify({ logger: process.env.NODE_ENV !== "test" });

createAPI(app);
