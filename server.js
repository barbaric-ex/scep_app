const express = require("express");
const expressSession = require("express-session");

const app = express();
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules/bootstrap/dist"));
app.use(express.static(__dirname + "/node_modules/bootstrap-icons/font"));
app.use(
  expressSession({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

// Middleware za postavljanje korisnika u `res.locals`
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

app.use("/", require("./routes"));

app.listen(process.env.PORT, function () {
  console.log("listening 3000 port....");
});
