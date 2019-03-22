import { NextFunction, Request, Response } from "express";

export function HttpMethod(method: string) {
  return function (url: string) {
    return function (target: any, propertyKey: string) {
      if (!Object.getOwnPropertyDescriptor(target.__proto__, 'router')) {
        throw new Error(`You cannot use ${method} decorator in not API class`);
      } else {

        target.router[method](url, (req: Request, res: Response, next: NextFunction) => {
          target.params = req.params;
          next();
        });

        target.router[method](url, async (req: Request, res: Response) => {
          let result;
          let statusCode = 200;

          try {
            result = await target[propertyKey].call(target);
          } catch (e) {
            result = {
              type: 'error',
              message: e.message
            };
            statusCode = 500;
          } finally {
            res.status(statusCode).json(result);
          }
        });
      }
    }
  }
}
