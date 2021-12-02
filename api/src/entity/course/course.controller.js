import { BaseController } from "../../common/base.controller.js";

export class CourseController extends BaseController{
  constructor() {
    super();
    this.router.get("/:id", this.getCourse.bind(this));
    this.router.post("/create", this.createCourse.bind(this));
    this.router.post("/update", this.updateCourse.bind(this));
    this.router.post("/delete", this.deleteCourse.bind(this));
  }

  async getCourse(req, res, next){
    let result = {'course': req.params.id};
    this.ok(res, result);
  };

  async createCourse(req, res, next){
    this.created(res);
  };

  async updateCourse(req, res, next){
    this.ok(res);
  };

  async deleteCourse(req, res, next){
    this.ok(res);
  };
}
