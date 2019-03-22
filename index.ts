import express from 'express';
import bodyParser from 'body-parser';
import injectControllers from './helpers/injector';
import Config from './config';

const app = express();

app.use(bodyParser.json());

injectControllers(__dirname, 'controller.ts');

app.listen(Config.port, () => console.log(`Server listening on port ${Config.port}`));

export default app;