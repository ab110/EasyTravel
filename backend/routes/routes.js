var appRouter = function (app) {

  app.get("/home", function (req, res) {
    console.log("home accessed");
    res.status(200).send({
      message: "backend connection successful success"
    });
  });

  app.get("/flightTest", function (req, res) {
    console.log("flights accessed");
    res.status(200).send({
      message: "flightTest success"
    });
  });

 app.get("/hotelTest", function (req, res) {
   console.log("hotels accessed");
    res.status(200).send({
      message: "hotelTest success"
    });
 });
}

module.exports = appRouter;
