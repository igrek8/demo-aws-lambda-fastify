import { Logger as ILogger } from "fastify";
import { Service } from "typedi";

import { app } from "..";

/**
 * Application logger
 */
@Service()
export class Logger implements ILogger {
  fatal(msg: string, ...args: any[]): void;
  fatal(obj: {}, msg?: string | undefined, ...args: any[]): void;
  fatal(obj: any, msg?: any, ...args: any[]) {
    return app.log.fatal(obj, msg, ...args);
  }

  error(msg: string, ...args: any[]): void;
  error(obj: {}, msg?: string | undefined, ...args: any[]): void;
  error(obj: any, msg?: any, ...args: any[]) {
    return app.log.error(obj, msg, ...args);
  }

  warn(msg: string, ...args: any[]): void;
  warn(obj: {}, msg?: string | undefined, ...args: any[]): void;
  warn(obj: any, msg?: any, ...args: any[]) {
    return app.log.warn(obj, msg, ...args);
  }

  info(msg: string, ...args: any[]): void;
  info(obj: {}, msg?: string | undefined, ...args: any[]): void;
  info(obj: any, msg?: any, ...args: any[]) {
    return app.log.info(obj, msg, ...args);
  }

  debug(msg: string, ...args: any[]): void;
  debug(obj: {}, msg?: string | undefined, ...args: any[]): void;
  debug(obj: any, msg?: any, ...args: any[]) {
    return app.log.debug(obj, msg, ...args);
  }

  trace(msg: string, ...args: any[]): void;
  trace(obj: {}, msg?: string | undefined, ...args: any[]): void;
  trace(obj: any, msg?: any, ...args: any[]) {
    return app.log.trace(obj, msg, ...args);
  }
}
