import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Feed() {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function get_data() {
      const res = await fetch("/api/feed", { method: "GET" });
      const response = await res.json();
      const { msg, success } = response;
      if (!success) {
        navigate("/");
      } else {
        setMessage(msg);
      }
    }
    get_data();
  }, []);

  return (
    <>
      <div>{message}</div>
    </>
  );
}
