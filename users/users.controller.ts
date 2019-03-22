import knex from '../config/knex';
import API from '../core/api';
import { Get, Post, Put } from '../decorators';

class UsersController extends API {

  @Get('/users/:id')
  async getUser() {
    const user = await knex.select().from('users').where('id', this.params.id);

    if (!user.length) {
      throw new Error('User not found!');
    }

    return user;
  }

  @Post('/users')
  createUser() {
    return knex.returning('*').insert([this.body]).into('users');
  }

  @Put('/users/:id')
  async updateUser() {
    const user = await knex('users').returning('*').where('id', this.params.id).update(this.body);

    if (!user.length) {
      throw new Error('User not found!');
    }

    return user;
  }

}