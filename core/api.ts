import { Router } from 'express'
import { SetRouter, UseApi } from '../decorators'

@UseApi('/')
export default class API {
  @SetRouter
  private readonly _router!: Router;

  private _body: any;
  private _params: any;
  private _query: any;

  protected get router () {
    return this._router;
  }

  protected set body(body: any) {
    this._body = body;
  }

  protected get body(): any {
    return this._body;
  }

  protected set params(params: any) {
    this._params = params;
  }

  protected get params(): any {
    return this._params;
  }

  protected set query(query: any) {
    this._query = query;
  }

  protected get query(): any {
    return this._query;
  }
}