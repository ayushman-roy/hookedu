export const feed_get = async (req, res) => {
  console.log("/feed user_email: " + req.email);
  res.json({ msg: "user_authentication Successful", success: true });
};
