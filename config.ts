import dotenv from "dotenv";
import path from "path";
import Container from "typedi";

/**
 * Autoload env variables into process.env
 */
dotenv.config({ path: process.env.ENV_FILE ?? ".env" });

Container.set("LRU_SIZE", Number.parseInt(process.env.LRU_SIZE!, 10));
Container.set("LRU_MAX_AGE", Number.parseInt(process.env.LRU_MAX_AGE!, 10));
Container.set("OMDB_BASE_URL", process.env.OMDB_BASE_URL!);
Container.set("OMDB_ACCESS_TOKEN", process.env.OMDB_ACCESS_TOKEN!);
Container.set("LOG_LEVEL", process.env.LOG_LEVEL);
Container.set("PORT", Number.parseInt(process.env.PORT!, 10));
Container.set("HOST", process.env.HOST);
Container.set("MOVIES_DIR", path.join(process.cwd(), process.env.MOVIES_DIR!));
