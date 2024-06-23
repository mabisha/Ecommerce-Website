module.exports = {
  development: {
    url: "postgres://postgres:postgre@127.0.0.1:5432/fusion?sslmode=disable",
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    url: process.env.DB_URL,
    dialect: "postgres",
  },
};
