import jwt from "jsonwebtoken";

// user authentication based on access and refresh tokens
export const verify_user = (req, res, next) => {
  // get tokens from cookies
  const { accessToken, refreshToken } = req.cookies;
  // if accessToken present: verify by JWT
  // if accepted: allow access, pass decoded email as req.email
  // else: check next if statement
  if (accessToken) {
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) return;
      req.email = decoded.email;
      next();
    });
  }
  // if refreshToken present: verify by JWT
  // if accepted: create and send access token, accessToken acception
  // else: redirect to login page
  if (refreshToken) {
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) return res.redirect(401, "/");
        const user_email = decoded.email;
        const user_access_token = jwt.sign(
          { user_email },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "1800s",
          }
        );
        res.cookie("accessToken", user_access_token, {
          httpOnly: true,
          maxAge: 30 * 60 * 1000,
          secure: true,
        });
        req.email = user_email;
        next();
      }
    );
  }
  // if no accessToken and refreshToken: redirect to login page
  else {
    res.redirect(401, "/");
  }
};
