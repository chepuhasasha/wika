import { BaseController } from "../../common/base.controller.js";

export class TestController extends BaseController{
  constructor() {
    super();
    this.router.get("/:id", this.getTest.bind(this));
    this.router.post("/create", this.createTest.bind(this));
    this.router.post("/update", this.updateTest.bind(this));
    this.router.post("/delete", this.deleteTest.bind(this));
  }

  async getTest(req, res, next){
    let result = {'test': req.params.id};
    this.ok(res, result);
  };

  async createTest(req, res, next){
    this.created(res);
  };

  async updateTest(req, res, next){
    this.ok(res);
  };

  async deleteTest(req, res, next){
    this.ok(res);
  };
}
