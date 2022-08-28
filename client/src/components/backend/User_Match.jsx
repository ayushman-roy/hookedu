import React from "react";
import { useState } from "react";
import User_Profile from "./User_Profile";

export default function User_Match() {
  const [UserFound, setUserFound] = useState(false);
  const [FinalUser, setFinalUser] = useState({});
  const [message, setMessage] = useState(null);

  const post_user_match = async (e) => {
    e.preventDefault();
    const form = e.target;
    const match_data = {
      batch: form.batch.value,
      gender: form.gender.value,
      type: form.type.value,
    };
    const res = await fetch("/api/feed/user_match", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(match_data),
    });
    const response = await res.json();
    const { msg, success, final_user } = response;
    if (success) {
      setUserFound(true);
      setFinalUser(final_user);
      e.target.reset();
    } else {
      setMessage(msg);
    }
  };

  // TODO: if (message) => render message as flash alert [frontend_task]
  // messages_type: "Something Went Wrong! Please Try Again!"...

  if (UserFound) {
    return <User_Profile final_user={FinalUser} />;
  } else {
    return (
      <>
        <form onSubmit={(e) => post_user_match(e)}>
          {/* add every input as box_radio && ANY as both label & value */}
          {/* Batch_Values: usual_options + ANY */}
          Batch: <input type="text" name="batch" id="" />
          {/* Gender_Values: Male, Female + ANY */}
          Gender: <input type="text" name="gender" id="" />
          {/* Type_Values: date, friend, study, gym, mess + ANY */}
          Type: <input type="text" name="type" id="" />
          <input type="submit" name="" id="" />
        </form>
      </>
    );
  }
}
