import jwt from "jsonwebtoken";

// user authentication based on access and refresh tokens
export const verify_user = (req, res, next) => {
  // get tokens from cookies
  const { accessToken, refreshToken } = req.cookies;
  // if accessToken present: verify by JWT
  // if accepted: allow access, pass decoded email as req.user
  // else: check next if statement
  // accessToken_verified allows if-statement switch without overlaps
  var accessToken_verified = false;
  if (accessToken) {
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) return;
      req.user = decoded.email;
      accessToken_verified = true;
    });
  }
  if (accessToken_verified == true) {
    next();
  }
  // if refreshToken present: verify by JWT
  // if accepted: create and send access token, accessToken acception
  // else: redirect to login page
  else if (refreshToken) {
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        // HTTP status code: 401
        if (err) return res.json({ msg: null, success: false });
        const email = decoded.email;
        const user_access_token = jwt.sign(
          { email },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "1800s",
          }
        );
        res.cookie("accessToken", user_access_token, {
          httpOnly: true,
          maxAge: 30 * 60 * 1000,
          // secure: true
        });
        req.user = email;
        next();
      }
    );
  }
  // if no accessToken and refreshToken: redirect to login page
  else {
    // HTTP status code: 401
    return res.json({ msg: null, success: false });
  }
};
