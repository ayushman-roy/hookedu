import jwt from "jsonwebtoken";

export const verify_user = (req, res, next) => {
  const { accessToken, refreshToken } = req.cookies;
  if (accessToken) {
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) return;
      // breaks to the next if statement
      req.email = decoded.email;
      next();
    });
  }
  if (refreshToken) {
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) return res.redirect(401, "login");
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
        });
        req.email = user_email;
        next();
      }
    );
  } else {
    res.redirect(401, "login");
  }
};
