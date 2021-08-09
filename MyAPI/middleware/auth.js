const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.body.token.split(" ")[1];
    const decoded = jwt.verify(token, "SourabhSecretKey");
    req.userData = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed!" });
  }
};

