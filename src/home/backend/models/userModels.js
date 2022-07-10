import { Sequelize } from "sequelize";
import database from "../config/database.js";

const Pre_User = database.define(
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

const User = database.define("user", {
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
  liked: {
    type: Sequelize.JSON,
  },
  disliked: {
    type: Sequelize.JSON,
  },
  matches: {
    type: Sequelize.JSON,
  },
  swipes_exhausted_time: {
    type: Sequelize.DATE,
  },
  donation: {
    type: Sequelize.INTEGER,
  },
  register_status: {
    type: Sequelize.BOOLEAN,
  },
  refresh_token: {
    type: Sequelize.TEXT,
  },
});

(async () => {
  await database.sync();
})();

export { User, Pre_User };
