import { app } from "./app";

const awsLambdaFastify = require("aws-lambda-fastify");
export const handler = awsLambdaFastify(app);
