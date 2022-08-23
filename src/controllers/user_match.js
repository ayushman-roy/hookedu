import { User } from "../models/users/user.js";

// BASE: not duoMatch_consent, but oneWay_consent [not Tinder]

export const user_match = async (req, res) => {
  const { batch, gender, type } = req.body;
  const current_user = await User.findOne({ where: { email: req.user } });
  var userPool = null;
  // TODO: notAlreadyMatched & notOverMatched & lastSearchCooldown
  switch (true) {
    case batch != false && gender != false && type != false:
      userPool = await User.findAll({
        where: { batch: batch, gender: gender, type: type },
      });
      break;
    case batch != false && !gender && type != false:
      userPool = await User.findAll({
        where: { batch: batch, type: type },
      });
      break;
    case batch != false && gender != false && !type:
      userPool = await User.findAll({
        where: { batch: batch, gender: gender },
      });
      break;
    case batch != false && !gender && !type:
      userPool = await User.findAll({
        where: { batch: batch },
      });
      break;
    case !batch && gender != false && type != false:
      userPool = await User.findAll({
        where: { gender: gender, type: type },
      });
      break;
    case !batch && !gender && type != false:
      userPool = await User.findAll({
        where: { type: type },
      });
      break;
    case !batch && gender != false && !type:
      userPool = await User.findAll({
        where: { gender: gender },
      });
      break;
    case !batch && !gender && !type:
      userPool = await User.findAll();
      break;
  }
  switch (!userPool) {
    case batch != false && gender != false:
      userPool = await User.findAll({
        where: { batch: batch, gender: gender },
      });
      break;
    case batch != false && !gender:
      userPool = await User.findAll({
        where: { batch: batch },
      });
      break;
    case !batch && gender != false:
      userPool = await User.findAll({
        where: { gender: gender },
      });
      break;
    case !batch && !gender:
      userPool = await User.findAll();
      break;
  }
  if (userPool) {
    let current_time = new Date().toLocaleTimeString("en-US", {
      hour12: false,
    });
    current_user.set({ type: type, last_search: current_time });
    current_user.save();
    const index = Math.floor(Math.random() * userPool.length);
    const selected_user = userPool[index];
    // TODO: alert selected_user & return selected_user.profile
  } else {
    return res.json({
      msg: "No Matching Users Found. Please Change Your Search Preferences!",
      success: false,
    });
  }
};
