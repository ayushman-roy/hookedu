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
  search_type: {
    type: Sequelize.STRING,
  },
  last_search: {
    type: Sequelize.DATE,
  },
  matches: {
    type: Sequelize.JSON,
  },
  recent_matches: {
    type: Sequelize.INTEGER,
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
