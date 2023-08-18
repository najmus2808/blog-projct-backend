const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.join(process.cwd(), ".env"),
});

module.exports = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  env: process.env.NODE_ENV,
  jwt_secret: process.env.JWT_SECRET,
};
