import { Sequelize } from "sequelize";
import database from "../../config/database.js";

// users table schema: stores user_data post-registration
export const User = database.define("user", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED.ZEROFILL,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  school: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  batch: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  bio: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
  refresh_token: {
    type: Sequelize.TEXT,
  },
  type: {
    type: Sequelize.STRING,
  },
  last_search: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  matches: {
    type: Sequelize.JSON,
    defaultValue: [],
  },
  last_match: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  image_url: {
    type: Sequelize.TEXT,
  },
});

// syncs User model to users database table
(async () => {
  await User.sync();
})();

/*
(async () => {
  await User.sync({ alter: true });
})();
*/
