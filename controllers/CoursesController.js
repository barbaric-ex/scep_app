const db = require("../database/config");

const index = async (req, res) => {
  const [courses] = await db.query("SELECT * FROM courses");
  res.render("courses/index", { title: "Courses", courses });
};

const create = (req, res) => {
  res.render("courses/create", { title: "Courses" });
};

const store = async (req, res) => {
  const { title, instructor } = req.body;
  await db.query("INSERT INTO courses (title, instructor) VALUES (?, ?)", [
    title,
    instructor,
  ]);
  res.redirect("/courses");
};

module.exports = {
  index,
  create,
  store,
};
