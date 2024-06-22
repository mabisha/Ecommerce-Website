module.exports = {
  development: {
    username: "postgres",
    password: "postgre",
    database: "fusion",
    host: "127.0.0.1",
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
    username: process.env.REACT_APP_DATABASE_USERNAME,
    password: process.env.REACT_APP_DATABASE_PASSWORD,
    database: process.env.REACT_APP_DATABASE_NAME,
    host: process.env.REACT_APP_DATABASE_HOST,
    dialect: "postgres",
  },
};
