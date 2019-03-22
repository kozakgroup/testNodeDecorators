import * as path from 'path';

const knexfile = require(path.join(process.cwd(), '/knexfile.js'));

const Config = {
  port: 3000,
  knexConfig: knexfile.development,
};

export default Config;