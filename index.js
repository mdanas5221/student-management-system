const port = 3000;
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// STUDENTS FAKE DATA
let students = [
  {
    id: uuidv4(),
    fullName: "MD Anas",
    age: 20,
    gender: "Male",
    rollNumber: "STU-001",
    course: "BCA",
    email: "anas.raza@example.com",
    phone: "9876543210",
    city: "Delhi",
    address: "Sultanpuri, New Delhi",
    status: "Active",
  },
  {
    id: uuidv4(),
    fullName: "Aman Sharma",
    age: 19,
    gender: "Male",
    rollNumber: "STU-002",
    course: "B.Com",
    email: "aman.sharma@example.com",
    phone: "9812345678",
    city: "Jaipur",
    address: "Vaishali Nagar, Jaipur",
    status: "Active",
  },
  {
    id: uuidv4(),
    fullName: "Priya Verma",
    age: 21,
    gender: "Female",
    rollNumber: "STU-003",
    course: "B.Sc",
    email: "priya.verma@example.com",
    phone: "9898765432",
    city: "Lucknow",
    address: "Aliganj, Lucknow",
    status: "Inactive",
  },
  {
    id: uuidv4(),
    fullName: "Mohammed Faizan",
    age: 22,
    gender: "Male",
    rollNumber: "STU-004",
    course: "BA",
    email: "faizan@example.com",
    phone: "9123456780",
    city: "Bhopal",
    address: "MP Nagar, Bhopal",
    status: "Active",
  },
  {
    id: uuidv4(),
    fullName: "Neha Singh",
    age: 20,
    gender: "Female",
    rollNumber: "STU-005",
    course: "BBA",
    email: "neha.singh@example.com",
    phone: "9988776655",
    city: "Kanpur",
    address: "Civil Lines, Kanpur",
    status: "Active",
  },
  {
    id: uuidv4(),
    fullName: "Rohan Gupta",
    age: 21,
    gender: "Male",
    rollNumber: "STU-006",
    course: "B.Tech",
    email: "rohan.gupta@example.com",
    phone: "9765432109",
    city: "Noida",
    address: "Sector 62, Noida",
    status: "Inactive",
  },
  {
    id: uuidv4(),
    fullName: "Ayesha Khan",
    age: 19,
    gender: "Female",
    rollNumber: "STU-007",
    course: "BCA",
    email: "ayesha@example.com",
    phone: "9871203456",
    city: "Hyderabad",
    address: "Charminar, Hyderabad",
    status: "Active",
  },
  {
    id: uuidv4(),
    fullName: "Arjun Mehta",
    age: 22,
    gender: "Male",
    rollNumber: "STU-008",
    course: "MBA",
    email: "arjun.mehta@example.com",
    phone: "9871112233",
    city: "Pune",
    address: "Shivaji Nagar, Pune",
    status: "Active",
  },
  {
    id: uuidv4(),
    fullName: "Sana Parveen",
    age: 20,
    gender: "Female",
    rollNumber: "STU-009",
    course: "B.Sc",
    email: "sana@example.com",
    phone: "9811112233",
    city: "Patna",
    address: "Kankarbagh, Patna",
    status: "Active",
  },
  {
    id: uuidv4(),
    fullName: "Rahul Yadav",
    age: 21,
    gender: "Male",
    rollNumber: "STU-010",
    course: "B.Com",
    email: "rahul@example.com",
    phone: "9877776655",
    city: "Indore",
    address: "Vijay Nagar, Indore",
    status: "Inactive",
  },
];

// INDEX ROUTE
app.get("/students", (req, res) => {
  let search = req.query.search;
  let filteredStudents = students;

  if (search) {
    filteredStudents = students.filter((student) => {
      return student.fullName.toLowerCase().includes(search.toLowerCase());
    });
  }

  res.render("index", { students: filteredStudents });
});

// ADD ROUTE
app.get("/students/new", (req, res) => {
  res.render("new");
});

app.post("/students", (req, res) => {
  let student = req.body;
  student.id = uuidv4();
  students.push(student);
  res.redirect("/students");
});

// VIEW ROUTE
app.get("/students/:id", (req, res) => {
  let { id } = req.params;
  let student = students.find((stu) => stu.id === id);
  res.render("view", { student });
});

// EDIT ROUTE
app.get("/students/:id/edit", (req, res) => {
  let { id } = req.params;
  let student = students.find((stu) => stu.id === id);
  res.render("edit", { student });
});

app.patch("/students/:id", (req, res) => {
  let { id } = req.params;
  const index = students.findIndex((student) => student.id === id);
  students[index] = {
    id: id,
    ...req.body,
  };
  res.redirect("/students");
});

// DELETE ROUTE
app.get("/students/:id/delete", (req, res) => {
  let { id } = req.params;
  let student = students.find((stu) => stu.id === id);
  res.render("delete", { student });
});

app.delete("/students/:id", (req, res) => {
  let { id } = req.params;
  students = students.filter((stu) => stu.id !== id);
  res.redirect("/students");
});

// LISTENING PORT
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
