import express from "express";
import cors from "cors";
import pino from "pino-http";


export class App {
  constructor(articleControllerInstance) {
    this.app = express();
    this.articleController = articleControllerInstance;
  }

  useMiddleware() {
    this.app.use(pino());
    this.app.use(cors());
  }

  useRoutes() {
    this.app.use("/article", this.articleController.router);
  }

  init() {
    this.useMiddleware();
    this.useRoutes();
    return this.app;
  }
}
