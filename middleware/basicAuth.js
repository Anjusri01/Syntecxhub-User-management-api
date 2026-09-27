module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    res.set("WWW-Authenticate", 'Basic realm="User Management API"');
    return res.status(401).json({
      message: "Authentication required"
    });
  }

  const encodedCredentials = authHeader.split(" ")[1];

  let decodedCredentials;

  try {
    decodedCredentials = Buffer.from(encodedCredentials, "base64").toString("utf8");
  } catch (error) {
    return res.status(401).json({
      message: "Invalid authentication credentials"
    });
  }

  const separatorIndex = decodedCredentials.indexOf(":");

  if (separatorIndex === -1) {
    return res.status(401).json({
      message: "Invalid authentication credentials"
    });
  }

  const username = decodedCredentials.substring(0, separatorIndex);
  const password = decodedCredentials.substring(separatorIndex + 1);

  if (
    username !== process.env.BASIC_AUTH_USERNAME ||
    password !== process.env.BASIC_AUTH_PASSWORD
  ) {
    res.set("WWW-Authenticate", 'Basic realm="User Management API"');
    return res.status(401).json({
      message: "Invalid username or password"
    });
  }

  next();
};
