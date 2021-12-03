import { BaseController } from "../../common/base.controller.js";

export class ProjectController extends BaseController{
  constructor(projectServiceInstance) {
    super();
    this.projectService = projectServiceInstance;
    this.router.get("/:id", this.getProject.bind(this));
    // this.router.post("/create", this.createProject.bind(this));
    // this.router.post("/update", this.updateProject.bind(this));
    // this.router.post("/delete", this.deleteProject.bind(this));
  }

  async getProject({params}, res, next){
    const result = await this.projectService.findById(params.id);
    if(!result){
      return this.err(res, null, null);
    }
    this.ok(res, result);
  };

  // async createProject(req, res, next){
  //   this.created(res);
  // };

  // async updateProject(req, res, next){
  //   this.ok(res);
  // };

  // async deleteProject(req, res, next){
  //   this.ok(res);
  // };
}
