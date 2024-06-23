module.exports = {
  development: {
    // username: "postgres",
    // password: "postgre",
    // database: "fusion",
    // host: "127.0.0.1",
    url: "postgres://postgres:postgre@127.0.0.1:5432/fusion",
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
    // username: process.env.REACT_APP_DB_USERNAME,
    // password: process.env.REACT_APP_DB_PASSWORD,
    // database: process.env.REACT_APP_DB_NAME,
    // host: process.env.REACT_APP_DB_HOST,
    url: process.env.DB_URL,
    dialect: "postgres",
    dialectModule: require("pg"),
  },
};
