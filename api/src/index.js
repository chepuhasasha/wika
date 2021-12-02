import { App } from "./app/api.js";
import { Server } from "./server/server.js";
import { ArticleController } from "./article/article.controller.js";

let articleController = new ArticleController();

const app = new App(articleController);

const apiServer = new Server(app.init(), process.env.PORT || 3002);
apiServer.start();
