require("dotenv").config();
const port = process.env.PORT || 3000;
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const mysql = require("mysql2");
const { v4: uuidv4 } = require("uuid");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// INDEX ROUTE
app.get("/student", (req, res) => {
  let { search } = req.query;
  let q;
  let values = [];

  if (!search || search.trim === "") {
    q = "SELECT * FROM student";
  } else {
    q =
      "SELECT * FROM student WHERE name LIKE ? OR roll_no LIKE ? OR email LIKE ?";
    let keyword = `%${search}%`;
    values = [keyword, keyword, keyword];
  }

  connection.query(q, values, (err, result) => {
    if (err) {
      console.log(err);
      return res.send("There is some issue to fetch data, try again later.");
    }
    if (result.length == 0) {
      res.send("No student found.");
    } else {
      res.render("index.ejs", { students: result });
    }
  });
});

// ADD ROUTE
app.get("/student/new", (req, res) => {
  res.render("new");
});

app.post("/student", (req, res) => {
  let {
    name,
    age,
    gender,
    roll_no,
    course,
    email,
    phone,
    city,
    address,
    status,
  } = req.body;

  let q = "INSERT INTO student VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  connection.query(
    q,
    [
      uuidv4(),
      name,
      age,
      gender,
      roll_no,
      course,
      email,
      phone,
      city,
      address,
      status,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.send("There is some issue to add student, try again later.");
      }
      res.redirect("/student");
    },
  );
});

// VIEW ROUTE
app.get("/student/:id", (req, res) => {
  let { id } = req.params;
  let q = "SELECT * FROM student WHERE id = ?";
  connection.query(q, id, (err, result) => {
    if (err) {
      return res.send("There is some issue to fetch data, try again later.");
    }
    res.render("view", { student: result[0] });
  });
});

// EDIT ROUTE
app.get("/student/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = "SELECT * FROM student WHERE id = ?";
  connection.query(q, [id], (err, result) => {
    if (err) {
      return res.send("There is some issue to fetch data, try again later.");
    }
    res.render("edit", { student: result[0] });
  });
});

app.patch("/student/:id", (req, res) => {
  let { id } = req.params;
  let {
    name,
    age,
    gender,
    roll_no,
    course,
    email,
    phone,
    city,
    address,
    status,
  } = req.body;

  let q =
    "UPDATE student SET name = ?, age = ?, gender = ?, roll_no = ?, course = ?, email = ?, phone = ?, city = ?, address = ?, status = ? WHERE id = ?";
  connection.query(
    q,
    [
      name,
      age,
      gender,
      roll_no,
      course,
      email,
      phone,
      city,
      address,
      status,
      id,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.send("There is some issue to fetch data, try again later.");
      }
      res.redirect("/student");
    },
  );
});

// DELETE ROUTE
app.get("/student/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = "SELECT * FROM student WHERE id = ?";
  connection.query(q, [id], (err, result) => {
    if (err) {
      return res.send("There is some error");
    }
    res.render("delete", { student: result[0] });
  });
});

app.delete("/student/:id", (req, res) => {
  let { id } = req.params;
  let q = "DELETE FROM student WHERE id = ?";
  connection.query(q, [id], (err, result) => {
    if (err) {
      return res.send("There is some error.");
    }
    res.redirect("/student");
  });
});

// LISTENING PORT
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
