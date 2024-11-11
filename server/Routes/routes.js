import express from "express";
import dbCon from "../config/config.db.js";
const router = express.Router();
router.get("/create", (req, res) => {
  var sql =
    "CREATE TABLE customers (name  VARCHAR(255), address VARCHAR(255) )";
  dbCon.query(sql, (err, result) => {
    if (err) console.log(err);
    res.send("<h1>Table is created succusfully</h1>");
  });
});
router.get("/", (req, res) => {
  const sql = "SELECT * FROM customers";
  dbCon.query(sql, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

router.post("/insert", (req, res) => {
  const insertData =
    "INSERT INTO customers (name, address) VALUES('Tebarek', 'Addis Ababa')";
  dbCon.query(insertData, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Database error", details: err });
    }
    res.status(200).json({ message: "Data inserted successfully", result });
  });
});

export default router;
