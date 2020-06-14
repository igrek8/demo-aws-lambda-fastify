import "dotenv";
import fastify from "fastify";

export const app = fastify({ logger: process.env.NODE_ENV !== "test" });
