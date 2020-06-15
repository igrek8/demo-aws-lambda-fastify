import dotenv from "dotenv";

/**
 * Autoload env variables into process.env
 */
dotenv.config({ path: process.env.ENV_FILE ?? ".env" });
