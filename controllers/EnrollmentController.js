const db = require("../database/config");

const store = async (req, res) => {
  const { student_id, course_id } = req.body;
  await db.query(
    "INSERT INTO enrollments (student_id, course_id) VALUES (?, ?)",
    [student_id, course_id]
  );
  res.redirect("/students/show/" + student_id);
};

module.exports = {
  store,
};
