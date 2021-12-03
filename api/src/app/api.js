import express from "express";
import cors from "cors";
import pino from "pino-http";


export class App {
  constructor(
    dbInstanse,
    userControllerInstance,
    projectControllerInstance,
    courseControllerInstance,
    articleControllerInstance,
    taskControllerInstance,
    testControllerInstance,
  ) {
    this.app = express();
    this.app.db = dbInstanse;
    this.userController = userControllerInstance;
    this.projectController = projectControllerInstance;
    this.courseController = courseControllerInstance;
    this.articleController = articleControllerInstance;
    this.taskController = taskControllerInstance;
    this.testController = testControllerInstance;
  }

  useMiddleware() {
    this.app.use(pino());
    this.app.use(cors());
  }

  useRoutes() {
    this.app.use("/user", this.userController.router);
    this.app.use("/project", this.projectController.router);
    this.app.use("/course", this.courseController.router);
    this.app.use("/article", this.articleController.router);
    this.app.use("/task", this.taskController.router);
    this.app.use("/test", this.testController.router);
  }

  init() {
    this.useMiddleware();
    this.useRoutes();
    try {
      await this.app.db.authenticate();
      this.app.logger.info('Connection has been established successfully.');
    } catch (error) {
      this.app.logger.error('Unable to connect to the database:', error);
    }
    return this.app;
  }
}
