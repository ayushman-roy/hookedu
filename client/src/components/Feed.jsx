import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Feed() {
  const [message, setMessage] = useState("");
  const history = useHistory();
  const get_user_feed = async () => {
    const res = await fetch("/api/feed", { method: "GET" });
    const response = await res.json();
    const { msg, success } = response;
    if (!success) {
      history.push("/");
    } else {
      setMessage(msg);
    }
  };
  useEffect(get_user_feed, []);
  return <>{message}</>;
}
