import React from "react";
import not_found_url from "../../assets/user_images/not_found.jpg";

export default function UserProfile(props) {
  const { name, age, gender, batch, school, type, image_url, bio } =
    props.final_user;
  let looking_for_type = "is looking for a " + type;
  if (type === "false") {
    looking_for_type = "";
  }
  return (
    <>
      <div>
        {/* if image_url image does not load => render not_found_url image */}
        <img
          src={image_url}
          alt="profile_photo_image"
          width="100"
          height="100"
        />
        <img
          src={not_found_url}
          alt="image_not_found"
          width="100"
          height="100"
        />
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
