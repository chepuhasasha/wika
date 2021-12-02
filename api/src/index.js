import { App } from "./app/api.js";
import { Server } from "./server/server.js";
import { UserController } from "./entity/user/user.controller.js";
import { ProjectController } from "./entity/project/project.controller.js";
import { CourseController } from "./entity/course/course.controller.js";
import { ArticleController } from "./entity/article/article.controller.js";
import { TaskController } from "./entity/task/task.controller.js";
import { TestController } from "./entity/test/test.controller.js";

let userController = new UserController();
let projectController = new ProjectController();
let courseController = new CourseController();
let articleController = new ArticleController();
let taskController = new TaskController();
let testController = new TestController();

const app = new App(
  userController,
  projectController,
  courseController,
  articleController,
  taskController,
  testController,
);

const apiServer = new Server(app.init(), process.env.PORT || 3002);
apiServer.start();
