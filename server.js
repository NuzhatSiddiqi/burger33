var express = require("express");
var exphbs = require("express-handlebars");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//app.use(require("./routes/htmlRoutes"))(app);
// app.use(require("./routes/apiRoutes"))(app);


db.sync().then(function () {

  app.listen(PORT, function () {
    console.log("server listing on: http://localhost:" + PORT);
  });
});








