module.exports = app => {

    const users= require("./usercontroller.js");

    var router = require("express").Router();


    router.post("/",users.create)
    router.get("/", users.home);
    //custom route
    app.use("/api/users", router);
}
