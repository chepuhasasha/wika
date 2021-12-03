import { App } from "./app/api.js";
import { Server } from "./server/server.js";
import { DbService } from "./database/db.service.js";
import { UserController } from "./entity/user/user.controller.js";
import { ProjectController } from "./entity/project/project.controller.js";
import { CourseController } from "./entity/course/course.controller.js";
import { ArticleController } from "./entity/article/article.controller.js";
import { TaskController } from "./entity/task/task.controller.js";
import { TestController } from "./entity/test/test.controller.js";



const dbConfig = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options: {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
}

const dbService = new DbService(dbConfig);
const userController = new UserController();
const projectController = new ProjectController();
const courseController = new CourseController();
const articleController = new ArticleController();
const taskController = new TaskController();
const testController = new TestController();

const app = new App(
  dbService,
  userController,
  projectController,
  courseController,
  articleController,
  taskController,
  testController,
);

const apiServer = new Server(app.init(), process.env.PORT || 3002);
apiServer.start();
