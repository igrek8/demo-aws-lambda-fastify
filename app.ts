import "./config";
import "reflect-metadata";

import fastify from "fastify";
import Container from "typedi";

import { createAPI } from "./api";

const { NODE_ENV } = process.env;
const LOG_LEVEL = Container.get("LOG_LEVEL");

export const app = createAPI(
  fastify({
    logger: NODE_ENV !== "test" && {
      level: LOG_LEVEL,
    },
  })
);
