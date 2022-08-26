import React from "react";
import { useState } from "react";

export default function User_Match() {
  const [UserFound, setUserFound] = useState(false);
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
      e.target.reset();
    } else {
      setMessage(msg);
    }
  };

  // TODO: if (message) => render message as flash alert [frontend_task]
  // messages_type: "Something Went Wrong! Please Try Again!"...

  if (UserFound) {
    // TODO: render final_user.profile using props [from final_user obj]
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
