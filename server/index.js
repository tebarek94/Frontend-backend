import express from "express";
import dbCon from "./config/config.db.js";
import router from "./Routes/routes.js";
const port = process.env.PORT;
const app = express();

app.use("/api/db/", router);

dbCon.connect((err) => {
  if (err) {
    console.log(`Connection error `, err);
  } else {
    console.log(`Database connected`);
    app.listen(port, () => {
      console.log(`Server is running on the http://localhost:${port}`);
    });
  }
});
