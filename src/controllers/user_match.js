import { User } from "../models/users/user.js";
import { time_convert } from "../checks/user_match.js";

// BASE: not duoMatch_consent, but oneWay_consent [not Tinder]

export const user_match = async (req, res) => {
  try {
    const { batch, gender, type } = req.body;
    const current_user = await User.findOne({ where: { email: req.user } });
    const current_time = new Date().getTime();
    const time_diff =
      6 * 60 * 60 * 1000 - (current_time - current_user.last_search);
    if (time_diff > 0) {
      let time_left = time_convert(time_diff);
      return res.json({
        msg: `You Have Exhausted Your Searches! Please Wait ${time_left} Hours Before Searching Again!`,
        success: false,
      });
    }
    var userPool, final_user;
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
    while (userPool.length > 0) {
      let index = Math.floor(Math.random() * userPool.length);
      let selected_user = userPool[index];
      let selected_user_matches = selected_user.matches;
      let matched_already = selected_user_matches.includes(String(req.user));
      if (!matched_already) {
        let overmatched =
          current_time - selected_user.last_match < 2 * 60 * 60 * 1000;
        if (!overmatched) {
          final_user = selected_user;
          break;
        }
      }
      userPool.splice(index, 1);
    }
    if (final_user) {
      var current_user_matches = current_user.matches;
      var final_user_matches = final_user.matches;
      final_user.set({
        matches: final_user_matches.push(String(current_user.email)),
        last_match: current_time,
      });
      current_user.set({
        type: type,
        matches: current_user_matches.push(String(final_user.email)),
        last_search: current_time,
        last_match: current_time,
      });
      await final_user.save();
      await current_user.save();
      // TODO: return final_user.profile
    } else {
      return res.json({
        msg: "No Matching Users Found. Please Change Your Search Preferences!",
        success: false,
      });
    }
  } catch (error) {
    return res.json({
      msg: "Something Went Wrong! Please Try Again!",
      success: false,
    });
  }
};
