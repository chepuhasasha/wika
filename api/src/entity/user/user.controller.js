import { BaseController } from "../../common/base.controller.js";

export class UserController extends BaseController{
  constructor() {
    super();
    this.router.get("/:id", this.getUser.bind(this));
    this.router.post("/create", this.createUser.bind(this));
    this.router.post("/update", this.updateUser.bind(this));
    this.router.post("/delete", this.deleteUser.bind(this));
  }

  async getUser(req, res, next){
    let result = {'user': req.params.id};
    this.ok(res, result);
  };

  async createUser(req, res, next){
    this.created(res);
  };

  async updateUser(req, res, next){
    this.ok(res);
  };

  async deleteUser(req, res, next){
    this.ok(res);
  };
}
