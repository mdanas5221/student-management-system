# 🎓 Student Management System

A complete **Student Management System** built with **Node.js**, **Express.js**, **EJS**, **UUID**, and **Method Override**. This project demonstrates the fundamentals of **REST APIs**, **CRUD Operations**, **Search Functionality**, and **Server-Side Rendering** using Express.

---

# 🚀 Features

- ➕ Add New Student
- 📋 View All Students
- 👀 View Student Details
- ✏️ Edit Student Information
- 🗑️ Delete Student
- 🔍 Search Students by Name
- 🆔 Unique Student IDs using UUID
- 📱 Fully Responsive User Interface
- ✅ Client-side Form Validation
- 🌐 RESTful Routing
- 📄 Dynamic Routes using Route Parameters
- 🖥️ Server-Side Rendering with EJS
- 🔄 Method Override for PATCH & DELETE Requests

---

# 🛠️ Tech Stack

- Node.js
- Express.js
- EJS
- UUID
- Method Override
- HTML5
- CSS3
- JavaScript

---

# 📁 Project Structure

```text
student-management-system/
│
├── public/
│   ├── delete.css
│   ├── edit.css
│   ├── style.css
│   └── view.css
│
├── views/
│   ├── delete.ejs
│   ├── edit.ejs
│   ├── index.ejs
│   ├── new.ejs
│   └── view.ejs
│
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

# 📌 REST API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | /students | Display all students |
| GET | /students/new | Add New Student Form |
| POST | /students | Add a new student |
| GET | /students/:id | View student details |
| GET | /students/:id/edit | Show Edit Student Form |
| PATCH | /students/:id | Update student information |
| GET | /students/:id/delete | Show Delete Confirmation Page |
| DELETE | /students/:id | Delete a student |

---

# 🔍 Search Functionality

Users can search students by name.

Example:

```text
/students?search=Anas
```

The application filters matching students and displays the search results instantly.

---

# ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/mdanas5221/student-management-system.git
```

### Navigate to the project folder

```bash
cd student-management-system
```

### Install dependencies

```bash
npm install
```

### Start the server

```bash
node app.js
```

or

```bash
nodemon app.js
```

### Open your browser

```text
http://localhost:3000/students
```

---

# 📚 What I Learned

- Express.js Routing
- CRUD Operations
- REST API Principles
- Route Parameters (`req.params`)
- Query Parameters (`req.query`)
- Express Middleware
- EJS Templating
- Form Handling
- Search Functionality
- UUID
- Method Override
- Server-Side Rendering
- Dynamic Routing
- Client-side Validation

---

# 🎯 Future Improvements

- MongoDB Integration
- Mongoose
- Auto Generated Roll Numbers
- Student Profile Image Upload
- Authentication & Authorization
- Sorting & Filtering
- Pagination
- Dashboard & Analytics
- Flash Messages
- Better Error Handling

---

# 👨‍💻 Author

**Md Anas**

---

⭐ If you found this project helpful, consider giving it a star.