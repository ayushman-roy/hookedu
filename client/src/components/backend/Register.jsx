import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [stage, setStage] = useState("pre_reg");
  const [message, setMessage] = useState(null);

  const post_pre_reg_data = async (e) => {
    e.preventDefault();
    const form = e.target;
    const user_data = {
      email: form.email.value,
      password: form.password.value,
    };
    const res = await fetch("", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user_data),
    });
    const response = await res.json();
    const { msg, success } = response;
    if (success) {
      setStage("verify_otp");
      setMessage(null);
      e.target.reset();
    } else {
      setMessage(msg);
    }
  };

  const post_verify_otp_data = async (e) => {
    e.preventDefault();
    const form = e.target;
    const user_data = {
      otp: form.otp.value,
    };
    const res = await fetch("/hook/check", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user_data),
    });
    const response = await res.json();
    const { msg, success } = response;
    if (success) {
      setStage("reg_data");
      setMessage(null);
      e.target.reset();
    } else {
      setMessage(msg);
    }
  };

  const post_reg_data = async (e) => {
    e.preventDefault();
    const form = e.target;
    const user_data = {
      name: form.name.value,
      age: form.age.value,
      gender: form.gender.value,
      school: form.school.value,
      batch: form.batch.value,
      bio: form.bio.value,
    };
    const res = await fetch("/hook/data", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user_data),
    });
    const response = await res.json();
    const { msg, success, otp_verify } = response;
    if (success) {
      navigate("/feed");
    } else if (!otp_verify) {
      e.target.reset();
      setStage("verify_otp");
      setMessage(msg);
    } else {
      setMessage(msg);
    }
  };

  async function resend_otp_button() {
    const res = await fetch("/hook/resend_otp", { method: "GET" });
    const { msg } = await res.json();
    setMessage(msg);
  }

  // TODO: if (message) => render message as flash alert [for every case]
  // messages_type: "You Have Registered Already!"...

  if (stage == "reg_data") {
    return (
      <>
        <form onSubmit={(e) => post_reg_data(e)}>
          Name: <input name="name" id="" />
          Age: <input type="number" name="age" id="" />
          Gender: <input type="text" name="gender" id="" />
          School: <input type="text" name="school" id="" />
          Batch: <input type="text" name="batch" id="" />
          Bio: <input type="text" name="bio" id="" />
          <input type="submit" name="" id="" />
        </form>
      </>
    );
  }
  // TODO: resend_otp() => afterClick => disable button for 60s
  else if (stage == "verify_otp") {
    return (
      <>
        <form onSubmit={(e) => post_verify_otp_data(e)}>
          OTP: <input type="number" name="otp" id="" />
          <input type="submit" name="" id="" />
          <button
            type="button"
            name="resend_otp"
            onClick={(e) => resend_otp_button()}
          >
            Resend OTP
          </button>
        </form>
      </>
    );
  } else {
    return (
      <>
        <form onSubmit={(e) => post_pre_reg_data(e)}>
          Email: <input type="email" name="email" id="" />
          Password: <input type="password" name="password" id="" />
          <input type="submit" name="" id="" />
        </form>
      </>
    );
  }
}
