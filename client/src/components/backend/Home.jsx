import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);

  const post_login_data = async (e) => {
    e.preventDefault();
    const form = e.target;
    const user_data = {
      email: form.email.value,
      password: form.password.value,
    };
    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user_data),
    });
    const response = await res.json();
    const { msg, success } = response;
    if (success) {
      navigate("/feed");
    } else {
      setMessage(msg);
    }
  };

  // TODO: if (message) => render message as flash alert
  // message_type: "Email Not Found! Please Register First!"...

  return (
    <>
      <form onSubmit={(e) => post_login_data(e)}>
        Email: <input type="email" name="email" id="" />
        Password: <input type="password" name="password" id="" />
        <input type="submit" name="" id="" />
      </form>
    </>
  );
}
