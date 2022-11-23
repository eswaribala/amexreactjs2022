module.exports = app => {

    const users= require("./usercontroller.js");

    var router = require("express").Router();



    router.get("/", users.home);
    //custom route
    app.use("/api/users", router);
}
