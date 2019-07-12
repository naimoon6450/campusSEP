const express = require("express");
const app = express();
const studentRouter = require("./server/routes/studentRouter");
const campusRouter = require("./server/routes/campusRouter");
const path = require("path");
const { db } = require("./server/db");

// middleware
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static serving
app.use(express.static(path.join(__dirname, "./public")));

// routes
app.use("/api", studentRouter);
app.use("/api", campusRouter);

// listen on port
const PORT = 8080;
db.sync()
  .then(() => {
    console.log("db connected...");
    app.listen(PORT, () => {
      console.log(`Listening on PORT ${PORT}`);
    });
  })
  .catch(e => console.error(e));
