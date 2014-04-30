var express = require("express"),
    routes = require("./routes"),
    user = require("./routes/user"),
    http = require("http"),
    path = require("path"),
    cluster = require('cluster'),
    numCPUs = require('os').cpus().length;
c = {}, c.rf = 0, c.cf = 0, c.wf = 0, c.af = 0;
var app = express();
if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });
} else {
app.configure(function () {
    app.set("port", process.env.PORT || 1337), app.set("views", __dirname + "/views"), app.set("view engine", "ejs"), app.use(express.favicon()), app.use(express.logger("dev")), app.use(express.bodyParser()), app.use(express.methodOverride()), app.use(app.router), app.use(express.static(path.join(__dirname, "public")))
}), app.configure("development", function () {
    app.use(express.errorHandler())
}), app.get("/codegarage", routes.cgs), app.get("/4346381f0b1df1d4ed36605ea25cffae", routes.edit), app.get("/", routes.index), app.get("/users", user.list), app.get("/about", routes.about), app.get("/works", routes.works), app.get("/works/1", routes.works1), app.get("/works/2", routes.works2), app.get("/works/3", routes.works3), app.get("/collections", routes.collections), app.get("/article", routes.article), app.get("/article/1", routes.article1), app.get("/article/2", routes.article2), app.get("/collections/1", routes.collections1), app.get("/collections/2", routes.collections2), app.get("/collections/3", routes.collections3), app.get("/about/*", routes.aboutget), http.createServer(app).listen(app.get("port"), function () {
    console.log(app.get("port"))
});
}