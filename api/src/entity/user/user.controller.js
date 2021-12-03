import { BaseController } from "../../common/base.controller.js";

export class UserController extends BaseController{
  constructor(userServiceInstance) {
    super();
    this.userService = userServiceInstance;
    this.router.get("/:id", this.getUser.bind(this));
    this.router.post("/login", this.login.bind(this));
    // this.router.post("/register", this.register.bind(this));
  }

  async getUser({params}, res, next){
    // const result = {
    //   'id': params.id
    // }
    const result = await this.userService.getUserById(params.id);
    if(!result){
      return this.err(res, null, null);
    }
    this.ok(res, result);
  };

  // async register({body}, res, next){
  //   const result = this.userService.createUser(body);
  //   if (!result){
  //     return this.err(res, 422, 'Пользователь уже сузествует')
  //   }
  //   this.created(res);
  // };

  async login(req, res, next){
    this.ok(res);
  };
}
