import { Sequelize } from "sequelize";
import database from "../../config/database.js";

// pre-user table schema: stores user_data pre-registration
export const Pre_User = database.define(
  "pre-user",
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    otp: {
      type: Sequelize.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

// syncs Pre_User model to pre-user database table
(async () => {
  await Pre_User.sync({ alter: true });
})();
