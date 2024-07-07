import { App } from "./app";
import { Container, ContainerModule, interfaces } from "inversify";
import { TYPES } from "./types";
import { LoggerService } from "./logger/logger.service";
import { ILogger } from "./logger/logger.interface";
import { ExeptionFilter } from "./errors/exeption.filter";
import { UserController } from "./users/users.controller";
import { IExeptionFilter } from "./errors/exeption.filter.interface";
import { IUserController } from "./users/users.controller.interface";

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
  bind<ILogger>(TYPES.ILogger).to(LoggerService);
  bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
  bind<IUserController>(TYPES.IUserController).to(UserController);
  bind<App>(TYPES.Application).to(App);
});

function bootstrap() {
  const appContainer = new Container();
  appContainer.load(appBindings);
  const app = appContainer.get<App>(TYPES.Application);
  app.init();

  return { app, appContainer };
}

export const { app, appContainer } = bootstrap();
