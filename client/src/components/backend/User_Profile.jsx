import React from "react";

export default function User_Profile(props) {
  const { name, age, gender, batch, school, type, image_url, bio } =
    props.final_user;
  const not_found_url = "../../../../assets/user_images/not_found.jpg";
  let looking_for_type = "is looking for a " + type;
  if (type === false) {
    looking_for_type = "";
  }
  return (
    <>
      <div>
        <img src={image_url} alt={not_found_url} />
        <button type="button">message</button>
        <div>
          {name} {looking_for_type}
        </div>
        <div>
          {age}, {gender}
        </div>
        <div>
          {batch}, {school}
        </div>
        <div> {bio} </div>
      </div>
    </>
  );
}
