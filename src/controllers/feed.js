export const feed_get = async (req, res) => {
  console.log("/feed user_email: " + req.email);
  res.sendFile("/Users/ayushmanroy/hookedu/frontend-test/feed/console.html");
};
