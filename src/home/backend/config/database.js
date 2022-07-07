import { Sequelize } from "sequelize";

const database = new Sequelize("hookedu", "root", "abcd1234", {
  host: "localhost",
  dialect: "mysql",
});

export default database;
