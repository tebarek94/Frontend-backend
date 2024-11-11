import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const dbCon = mysql.createConnection({
  database: process.env.DB_NAME,
  password: process.env.PASSWORD,
  user: process.env.USER,
  host: process.env.HOST,
});

export default dbCon;
