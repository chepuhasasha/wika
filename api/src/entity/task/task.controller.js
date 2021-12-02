import { BaseController } from "../../common/base.controller.js";

export class TaskController extends BaseController{
  constructor() {
    super();
    this.router.get("/:id", this.getTask.bind(this));
    this.router.post("/create", this.createTask.bind(this));
    this.router.post("/update", this.updateTask.bind(this));
    this.router.post("/delete", this.deleteTask.bind(this));
  }

  async getTask(req, res, next){
    let result = {'task': req.params.id};
    this.ok(res, result);
  };

  async createTask(req, res, next){
    this.created(res);
  };

  async updateTask(req, res, next){
    this.ok(res);
  };

  async deleteTask(req, res, next){
    this.ok(res);
  };
}
