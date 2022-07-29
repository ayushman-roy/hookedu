import React from "react";

export default function Pre_Register() {
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
    const { msg, redirect, reload } = response;
    // TODO: if (msg != null) {store msg}
    // TODO: if (reload == true) {reload and show msg}
    // TODO: if (redirect != null) {redirect to value and show msg}
  };
  return (
    <>
      <form onSubmit={(e) => post_pre_reg_data(e)}>
        <input type="email" name="email" id="" />
        <input type="password" name="password" id="" />
        <input type="submit" name="" id="" />
      </form>
    </>
  );
}
