import httpStatus from "http-status";
import { Router } from "express";

export class BaseController {
  constructor() {
    this.router = Router();
  }

  _send(res, status, msg=null, data=null) {
    let resData = {
      error: () => {
        if (!msg){
          return status >= 400 ? httpStatus[`${status}_MESSAGE`] : null
        } else {
          return msg
        }
      },
      data,
      status: {
        code: status,
        text: httpStatus[`${status}_NAME`],
      },
    };
    return res.status(status).json(resData);
  };

  ok(res, data) {
    this._send(res, 200, null, data);
  };

  err(res, code=null, msg=null) {
    this._send(res, code ? code : 404, msg, null);
  };

  created(res) {
    this._send(res, 201, null, null);
  };

  // TODO: fix binding function
  // bindRoutes(routes) {
  //   for (const route of routes) {
  //     // const middleware = route.middlewares?.map((m) => m.execute.bind(m));
  //     // const handler = route.func.bind(this);
  //     // const pipeline = middleware ? [...middleware, handler] : handler;
  //     this.router[route.method](route.path, route.func);
  //   }
  // }

}


