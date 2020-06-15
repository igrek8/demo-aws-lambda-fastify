import "./config";
import "reflect-metadata";

import fastify from "fastify";

import { createAPI } from "./api";

const { NODE_ENV } = process.env;
export const app = createAPI(fastify({ logger: NODE_ENV !== "test" }));
