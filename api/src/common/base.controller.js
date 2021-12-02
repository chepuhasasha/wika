import httpStatus from "http-status";
import { Router } from "express";

export class BaseController {
  constructor() {
    this.router = Router();
  }

  _send(res, status, data=null) {
    let resData = {
      error: status >= 400 ? httpStatus[`${status}_MESSAGE`] : null,
      data,
      status: {
        code: status,
        text: httpStatus[`${status}_NAME`],
      },
    };
    return res.status(status).json(resData);
  };

  ok(res, data) {
    this._send(res, 200, data);
  };

  err(res) {
    this._send(res, 404, null);
  };

  created(res) {
    this._send(res, 201, null);
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


