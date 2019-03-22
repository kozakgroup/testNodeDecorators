import express from 'express';

export function SetRouter(target: any, propertyKey: string) {
  target[propertyKey] = express.Router();
}