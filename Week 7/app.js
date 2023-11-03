const express = require("express");
const path = require("path");

const { students, teachers } = require("./data.js");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/students", (req, res) => {
  const newStudents = students.map((student) => {
    const { id, name } = student;
    return { id, name };
  });
  // res.json(students);
  res.json(newStudents);
});

app.get("/api/students/:studentID", (req, res) => {
  const { studentID } = req.params;
  const student = students.find((student) => student.id === Number(studentID));
  if (!student) {
    return res.status(404).send("Student does not exists");
  }
  return res.json(student);
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedStudents = [...students];

  if (search) {
    sortedStudents = sortedStudents.filter((student) => {
      return student.name.startsWith(search);
    });
  }

  if (limit) {
    sortedStudents = sortedStudents.slice(0, Number(limit));
  }

  res.json(sortedStudents);
});

app.use(express.static("public"));

app.listen(3000, () => {
  console.log(`Example app listening on port 3000...`);
});
