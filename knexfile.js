// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'ec2-54-243-42-108.compute-1.amazonaws.com',
      database: 'd76ba28oiphf93',
      user:     'zbpwbzeewyhybn',
      port: 5432,
      password: 'E-hV_qYijcXrKV0Ov5woK2EP4X',
      ssl: true,
    },
    migrations: {
      tableName: 'knex_migrations'
    },
  },
};
