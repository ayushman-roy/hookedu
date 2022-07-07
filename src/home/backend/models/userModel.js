import { Sequelize } from "sequelize";
import database from "../config/database.js";

var campus = ["@ashoka.edu.in", "@jgu.edu.in"];

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
    validate: {
      isEmail: true,
      checkSchool(value) {
        let valid = false;
        for (let school in campus) {
          valid = value.endsWith(`${school}`);
          if (valid) {
            break;
          }
        }
        return valid;
      },
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      max: 40,
      min: 15,
    },
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  interest: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: [["M", "F", "Any"]],
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
  exhausted_swipes: {
    type: Sequelize.DATE,
  },
  donation: {
    type: Sequelize.INTEGER,
  },
  refresh_token: {
    type: Sequelize.TEXT,
  },
});

(async () => {
  await database.sync();
})();

export default User;
