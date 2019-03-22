
exports.seed = async function(knex, Promise) {
  await knex('users').del();
  await knex('users').insert([
    { email: 'test1@test.test', first_name: 'TestUser1', last_name: 'Testovich1' },
    { email: 'test2@test.test', first_name: 'TestUser2', last_name: 'Testovich2' },
    { email: 'test3@test.test', first_name: 'TestUser3', last_name: 'Testovich3' },
  ]);
};
