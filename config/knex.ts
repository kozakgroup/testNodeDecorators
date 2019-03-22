import Knex from 'knex';
import Config from './';

export default Knex({ ...Config.knexConfig });