import "dotenv";
import "reflect-metadata";

import fastify from "fastify";

export const app = fastify({ logger: process.env.NODE_ENV !== "test" });
