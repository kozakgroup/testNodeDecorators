import app from '../index';
import {NextFunction, Request, Response} from 'express';

export function UseApi(url: string) {
  return function (target: Function) {
    app.use((req: Request, res: Response, next: NextFunction) => {
      target.prototype.body = req.body;
      target.prototype.query = req.query;
      next();
    });
    app.use(url, target.prototype.router);
  }
}