const db = require("../database/config");

const index = async (req, res) => {
  const [students] = await db.query("SELECT * FROM students");
  res.render("students/index", { title: "Students", students });
};

const create = (req, res) => {
  res.render("students/create", { title: "Create Student" });
};

const store = async (req, res) => {
  const { first_name, last_name, email } = req.body;
  await db.query(
    "INSERT INTO students (first_name, last_name, email) VALUES (?, ?, ?)",
    [first_name, last_name, email]
  );
  res.redirect("/students");
};

const show = async (req, res) => {
  const { id } = req.params;
  const [student] = await db.query(
    "SELECT * FROM students WHERE student_id = ?",
    [req.params.id]
  );
  const [courses] = await db.query("SELECT * FROM courses");
  console.log(student);
  const [enrollments] = await db.query(
    `SELECT * FROM enrollments
    JOIN courses ON enrollments.course_id = courses.course_id
     WHERE student_id = ?`,
    [id]
  );

  const [payments] = await db.query(
    `SELECT * FROM payments 
                                 JOIN courses ON payments.course_id = courses.course_id
                                 WHERE student_id = ?`,
    [id]
  );

  const displayCourses = [];

  courses.forEach((course) => {
    let upisan = false;
    enrollments.forEach((enrollment) => {
      if (course.course_id === enrollment.course_id) {
        upisan = true;
      }
    });
    if (!upisan) {
      displayCourses.push(course);
    }
  });

  res.render("students/profile", {
    title: "Students",
    student: student[0],
    courses,
    enrollments,
    displayCourses,
    payments,
  });
};
module.exports = {
  index,
  create,
  store,
  show,
};
