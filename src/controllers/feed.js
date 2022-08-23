export const feed_get = async (req, res) => {
  console.log("/feed user: " + req.user);
  res.json({ msg: "user_authentication Successful", success: true });
};
