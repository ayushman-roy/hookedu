import React from "react";
import { useEffect } from "react";

// TODO: photo_update()

export default function User_Update() {
  // GET user_data
  useEffect(() => {
    async function get_data() {
      const res = await fetch("/api/feed/user_update", { method: "GET" });
      const response = await res.json();
      const { msg, success, user } = response;
      if (!success) {
        <Alert clsa severity="error">
          {msg}
        </Alert>;
      } else {
        const { name, age, gender, school, batch, bio, type, image_url } = user;
      }
    }
    get_data;
  }, []);

  // UPDATE user_data
  const post_user_update = async (e) => {
    e.preventDefault();
    const form = e.target;
    // send data where disabled elements are replaced by current data
    const user_data = {
      gender: form.gender.value,
      bio: form.bio.value,
    };
    const res = await fetch("/api/feed/user_update", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user_data),
    });
    const response = await res.json();
    const { msg, success } = response;
    if (success) {
      // re-render page with updated data
      // render message
    } else {
      // render message
    }
  };

  return (
    <>
      <img src={image_url} />
      <form onSubmit={(e) => post_user_update(e)}>
        Name: <input name="name" id="" disabled defaultValue={name} />
        Age: <input name="age" id="" disabled defaultValue={age} />
        School: <input name="school" id="" disabled defaultValue={school} />
        Batch: <input name="batch" id="" disabled defaultValue={batch} />
        Looking For: <input name="type" id="" disabled defaultValue={type} />
        Gender: <input name="gender" id="" defaultValue={gender} />
        About: <input name="bio" id="" defaultValue={bio} />
        <input type="submit" name="" id="" />
      </form>
    </>
  );
}
