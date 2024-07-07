import { Logger } from "tslog";
import { ILogger } from "./logger.interface";
import { injectable } from "inversify";
import "reflect-metadata"

@injectable()
export class LoggerService implements ILogger {
  private logger: Logger<ILogger>;

  constructor() {
    this.logger = new Logger({
      name: "MyLogger",
      minLevel: 1,
      prettyLogTemplate: "{{logLevelName}} ",
    });
  }

  log(...args: unknown[]) {
    this.logger.info(...args);
  }
  error(...args: unknown[]) {
    this.logger.error(...args);
  }
  warn(...args: unknown[]) {
    this.logger.warn(...args);
  }
}
