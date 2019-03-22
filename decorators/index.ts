import { UseApi } from './api';
import { SetRouter } from './set-router';
import { HttpMethod } from './method';

const Get = HttpMethod('get');
const Post = HttpMethod('post');
const Put = HttpMethod('put');

export {
  UseApi,
  SetRouter,
  Get,
  Post,
  Put,
};