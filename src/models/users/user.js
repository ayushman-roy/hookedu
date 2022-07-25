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
  interest: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: [["Men", "Women", "Everyone"]],
    },
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
});

// syncs User model to users database table
(async () => {
  await User.sync();
})();
