const db = require("../database/config");

const index = async (req, res) => {
  const [payments] = await db.query(`SELECT * FROM payments
                                     JOIN students ON payments.student_id = students.student_id
                                     JOIN courses ON payments.course_id = courses.course_id  `);

  const [[sum]] = await db.query(`SELECT SUM(amount) as total FROM payments`);

  res.render("payments/index", { title: "Payments", payments, sum });
};

const store = async (req, res) => {
  const { student_id, course_id, amount } = req.body;
  await db.query(
    "INSERT INTO payments (student_id, course_id, amount) VALUES (?, ?, ?)",
    [student_id, course_id, amount]
  );
  res.redirect("/students/show/" + student_id);
};

module.exports = {
  index,
  store,
};
