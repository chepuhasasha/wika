import { App } from "./app/api.js";
import { Server } from "./server/server.js";
import { DbConfig } from "./config/db.config.js";
import { DbService } from "./database/db.service.js";
import { UserRepository } from "./entity/user/user.repository.js";
import { UserService } from "./entity/user/user.service.js";
import { UserController } from "./entity/user/user.controller.js";
import { ProjectRepository } from "./entity/project/project.repository.js";
import { ProjectService } from "./entity/project/project.service.js";
import { ProjectController } from "./entity/project/project.controller.js";

import { CourseController } from "./entity/course/course.controller.js";
import { ArticleController } from "./entity/article/article.controller.js";
import { TaskController } from "./entity/task/task.controller.js";
import { TestController } from "./entity/test/test.controller.js";
import { LoggerService } from "./logger/logger.service.js";

// Init outer service
const loggerService = new LoggerService();
const dbService = new DbService(DbConfig.connection, loggerService);


// Init entity repository
const userRepositoryInstance = new UserRepository(dbService, loggerService);
const projectRepositoryInstance = new ProjectRepository(dbService, loggerService);


// Init entity services
const userService = new UserService(userRepositoryInstance);
const projectService = new ProjectService(projectRepositoryInstance);


// Init entiry controllers
const userController = new UserController(userService);
const projectController = new ProjectController(projectService);
const courseController = new CourseController();
const articleController = new ArticleController();
const taskController = new TaskController();
const testController = new TestController();


const api = new App(
  dbService,
  userController,
  projectController,
  courseController,
  articleController,
  taskController,
  testController,
);

await api.init();

const apiServer = new Server(api.app, process.env.PORT || 3000);
apiServer.start();
console.log(process.env.DB_HOST)
