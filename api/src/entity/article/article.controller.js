import { BaseController } from "../..//common/base.controller.js";

export class ArticleController extends BaseController{
  constructor() {
    super();
    this.router.get("/:id", this.getArticle.bind(this));
    this.router.post("/create", this.createArticle.bind(this));
    this.router.post("/update", this.updateArticle.bind(this));
    this.router.post("/delete", this.deleteArticle.bind(this));
  }

  async getArticle(req, res, next){
    let result = {'article': req.params.id};
    this.ok(res, result);
  };

  async createArticle(req, res, next){
    this.created(res);
  };

  async updateArticle(req, res, next){
    this.ok(res);
  };

  async deleteArticle(req, res, next){
    this.ok(res);
  };
}
